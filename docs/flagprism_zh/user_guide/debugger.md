# Debugger

FlagPrism Debugger 用于观察 Triton kernel 内部的数值、内存访问和 operation 执行状态。它将编译期静态 metadata 与 device 运行期记录关联，导出 Triton 语句级报告、IR op 级报告和 level-2 NumPy artifact，用于定位数值异常、异常访存和 kernel 内部数据流问题。

动态采集和 hidden-argument launch 路径已在昇腾/CANN9 与天数/CoreX 4.4（LLVM 22）后端验证。

## 公开 API

唯一的公开 Python 导入路径是：

```python
import flagtree.debugger as debugger
```

不再提供 `triton.debugger` 公开命名空间。Triton JIT kernel 内的采集边界由 FlagTree language 扩展提供：

```python
ftl.debug_collect_start(level=1, addr_level=1)
# Triton operations to collect
ftl.debug_collect_end()
```

`flagtree.debugger` 负责 Python 配置、编译模式和导出；`ftl.debug_collect_start/end` 只负责界定 `@triton.jit` 内需要采集的 IR 区域。

## 快速开始

```python
from pathlib import Path
import torch
import torch_npu
import triton
import flagtree.debugger as debugger
import flagtree.language as ftl
import triton.language as tl

debugger.configure(
    output_dir=Path("/tmp/flagtree_debugger_example"),
    record_capacity=4096,
    export_raw_records=False,
)
debugger.activate(level=1, addr_level=1)

@triton.jit
def debug_abs_kernel(x_ptr, y_ptr, n: tl.constexpr, BLOCK_SIZE: tl.constexpr):
    offsets = tl.program_id(0) * BLOCK_SIZE + tl.arange(0, BLOCK_SIZE)
    mask = offsets < n
    ftl.debug_collect_start(level=1, addr_level=1)
    x = tl.load(x_ptr + offsets, mask=mask, other=0.0)
    y = tl.abs(x)
    z = y + 1.0
    tl.store(y_ptr + offsets, z, mask=mask)
    ftl.debug_collect_end()

n = 16
x = torch.linspace(-8, 7, n, dtype=torch.float32, device="npu")
y = torch.empty_like(x)
debug_abs_kernel[(1,)](x, y, n, BLOCK_SIZE=16)
torch_npu.npu.synchronize()

for run in debugger.take_exported_runs():
    print("report_path=", run.get("report_path"))
```

应在编译需要调试的 kernel 之前调用 `debugger.activate()`。它开启进程级 Debugger pipeline，但不记录 Python、PyTorch 或 `torch_npu` operation；只有 collect marker 之间的 Triton operation 才会被采集。

## 配置

`debugger.configure()` 修改后续 `activate()` 使用的默认配置，未传入的字段保持当前值。

```python
debugger.configure(
    output_dir="/tmp/flagtree_debugger_manual",
    record_capacity=4096,
    export_mode="POST_KERNEL_EXPORT",
    export_on_error=False,
    export_raw_records=False,
)
```

常用选项包括输出目录、记录容量、导出模式、出错时是否导出、以及是否保留原始记录。导出的报告包含配置目录下的语句/op 级报告和 level-2 NumPy artifact。

## 可用性

成功导入后，`debugger.is_available()` 可检查编译器和运行时 native binding 是否同时可用。core-only wheel（`TRITON_BUILD_FLAGPRISM=OFF`）不包含 `flagtree.debugger`。

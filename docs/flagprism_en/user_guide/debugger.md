# Debugger

FlagPrism Debugger observes values, memory access, and operation execution inside a Triton kernel. It associates compile-time static metadata with device-runtime records, then exports Triton statement-level reports, IR op-level reports, and level-2 NumPy artifacts. It is used to locate numerical anomalies, abnormal memory access, and in-kernel data-flow issues.

The dynamic collection and hidden-argument launch path is validated on Ascend/CANN9 and Tianshu/CoreX 4.4 (LLVM 22).

## Public API

The only public Python import path is:

```python
import flagtree.debugger as debugger
```

The legacy `triton.debugger` namespace is not provided. Collection boundaries inside a Triton JIT kernel are expressed with FlagTree language extensions:

```python
ftl.debug_collect_start(level=1, addr_level=1)
# Triton operations to collect
ftl.debug_collect_end()
```

`flagtree.debugger` handles Python configuration, compile mode, and export; `ftl.debug_collect_start/end` only marks the IR region to collect inside an `@triton.jit` kernel.

## Quick start

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

Call `debugger.activate()` before compiling the kernel you want to debug. It enables a process-level Debugger pipeline but does not record Python, PyTorch, or `torch_npu` operations; only Triton operations between the collect markers are captured.

## Configuration

`debugger.configure()` changes the defaults used by subsequent `activate()` calls; unspecified fields keep their current values.

```python
debugger.configure(
    output_dir="/tmp/flagtree_debugger_manual",
    record_capacity=4096,
    export_mode="POST_KERNEL_EXPORT",
    export_on_error=False,
    export_raw_records=False,
)
```

Common options include the output directory, record capacity, the export mode, whether to export on error, and whether to keep raw records. Exported reports include the statement/op-level report and level-2 NumPy artifacts under the configured output directory.

## Availability

After a successful import, `debugger.is_available()` reports whether both the compiler and runtime native bindings are present. A core-only wheel (`TRITON_BUILD_FLAGPRISM=OFF`) does not include `flagtree.debugger`.

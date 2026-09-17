# Profiler

FlagTree Profiler 是面向 Triton 的轻量级性能分析器，提供从 Python 调用的 GPU kernel 的程序上下文、metadata 和硬件性能指标。

## 基本用法

分析一个函数：

```python
import flagtree.profiler as profiler

# name：profile 数据路径
# context：每个 GPU kernel 上下文的标注方式，支持 "shadow" 和 "python"
session_id = profiler.profile(func, name="profile_name", context="python")(args)
```

分析一段代码区域：

```python
session_id = profiler.start(name="profile_name", context="python")
# ... 待分析代码 ...
profiler.deactivate(session_id)   # 跳过某区域
profiler.activate(session_id)     # 重新开始分析
# ...
profiler.finalize()               # 写出 profile 数据并结束
```

## Scope 与指标

`python` 上下文报告每个 GPU kernel 被调用的文件、函数和行号；`shadow` 上下文报告用户标注的区域：

```python
import flagtree.profiler as profiler

session_id = profiler.start(name="profile_name", context="shadow")
with profiler.scope("test0"):
    with profiler.scope("test1"):
        foo[1,](x, y)
with profiler.scope("test2"):
    foo[1,](x, y)
profiler.finalize()
```

`scope` 还接受自定义指标字典（指标名 -> int/float），会按 scope 聚合并写入 profile 数据：

```python
with profiler.scope("test0", {"bytes": 1000}):
    ...
```

## 后端与模式

FlagTree Profiler 支持五个后端：

| 后端 | 目标 | 说明 |
| --- | --- | --- |
| `cupti` | NVIDIA GPU | 默认分析模式和 `pcsampling`（指令采样）。 |
| `roctracer` | AMD GPU | 仅默认分析模式。 |
| `instrumentation` | NVIDIA 与 AMD | 自定义指标与细粒度 kernel 内 trace。 |
| `cann` | 昇腾 | 使用昇腾厂商适配器与 CANN 运行时/导入路径。 |
| `tianshu` | 天数/CoreX | 通过 CoreX 兼容驱动复用 Debugger instrumentation；从 ixKN CSV 导入指标。 |

默认情况下，profiler 根据活动目标后端自动选择 `cupti`、`roctracer`、`cann` 或 `tianshu`。可显式指定后端：

```python
profiler.start(name="profile_name", context="shadow", backend="cupti_pcsampling")
```

指令采样时，`flagtree-profiler-viewer` 的 `-i <regex> -d <depth> -t <threshold>` 选项可帮助过滤 op。`instrumentation` 后端支持细粒度模式生成 trace/tree。多个使用不同后端的并发 session 可在事后合并分析。

## 命令行

```bash
flagtree-profiler [options] script.py [script_args] [script_options]
flagtree-profiler [options] pytest [pytest_args] [script_options]
python -m flagtree.profiler.cli [options] script.py [script_args] [script_options]
```

命令行模式下会自动调用 `profiler.start` 和 `profiler.finalize`。

## 结果可视化

默认 profile 以 JSON 写出，可被 [Hatchet](https://github.com/hatchet/hatchet) 读取：

```bash
flagtree-profiler-viewer -m time/s <profile.hatchet>
flagtree-profiler-viewer -m time/ns,time/% <profile.hatchet> --print-sorted
flagtree-profiler-viewer -m time/ns,cpu_time/ns <profile.hatchet>
```

全部选项见 `flagtree-profiler-viewer -h`。

## 环境变量

运行时环境变量使用 `FLAGTREE_PROFILER_*` 前缀。公开 Python 入口为 `flagtree.profiler`，native 模块为 `flagtree.profiler._native`；CLI 工具为 `flagtree-profiler` 和 `flagtree-profiler-viewer`。

# Profiler

FlagTree Profiler is a lightweight profiler for Triton. It provides program context, metadata, and hardware performance metrics for the GPU kernels invoked from Python code.

## Basic usage

Profile a function:

```python
import flagtree.profiler as profiler

# name: path to the profile data
# context: how each GPU kernel's context is annotated; "shadow" and "python" are supported
session_id = profiler.profile(func, name="profile_name", context="python")(args)
```

Profile a region:

```python
session_id = profiler.start(name="profile_name", context="python")
# ... code to profile ...
profiler.deactivate(session_id)   # skip a region
profiler.activate(session_id)     # restart profiling
# ...
profiler.finalize()               # write profile data and finalize
```

## Scope and metrics

The `python` context reports file, function, and line where each GPU kernel is invoked. The `shadow` context reports user-annotated regions:

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

`scope` accepts a dictionary of custom metrics (metric name -> int/float), which are aggregated per scope and written to the profile data:

```python
with profiler.scope("test0", {"bytes": 1000}):
    ...
```

## Backends and modes

FlagTree Profiler supports five backends:

| Backend | Target | Notes |
| --- | --- | --- |
| `cupti` | NVIDIA GPUs | Default profiling mode and `pcsampling` (instruction sampling). |
| `roctracer` | AMD GPUs | Default profiling mode only. |
| `instrumentation` | NVIDIA and AMD | Custom metrics and detailed intra-kernel tracing. |
| `cann` | Ascend | Uses the Ascend vendor adapter and CANN runtime/import path. |
| `tianshu` | Tianshu/CoreX | Reuses Debugger instrumentation through the CoreX-compatible driver; imports ixKN CSV output. |

By default the profiler auto-selects `cupti`, `roctracer`, `cann`, or `tianshu` based on the active target backend. Select a backend explicitly:

```python
profiler.start(name="profile_name", context="shadow", backend="cupti_pcsampling")
```

For instruction sampling, the `flagtree-profiler-viewer` options `-i <regex> -d <depth> -t <threshold>` help filter operators. The `instrumentation` backend supports fine-grained modes for trace/tree generation. Multiple concurrent sessions with different backends can be merged for postmortem analysis.

## Command line

```bash
flagtree-profiler [options] script.py [script_args] [script_options]
flagtree-profiler [options] pytest [pytest_args] [script_options]
python -m flagtree.profiler.cli [options] script.py [script_args] [script_options]
```

In command-line mode, `profiler.start` and `profiler.finalize` are called automatically.

## Visualizing results

By default profiles are written in JSON and can be read by [Hatchet](https://github.com/hatchet/hatchet):

```bash
flagtree-profiler-viewer -m time/s <profile.hatchet>
flagtree-profiler-viewer -m time/ns,time/% <profile.hatchet> --print-sorted
flagtree-profiler-viewer -m time/ns,cpu_time/ns <profile.hatchet>
```

Run `flagtree-profiler-viewer -h` for all options.

## Environment

Runtime environment variables use the `FLAGTREE_PROFILER_*` prefix. The public Python entry point is `flagtree.profiler`, with the native module `flagtree.profiler._native`; CLI tools are `flagtree-profiler` and `flagtree-profiler-viewer`.

# Overview

FlagPrism centrally maintains FlagTree's optional debugging and profiling components. It is under active development.

## Components

- **Debugger** (`Debugger/`) — Python and native implementation of `flagtree.debugger`. It observes Triton kernel-internal values, memory access, and operation execution by associating compile-time static metadata with device-runtime records, and exports Triton statement-level reports, IR op-level reports, and level-2 NumPy artifacts.
- **Profiler** (`Profiler/`) — Python package, native runtime, and CLI for `flagtree.profiler`. A lightweight profiler for Triton that reports program context, metadata, and hardware performance metrics for invoked GPU kernels.
- **`cmake/FlagPrism.cmake`** — central CMake build policy and target integration for both components.
- **`python/flagprism_build.py`** — package, CLI, and CMake argument policy for the unified wheel.

## Relationship to FlagTree

FlagTree consumes FlagPrism as the `third_party/FlagPrism` submodule. The `flagtree-debugger` and `flagtree-profiler` wheels are no longer published separately. Running `pip wheel .` from the FlagTree repository builds the core, Debugger, and Profiler in one CMake graph and packages them into a single FlagTree wheel:

- Debugger sources install as `flagtree.debugger`.
- `Profiler/python/flagtree_profiler` installs as `flagtree.profiler`.
- Both components place their `_native` extensions in the same wheel.

The Debugger compiler plugin links into `libtriton`; its runtime transport and decoding live in the standalone `flagtree.debugger._native` extension, which does not link against `libtriton`.

## Build modes

The Python wheel supports exactly two build modes:

1. **Combined build (default)** — Debugger and Profiler built together (`TRITON_BUILD_FLAGPRISM=ON`).
2. **Core-only build** — `TRITON_BUILD_FLAGPRISM=OFF`; neither tool package is included.

The two components cannot be enabled or disabled independently. `TRITON_BUILD_FLAGPRISM` is the only component build switch. A vendor backend can be selected with `FLAGPRISM_BACKEND` (for example `tianshu`).

## Supported backends

- **Debugger** dynamic collection and hidden-argument launch paths are validated on Ascend/CANN9 and Tianshu/CoreX 4.4 (LLVM 22).
- **Profiler** supports the `cupti` (NVIDIA), `roctracer` (AMD), `instrumentation` (NVIDIA/AMD), `cann` (Ascend), and `tianshu` (Tianshu/CoreX) backends.
- On Ascend, the default `backend="cann", hook="triton"` IR collection path reuses the Debugger instrumentation runtime, so the two tools are built and distributed as one suite.
- Tianshu/CoreX is available as `backend="tianshu"`; its in-process Debugger runtime uses the CUDA-compatible CoreX driver surface, and ixKN vendor metrics are collected with the external `ixkn-cli` wrapper and imported from CSV.

## Status

FlagPrism is under construction and active development. There is no tagged release yet; it is consumed directly from the FlagTree submodule.

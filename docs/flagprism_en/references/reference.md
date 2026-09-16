# Reference

## Project links

- **Repository**: [flagos-ai/FlagPrism](https://github.com/flagos-ai/FlagPrism)
- **FlagTree**: [flagos-ai/FlagTree](https://github.com/flagos-ai/FlagTree)
- **License**: MIT License

## Source layout

| Path | Contents |
| --- | --- |
| `Debugger/` | `flagtree.debugger` Python and native implementation; IR, instrumentation, metadata, runtime, Python bindings, tests, and samples. |
| `Profiler/` | `flagtree.profiler` Python package, native runtime, CLI, Proton/ProtonGPU MLIR dialects and LLVM conversion, vendor adapters (CANN, Tianshu), tutorials, and tests. |
| `cmake/FlagPrism.cmake` | Centralized CMake build policy and target integration. |
| `python/flagprism_build.py` | Package, CLI, and CMake argument policy for the unified wheel. |
| `docs/CHIP_VENDOR_ADAPTATION_REQUIREMENTS.md` | Chip vendor adaptation requirements for Profiler and Debugger. |

## Public interfaces

- Debugger Python entry point: `flagtree.debugger` (native extension `flagtree.debugger._native`).
- In-kernel markers: `ftl.debug_collect_start(...)` / `ftl.debug_collect_end(...)`.
- Profiler Python entry point: `flagtree.profiler` (native extension `flagtree.profiler._native`).
- Profiler CLI: `flagtree-profiler`, `flagtree-profiler-viewer`.
- Build switch: `TRITON_BUILD_FLAGPRISM=ON|OFF`; vendor selector: `FLAGPRISM_BACKEND`.
- Profiler environment variables: `FLAGTREE_PROFILER_*`.

## Backend support

- Profiler backends: `cupti` (NVIDIA), `roctracer` (AMD), `instrumentation` (NVIDIA/AMD), `cann` (Ascend), `tianshu` (Tianshu/CoreX).
- Debugger dynamic collection validated on Ascend/CANN9 and Tianshu/CoreX 4.4 (LLVM 22).

## Related components

- [FlagTree](https://github.com/flagos-ai/FlagTree) — the Triton-based compiler and language runtime that consumes FlagPrism as a submodule.
- [FlagGems](https://github.com/flagos-ai/FlagGems) — Triton operator library; FlagPrism Debugger includes FlagGems regression/debug batch tooling.

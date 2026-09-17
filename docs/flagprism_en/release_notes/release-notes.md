# Release Notes

## Unreleased (FlagOS 2.2 in development)

FlagPrism is the new home for FlagTree's optional debugging and profiling tool suite, tracked under FEP-0068 (FlagTree DevTools). The repository was created on 2026-08-04 and is under active development; there is no tagged release yet, and it is consumed by FlagTree as the `third_party/FlagPrism` submodule.

- **Unified tool suite** — centrally maintains `flagtree.debugger` and `flagtree.profiler`, built together into the single FlagTree wheel via one CMake graph. Standalone `flagtree-debugger`/`flagtree-profiler` wheels are no longer published.
- **Debugger** — compile-time metadata associated with device-runtime records; exports Triton statement-level reports, IR op-level reports, and level-2 NumPy artifacts. Public API: `flagtree.debugger` plus in-kernel `ftl.debug_collect_start/end` markers. Dynamic collection and hidden-argument launch validated on Ascend/CANN9 and Tianshu/CoreX 4.4 (LLVM 22).
- **Profiler** — lightweight Triton profiler with function/region profiling, `shadow`/`python` context, custom scope metrics, five backends (`cupti`, `roctracer`, `instrumentation`, `cann`, `tianshu`), CLI tools (`flagtree-profiler`, `flagtree-profiler-viewer`), and Hatchet-compatible JSON output.
- **Build modes** — combined Debugger+Profiler build (`TRITON_BUILD_FLAGPRISM=ON`, default) or core-only (`OFF`); the two cannot be enabled independently. Vendor backend selector `FLAGPRISM_BACKEND` (e.g. `tianshu`).
- **Vendor adaptation** — documented `VendorAdapter`/`Profiler`/`VendorMetricsImporter` interfaces plus Debugger hidden-argument/debug-record requirements for new chip vendors.
- **Testing** — C++ unit tests, lit/FileCheck MLIR tests, Python tests (including Ascend suites), and runtime smoke/async-loop tests.

### Status for FlagOS 2.2

FlagPrism is under construction. FEP-0068 is in the Implementable stage; the repository now exists with active Debugger and Profiler development, but no release tag has been cut and full multi-backend support is still being completed. Refer to the repository for the latest backend validation status.

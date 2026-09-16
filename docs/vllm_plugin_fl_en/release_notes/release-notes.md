# Release Notes

This section includes the vllm-plugin-FL release information.

## v0.3.0-rc0

```{note}
This is the FlagOS 2.2 release candidate (published 2026-08-24, tag `v0.3.0-rc0`). Version numbers and supported-platform lists will be finalized at GA.
```

vllm-plugin-FL v0.3.0-rc0 requires [vllm v0.24.0](https://github.com/vllm-project/vllm/tree/v0.24.0).

- **Added Features**

  - Upgraded vLLM compatibility from v0.20.2 to v0.24.0, including support for the official vLLM 0.24 CUDA stable-ABI wheels.
  - Added and re-adapted vendor backends for vLLM 0.24.0:
    - MetaX C550 backend adaptation (#294, building on the 0.20.2 adaptation in #241).
    - Moore Threads MUSA (MTT S5000) backend adaptation (#308, building on the 0.20.2 update in #176).
    - Iluvatar BI-V150 backend adaptation (#310).
    - T-Head vendor attention backend (#360).
    - PPU empty-mode support (#190).
  - Added the `weak_ref_tensor` C++ extension with a CMake build system (#231).
  - Added `BreakableCUDAGraphWrapper` support for out-of-tree vendor backends on vLLM 0.24.0+ (#342), and enabled CUDA graph on Iluvatar (#232).
  - Upgraded the FlagCX connector to support vLLM 0.20–0.24 (#295).

- **Improved Features**

  - Ascend fused module refactor: reworked the fused-MoE implementation and consolidated the vendor fused modules (#240, cherry-pick of #136).
  - Dispatch enhancements: opt-in Hopper long-context routing (#384); routed `fused_experts` through FlagGems (#230); fixed `GroupedTopKRouterFL` `valid_grouping` closure (#237); updated the NVIDIA FlagGems blacklist and supported-vendor list (#222, #228); removed direct FlagGems calls from the MUSA vendor backend (#376); improved `CachedOp` fast-path diagnostics and fallback behavior (#206).
  - CUDA graph robustness: disable CUDA graph for non-DeepEP backends (#346); account for CUDA graph memory in KV cache sizing (#381); MTP fixes for vLLM 0.24.0 (#334, #337).
  - Worker fixes: preserve data-parallel GPU offset for independent engines (#380); guard `kernel_warmup` against missing `torchvision` on out-of-tree runtimes (#386); MetaX `all_reduce` now passes `group=device_group` (#348).

## v0.2.0


vllm-plugin-FL v0.2.0 requires [vllm v0.20.2](https://github.com/vllm-project/vllm/tree/v0.20.2). Supported platforms: NVIDIA, Hygon DCU.

- **Added Features**

  - Qwen3.6-35B-A3B model support with text and image inference/serving
  - Qwen3.6-27B model support with text and image inference/serving
  - Hygon DCU platform support with DTK container-based deployment
  - Serving-based test workflow (vllm serve + OpenAI client) for multimodal models

- **Improved Features**

  - Extended NVIDIA platform test matrix with Qwen3.6 model coverage
  - Updated vLLM compatibility to v0.20.x

## v0.1.0

vllm-plugin-FL v0.1.0 requires [vllm v0.13.0](https://github.com/vllm-project/vllm/tree/v0.13.0). Supported platforms: NVIDIA, Ascend, T-Head, MetaX, Iluvatar.

- **Added Features**

  - Initial release of vllm-plugin-FL as a vLLM inference/serving framework plugin
  - Unified multi-chip backend support via FlagGems and FlagCX integration
  - Flexible operator dispatch system with FlagGems, vendor-specific, and PyTorch reference backends
  - End-to-end verified support for Qwen3.5-397B-A17B, Qwen3-Next-80B-A3B, Qwen3-4B, MiniCPM-o 4.5, GLM-5, Qwen3.5-35B-A3B, and BAAI/bge-m3 models
  - Hardware support for NVIDIA, Ascend, T-Head, MetaX, and Iluvatar chips
  - Platform-specific configuration files (ascend.yaml, cuda.yaml) for auto-detected defaults
  - Environment variable-based configuration for backend selection, vendor filtering, and operator control
  - YAML configuration file support for complete dispatch policy override
  - Multi-process safe operator registry with thread-safe cache operations

- **Improved Features**

  - Optimized dispatch flow with caching for resolved operators
  - Fallback mechanism from preferred backend to available alternatives on failure
  - Per-operator backend selection order configuration
  - Whitelist and blacklist support for FlagGems and OOT operators
  - Debug logging mode for dispatch system troubleshooting

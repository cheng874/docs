# Release Notes

This section includes the vllm-plugin-FL release information.

## v0.3.0-rc2 (release candidate)

```{note}
This is the FlagOS 2.2 release candidate (published 2026-09, tag `v0.3.0-rc2.post1`; supersedes `v0.3.0-rc0` from 2026-08-24). Version numbers and supported-platform lists will be finalized at GA.
```

vllm-plugin-FL v0.3.0-rc2 requires [vllm v0.24.0](https://github.com/vllm-project/vllm/tree/v0.24.0).

New since rc0 (from compare `v0.3.0-rc0...v0.3.0-rc2.post1`):

- **Added Features**

  - Qwen3.5 text-only runtime compatibility on vLLM 0.24 (#383).
  - W8A8 quantization inference adapted to vLLM 0.24 (#336); Arm CPU integration of Qwen packed W4A8 and GDN (#433).
  - FlagCX connector: Prometheus KV-transfer metrics and port of #315 from release/0.2 (#418).
  - Sunrise attention backend ported to vLLM 0.24.0 (CUSTOM registration + ptpu `memory_stats` shim) (#391); TXDA support on empty vLLM 0.24.0 (#447); Hygon workflow enabled for vLLM 0.24.0 (#436).
  - Dispatch: support appending FlagGems blacklist entries (#439); custom throughput test cases (#426); batched MTP xGrammar masks (#414).
  - Version documentation page (#403); CI migrated from release/0.2 to main (#415) with `/rerun-failed-ci` and `/cancel-ci` PR comment commands (#480).

- **Fixed**

  - GDN: keep packed decode beta in fp32 (#385).
  - Iluvatar: consolidate Triton patches at module level and remove dead code (#406).
  - Keep available reference fallbacks registered in dispatch (#440); inherit native MXFP8 candidates for out-of-tree backends (#441).
  - Restore FlagGems KV cache updates from #382 (#474) and T-Head static graph support from #279 (#472).

The rc0 content below remains part of this release candidate:

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

### FlagOS 2.2-RC0 cross-vendor verification

The v0.3.0 release candidate was verified across the following vendors during the FlagOS 2.2-RC0 cycle (runs used `0.3.0-rc0`; `0.3.0-rc2` carries the same vendor adaptations plus the fixes listed above). Every entry lists the components actually installed and the checks that passed; entries that did not complete are marked and reference the tracking issue.

| Platform | vLLM | plugin | FlagGems | FlagTree (backend) | Result |
|----------|------|--------|----------|--------------------|--------|
| MetaX C550 | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6 (metax) | Components import, FlagTree builds (TRITON 3.6.0, `['metax']`); `KeyError: 'BLOCK_M'` not reproduced |
| Hygon BW1000 | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 + flash-attention fix | 0.7.0-rc0-triton3.6 (hcu) | Components import; `compressed_tensors` upgrade required for vLLM 0.24.0 |
| Hygon BW1000 | 0.20.0+das native | 0.3.0-rc0 | 5.4.0-rc0 + flash-attention fix | 0.7.0-rc0-triton3.6 (hcu) | Native-mode environment verified |
| Iluvatar BI-V150 | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6 (iluvatar) | `vllm serve` starts, CUDA graph capture succeeds, first request returns 200 OK; cold-cache LM-head autotune still open |
| Moore Threads MTT S5000 | 0.24.0 empty | 0.3.0 | 5.4.0-rc0.post1 | 0.7.0-rc0-triton3.6 (mthreads) | Runs on the development stack; the rc0 standard stack (FlagGems 5.3.4 + Triton 3.2.0) stops at FlagGems autotune |
| Alibaba PPU | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6 (ppu) | Source build of the FlagTree PPU backend blocked by [FlagTree #1131](https://github.com/flagos-ai/FlagTree/issues/1131); the `release/0.2` plugin path with the image toolchain was verified |
| Ascend 910c | 0.20.2 empty | 0.2.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.5 (ascend) | Components import; requires `enforce_eager` and `TRITON_ALL_BLOCKS_PARALLEL=1` |
| Tsingmicro TX8110 | 0.20.2 (in image) | 0.2.0 | 4.2.1 (in image) | 0.7.0-rc0-triton3.3 (tsingmicro) | Offline and online serving verified for Qwen3.6-27B and Qwen3.6-35B-A3B |
| Enflame ZIXIAOC200 | 0.20.2 empty | 0.2.1 | 5.3.1 (in image) | 0.7.0-rc0-triton3.6 (enflame) | `vllm serve` starts |
| Sunrise S2 | 0.20.2+flagos empty | 0.2.2-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6 (sunrise) | Text inference verified; vision embedding numerical issue open |
| Kunlunxin P800 | 0.20.2 empty | 0.2.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6 (kunlunxin) | Installation verified; model loading blocked by a backend architecture incompatibility |

Pre-built images for these configurations are published on the FlagOS resource download page: <https://flagos.io/resourcedownload>.

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

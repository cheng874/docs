# Release Notes

## v0.2.0-rc2 (release candidate)

```{note}
This is the FlagOS 2.2 release candidate (tag `v0.2.0-rc2.post1`, published 2026-09). Version numbers and supported-platform lists will be finalized at GA.
```

- **Added Features**

  - New out-of-tree vendor backends: MUSA (#6), TXDA (#33), Kunlunxin KLX (#41), Iluvatar (#34), Hygon (#35, renamed from hcu in #78), Enflame GCU (#42), and T-Head/PPU CUDA-compatible vendor routing (#27) with a default PPU attention backend (#63) and T-Head PPU-ZW810E CI (#64).
  - Multi-platform attention backend support (#28) and CUDA graph enablement on Ascend and MUSA (#31).
  - FlagCX full communication replacement for pipeline parallelism (#26), with FlagCX comm enabled on Ascend/MUSA and platform-aware multi-node examples (#32); multi-node inference examples for Qwen3.6 models (#16) with pipeline-parallel support (#23).
  - FlagCX KV transfer backend for PD disaggregation (#59).
  - MTP (Multi-Token Prediction) support for Qwen3.6-27B (#58).
  - Engine overrides (#62) and empty-device support for national-platform deployment (#43).
  - End-to-end throughput benchmark script for the SGLang server (#40); end-to-end CI for MUSA (#54), Ascend NPU (#57), and CUDA (#45, #37).

- **Improved / Fixed**

  - Dispatch cache for strict-mode `call()` to eliminate L2 overhead (#21); `SGLANG_FL_STRICT` semantics aligned (#69).
  - Compatibility with the FlagGems 5.3.0-rc2 DeviceDetector path change (#29, #30).
  - DeviceInfo service class refactor with a vendor early-patches mechanism (#73); device compatibility fix (#66).
  - YAML-based FlagGems blacklist maintenance for NPU (#55) and MUSA layer1 configs (#56); Ascend vendor patch for PP comm and Qwen3-VL (#49).
  - MUSA PP multi-request hang fix (#36); torch_musa `isin` bypass and VL accuracy fix (#79); multi-node prime-sequence validation (#80).
  - Apache-2.0 license and copyright headers added (#46, #47).

## v0.1.0


Initial release of sglang-plugin-FL.

- Added features

  - Three-layer operator replacement architecture for SGLang:
    - **Layer 1**: ATen operator replacement via FlagGems Triton kernels
    - **Layer 2**: SGLang fused kernel dispatch (SiluAndMul, RMSNorm, RotaryEmbedding)
    - **Layer 3**: Distributed communication via CommunicatorFL (FlagCX / torch.distributed)
  - Non-intrusive plugin architecture using SGLang entry_points
  - Per-operator backend selection with automatic fallback
  - YAML configuration and environment variable control
  - Bridge layer decoupling framework-specific parameters from standardized op signatures
  - Vendor auto-discovery mechanism — same backends work for both sglang-plugin-FL and vllm-plugin-FL
  - Support for NVIDIA CUDA, Huawei Ascend, and extensible to other hardware
  - Verified models: Qwen3.6-27B, Qwen3.6-35B-A3B, Qwen2.5-14B-Instruct
  - Dispatch logging and ATen replacement logging for debugging
  - Precision bisection workflow for numerical debugging
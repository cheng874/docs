# Release Notes

This section includes the TransformerEngine-FL release information.

## v0.3.0 (release candidate)

```{note}
This is the FlagOS 2.2 release candidate (tag `v0.3.0-rc2.post1`, published 2026-09; supersedes `v0.3.0-rc0` and `v0.3.0-rc1`). Version numbers and supported-platform lists will be finalized at GA.
```

TransformerEngine-FL v0.3.0 synchronizes with upstream NVIDIA TransformerEngine v2.17.

- **Added Features**

  - Upstream synchronization to TransformerEngine v2.17 (#105).
  - FlagOS Triton fused RoPE kernels (#83).
  - FlagOS layer normalization operator (#72).
  - `multi_tensor_compute_scale_inv_e8m0` (#74).
  - Bias support for `generic_gemm` (#70).
  - Tsingmicro TXDA vendor backend (#88).
  - Ascend: integration of `transformer_engine_npu`, plus a fix for the GEMM operator in the reference backend (#89).
  - KunlunXin TE-FL backend patches (#84).
  - Hygon: `multi_tensor_scale_tensor` implemented through `multi_tensor_scale` in `transformer_engine_hygon` 2.13 (#85).

- **Improved Features**

  - Completed the FlagOS Adam interfaces (#108) and the Reference Adam interfaces (#109).
  - Aligned the reference `compute-scale` semantics (#110) and the vendor communication-overlap factory arguments (#115).
  - Exposed the backend ops required by TP communication overlap (#95).
  - Improved Hygon library path resolution with a fallback (#82).

- **Fixed**

  - Honor the flash-attention disable flag (#118).
  - Plugin `te_general_grouped` test bug (#81).

- **CI/CD**

  - Expanded CUDA unit test coverage (#73); added Ascend NPU unit tests (#91), a Hygon BW1000 reference baseline with standardized plugin tests (#92), a MUSA workflow (#93), KunlunXin unit and MCore integration tests (#94), and an Enflame s60 reference baseline (#98).
  - Updated the NVIDIA runner label to `flagcicd-a100` (#111).

## v0.2.0


- **Added Features**

  - TE V2.14 Upstream Synchronization — Integrated NVIDIA TransformerEngine upstream v2.14 (304 commits, v2.9.0 → v2.14.0), incorporating MXFP8/NVFP4 quantization, Blackwell (sm120) architecture support, FSDP2 with DTensor-aware optimizer states, fused RMSNorm dLN with add-through, and MoE grouped MLP ops. The FlagOS plugin system is fully preserved with synced OP API signatures and multi-backend compatibility patches.
  - KunlunXin Vendor Backend — Added KunlunXin chip vendor operator support with flash attention and operator registration.
  - ENFLAME Vendor Backend — Added ENFLAME chip vendor operator support with flash attention and operator registration.
  - FlagOS Grouped GEMM Operator — Implemented `te_general_grouped_gemm` for the flagos backend based on FlagGems Triton kernels, supporting both forward and backward computation.
  - CI/CD Enhancements — Added MetaX MACA CI workflow, coverage reporting to FlagCICD platform, and workflow refactoring with integration tests.

## v0.1.0

Initial release of TransformerEngine-FL.

- **Added Features**

  - Multi-Backend Plugin Architecture — Plugin-based operator dispatch system (`OpRegistry`, `OpManager`, `SelectionPolicy`) with three backend tiers: FlagOS (default/Triton), Vendor (hardware-specific), and Reference (pure PyTorch).
  - Vendor Backends — Added five hardware vendor backends: Hygon (DCU), METAX (GPU with flash attention), KunlunXin (Baidu Kunlun with flash attention), Iluvatar (Corex GPU), and MUSA (Moore Threads S-series GPU).
  - FlagOS Backend — FlagGems-based unified operator dispatch with FlagCX communication library integration.
  - Attention System — Multi-vendor attention backend framework with flash attention integration.
  - CI/CD Pipeline — GitHub Actions workflow with multi-vendor test matrix.

# Release Notes

This section includes the Megatron-LM-FL release information.

## v0.3.0 (release candidate)

```{note}
This is the FlagOS 2.2 release candidate (tag `v0.3.0-rc2.post1`, published 2026-09; supersedes `v0.3.0-rc0` and `v0.3.0-rc1`). Version numbers and supported-platform lists will be finalized at GA.
```

Megatron-LM-FL v0.3.0 synchronizes with upstream Megatron-LM v0.18.2 and requires Python >= 3.12.

- **Added Features**

  - Upgraded to Megatron-LM v0.18.2 (#109).
  - New platform backends: ENFLAME (#45), KunlunXin (#63), and MUSA (#92), following the existing platform plugin pattern.
  - DSA structure support for the `GLM5` / `GLM5.1` / `GLM5.2` model family (#69), with a fused DSA kernel for sm90 (#86).
  - Chunked cross-entropy to reduce memory usage (#126).
  - Engram sequence-parallel support (#56) and a Triton mHC fused kernel (#71).
  - Ascend native integration of the MegatronAdaptor module on FlagOS (#68).
  - TXDA platform upgraded to v0.17.0 (#87).
  - Compatibility between MoE 1F1B overlap and MHC, preserving backward compatibility when MHC is disabled (#54).

- **Improved Features**

  - Override mechanism upgrade (#59).
  - Migrated the XME blocking patches and the remaining XME core patches into Megatron-LM-FL overrides (#70, #74).
  - Incremental TransformerEngine-FL build and runtime integration in CI (#128), with a retry mechanism for the TE-FL prepare/checkout steps (#140).

- **Fixed**

  - Precision error versus upstream Megatron-LM caused by the `moe_act_func` and MHC recompute data types (#73).
  - Engram: removed the incorrect `sequence_parallel` flag on Engram sub-modules (#75).
  - DualPipeV and DeepSeek-V4 fixes (#48, #64).
  - `get_device_type` error (#60) and shared-storage path handling (#66).
  - Platform and device name reporting in the plugin layer (#151, #154), native accelerator detection preference (#148), non-CUDA accelerator runtimes (#156), process-group world size for expert data parallelism under heterogeneous setups (#149), and duplicate P2P communicator stage properties (#150).
  - `megatron_fsdp` cherry-pick fix (#79), checkpoint energy monitoring guard (#78), and removal of generated training coverage tests (#82).

- **CI/CD**

  - Multi-platform unit and functional test coverage expanded across MetaX (#51, #58, #65), Ascend (#89), MUSA (#92), KunlunXin P800 (#100), Hygon BW1000 (#93), and Enflame (#113), plus updated platform test images (#129) and a CUDA runner label update (#137).

## v2.6

- **Added Features**

  - Partial (layer-selective) Transformer checkpointing — checkpoint only a configurable number of individual Transformer layers instead of the full model.
  - Conditional release of `grad`/`main_grad` memory in `copy_model_grads_to_main_grads` after the copy, plus a flag for emptying unused memory.
  - Contiguous gradient buffers made the default in local DDP, with fixes for Torch DDP and removal of the contiguous buffer for checkpointed activations.
  - Pipeline schedules no longer save input/output tensors for forward-only passes; additional asserts for local DDP and `params_have_main_grad`.
  - `destroy_model_parallel` now destroys more process groups; torch.distributed init switched from TCP to the `env` method.

- **Fixed**

  - SIMD fixes in fused kernels for short sequences and the upper-triangular softmax kernel; additional fused-softmax bug fixes.
  - Across-rank synchronization for checkpoint iteration load, with timing type and validation-iteration fixes.
  - Various argument-naming and typo fixes in distributed examples and `mappings.py`.

## v2.5

```{note}
The v2.5 tag shares its base history with the upstream Megatron-LM lineage; the v2.0 → v2.5 compare contains a large amount of historical upstream sync commits. The entries below summarize the FlagOS-side changes verified in that range.
```

- **Added Features**

  - Upstream Megatron-LM synchronization across the v2.x line, bringing the fork up to date with upstream core improvements (training schedules, fused kernels, distributed checkpointing, and API server support).
  - Continued multi-platform backend maintenance on top of the plugin dispatch system introduced in earlier releases (CUDA, MetaX, MUSA, TXDA, NPU).

## v0.2.0


- **Added Features**

  - DeepSeek V4 Model Support — Full training support for DeepSeek V4 architecture including CSA/HCA attention variants, Hash Router for MoE token routing, Multi-Head Hyper-Connection (mHC), Engram auxiliary memory module, and Multi-Token Prediction (MTP) enhancements. New fused kernels: `fused_mhc_kernels`, extended `fused_mla_yarn_rope_apply`.

  - TXDA Platform Backend — Added Tsingmicro chip support via `platform_txda.py`, including optimizer and pipeline schedule adaptations for TXDA hardware.

  - NPU Platform Backend — Added Ascend NPU support via `platform_npu.py`, following the existing CUDA/MUSA platform pattern.

  - Multi-Vendor Plugin Dispatch — Extended the `@override` decorator system with runtime vendor selection via `MG_FL_PREFER` environment variable. Four-level fallback: preferred vendor → default vendor → sole vendor → None.

  - Core 0.17.0 Upgrade — Synchronized with upstream Megatron-LM Core 0.17.0, preserving FlagScale-specific patches including Engram DDP buffer separation, hetero pipeline support, `qk_layernorm_hidden_dim` support, and `cur_platform` abstraction.

  - CI/CD Enhancements — Multi-platform unit and functional tests (CUDA + MetaX), Qwen3 benchmark gate with A100 golden values, pylint >= 9.0 lint gate, and coverage reporting to FlagCICD platform.


## v0.1.0

Initial release of Megatron-LM-FL.

- **Added Features**

  - Plugin System — `@overridable` / `@override` decorator mechanism for platform-specific method replacement without modifying upstream code.
  - Multi-Platform Support — Hardware abstraction via `PlatformBase` with implementations for NVIDIA (CUDA), MetaX, Moore Threads (MUSA), TXDA (Tsingmicro), and NPU (Ascend).
  - Full Upstream Compatibility — All upstream Megatron-LM features preserved, including advanced parallelism strategies (TP, PP, DP, EP, CP), mixed precision (FP16, BF16, FP8), and GPU-optimized kernels.

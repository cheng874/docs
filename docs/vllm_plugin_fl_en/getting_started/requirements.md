# Requirements

## Software Requirements

| Requirement | v0.1.0 (vLLM 0.13.0) | v0.2.0 (vLLM 0.20.0 or vLLM 0.20.2) | v0.3.0-rc2 (vLLM 0.24.0) | Notes |
|-------------|----------------------|----------------------|----------------------|-------|
| Python | 3.10 - 3.13 | 3.10 - 3.13 | 3.10 - 3.13 | Required |
| PyTorch | >= 2.7.1 | >= 2.7.1 | >= 2.7.1 | Required |
| vLLM | 0.13.0 | 0.20.2 | 0.24.0 | From official release (NVIDIA) or source with `VLLM_TARGET_DEVICE=empty` (non-NVIDIA) |
| FlagGems | >= v5.0.0 | >= v5.0.0 | >= v5.0.0 | Required for operator dispatch |
| FlagCX | v0.9.0 | v0.9.0 | v0.9.0 | Optional, for multi-chip communication |
| FlagTree | 0.4.0 | 0.4.0 | 0.7.0-rc0-triton3.6 | Built from the `0.7.0-rc0` release branch with the matching vendor backend (see [Install from source](install.md)). Ascend uses `0.7.0-rc0-triton3.5`; Tsingmicro uses `0.7.0-rc0-triton3.3` |

## Supported hardware platforms

The following table summarizes supported hardware and their verification status:

| Chip Vendor | v0.1.0 (vLLM 0.13.0) | v0.2.0 (vLLM 0.20.0 or vLLM 0.20.2) | v0.3.0-rc2 (vLLM 0.24.0) | Notes |
|-------------|----------------------|----------------------|----------------------|-------|
| NVIDIA | Supported | Supported | Supported | |
| Ascend | Supported | — | Supported | Requires FlagTree and eager execution |
| MetaX | Supported | — | Supported | MetaX C550 adapted for vLLM 0.24.0 |
| T-Head | Supported | — | Supported | |
| Iluvatar | Supported | — | Supported | BI-V150 adapted for vLLM 0.24.0; CUDA graph enabled |
| Moore Threads | Supported | — | Supported | MTT S5000 adapted for vLLM 0.24.0 |
| Tsingmicro | Merging | — | Supported | [PR #52](https://github.com/flagos-ai/vllm-plugin-FL/pull/52) |
| Hygon DCU | Supported | Supported | Supported | Requires DTK container (see install guide) |
| Sunrise | Supported | — | Supported | |
| PPU | — | — | Supported | Empty-mode support (#190); source build of the FlagTree PPU backend is still in progress (FlagTree #1131) |

## Verified configurations (FlagOS 2.2-RC0)

The configurations below were exercised end to end during the FlagOS 2.2-RC0 cross-vendor verification. "Verified" means the listed components installed, imported and passed the recorded checks; items marked otherwise are still open and reference the tracking issue. The plugin version column records the build that was actually installed for the run (`0.3.0-rc0` for the vLLM 0.24.0 groups); the current release candidate is `0.3.0-rc2` and its verified behaviour is unchanged for these configurations.

| Platform | Accelerator | vLLM | vllm-plugin-FL | FlagGems | FlagTree (backend) | Status |
|----------|-------------|------|----------------|----------|--------------------|--------|
| MetaX | MACA C550 x8 | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6 (metax) | Environment and FlagTree build verified; `KeyError: 'BLOCK_M'` not reproduced |
| Hygon DCU | BW1000 x8 | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 + flash-attention fix | 0.7.0-rc0-triton3.6 (hcu) | Environment verified |
| Hygon DCU | BW1000 x8 | 0.20.0+das native | 0.3.0-rc0 | 5.4.0-rc0 + flash-attention fix | 0.7.0-rc0-triton3.6 (hcu) | Native-mode environment verified |
| Iluvatar | BI-V150 x16 | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6 (iluvatar) | `vllm serve` starts, CUDA graph capture and the first request return 200 OK; cold-cache autotune still open |
| Moore Threads | MTT S5000 x8 | 0.24.0 empty | 0.3.0 | 5.4.0-rc0.post1 | 0.7.0-rc0-triton3.6 (mthreads) | Runs on the development stack; the rc0 standard stack (FlagGems 5.3.4 + Triton 3.2.0) stops at FlagGems autotune |
| Alibaba PPU | PPU x16 | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6 (ppu) | Source build of the FlagTree PPU backend blocked (FlagTree #1131); `release/0.2` plugin path verified |
| Ascend | 910c x16 | 0.20.2 empty | 0.2.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.5 (ascend) | Environment verified, requires eager execution |
| Tsingmicro | TX8110 x32 | 0.20.2 (in image) | 0.2.0 | 4.2.1 (in image) | 0.7.0-rc0-triton3.3 (tsingmicro) | Offline and online serving verified |
| Enflame | ZIXIAOC200 x8 | 0.20.2 empty | 0.2.1 | 5.3.1 (in image) | 0.7.0-rc0-triton3.6 (enflame) | `vllm serve` starts |
| Sunrise | S2 x8 | 0.20.2+flagos empty | 0.2.2-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6 (sunrise) | Text inference verified; vision embedding numerical issue open |
| Kunlunxin | P800 OAM x8 | 0.20.2 empty | 0.2.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6 (kunlunxin) | Installation verified; model loading blocked by a backend incompatibility |

## Supported models

In theory, vllm-plugin-FL can support all models available in vLLM if no unsupported operators are involved. The following models have been end-to-end verified:

| Model | Status | Example |
|-------|--------|---------|
| Qwen3.5-397B-A17B | Supported | [qwen3_5_offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/qwen3_5_offline_inference.py) |
| Qwen3-Next-80B-A3B | Supported | [qwen3_next_offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/qwen3_next_offline_inference.py) |
| Qwen3-4B | Supported | [offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/offline_inference.py) |
| MiniCPM-o 4.5 | Supported | [examples/minicpm/](https://github.com/flagos-ai/vllm-plugin-FL/tree/main/examples/minicpm) |
| GLM-5 | Supported | [glm_5_offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/glm_5_offline_inference.py) |
| Qwen3.5-35B-A3B | Supported | [qwen3_5_offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/qwen3_5_offline_inference.py) |
| BAAI/bge-m3 | Supported | [bge_m3.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/vllm_fl/models/bge_m3.py) |
| MiniMax-M2.7 | Supported | [minimax_m27_offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/minimax_m27_offline_inference.py) |
| Qwen3.6-35B-A3B | Supported | [Text + image inference/serving (v0.2.0)](/getting_started/run-inference-task.md#run-a-serving-inference-task) |
| Qwen3.6-27B | Supported | [Text + image inference/serving (v0.2.0)](/getting_started/run-inference-task.md#run-a-serving-inference-task) |
| Qwen2.5-1.5B | Supported | [Iluvatar BI-V150 example](example-qwen2.5-bv150.md) |

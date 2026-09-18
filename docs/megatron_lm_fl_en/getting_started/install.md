# Install Megatron-LM-FL

You can install Megatron-LM-FL through one of the following methods:

## Docker (Recommended)

### FlagOS Release Image (v0.2.0-rc2)

```bash
docker pull harbor.baai.ac.cn/flagos21-release/megatron-lm-fl:v0.2.0-rc2-nvidia
```

Includes: torch 2.4.0a0, triton 3.0.0, trans-engine 2.14.0. Suitable for 100B+ parameter model pre-training.

### CUDA

```bash
docker pull harbor.baai.ac.cn/flagscale/flagscale-train:dev-cu128-py3.12-20260319182856
docker run -itd --gpus all --shm-size=500g --name <name> harbor.baai.ac.cn/flagscale/flagscale-train:dev-cu128-py3.12-20260319182856 /bin/bash
docker exec -it <name> /bin/bash
conda activate flagscale-train
pip install flash-attn==2.8.3 --no-build-isolation
```

## Install from source

```bash
git clone https://github.com/flagos-ai/Megatron-LM-FL.git
cd Megatron-LM-FL
git checkout <tag number>
pip install . --no-build-isolation --root-user-action=ignore
```

## Non-NVIDIA platforms

Megatron-LM-FL v0.3.0-rc2 has been validated on MetaX, Hygon, Ascend, and T-Head PPU. Use the vendor container image, then install from source at the matching tag:

| Platform | Device check | Container image | Visible-devices env | FlagTree backend |
|----------|--------------|-----------------|---------------------|------------------|
| MetaX | `mx-smi` | `harbor.baai.ac.cn/flagscale/megatron-lm-with-te:202603231839` | `MACA_VISIBLE_DEVICES` | `metax` |
| Hygon | `hy-smi` | `harbor.sourcefind.cn:5443/dcu/admin/base/custom:vllm0.20.0-ubuntu22.04-dtk26.04-py3.10-MiniCPM-V-4.6` | `HIP_VISIBLE_DEVICES` | `hcu` |
| Ascend | `npu-smi info` | `harbor.baai.ac.cn/flagos-dev/flagscale:manual-20260812-ascend-dev-inference` | `ASCEND_RT_VISIBLE_DEVICES` | `ascend` |
| T-Head PPU | `ppu-smi` | `harbor.baai.ac.cn/flagtree/flagtree-ppu-py312-torch2.10.0-sdk2.1.0-cu130-ubuntu24.04:202607-3.6-vllm0.24.0` | `CUDA_VISIBLE_DEVICES` | `ppu` |

```bash
cd /workspace/Megatron-LM-FL
git checkout 0.3.0-rc2
pip install . --no-build-isolation --root-user-action=ignore

pip list | grep megatron
megatron-core                            0.18.2+c8fa61f2e
```

```{note}
Hygon requires `source /opt/dtk/env.sh` before installing or running. Ascend requires `--privileged` plus the `davinci*`, `davinci_manager`, `devmm_svm`, and `hisi_hdc` device mounts.
```

For an end-to-end training workflow using Megatron-LM-FL, TransformerEngine-FL, and FlagScale, see [End-to-End Use Case](https://docs.flagos.io/projects/TransformerEngine-FL/en/latest/user_guide/e2e-use-case.html) and [Multi-Platform Training and Testing](../user_guide/multi-platform-training.md).

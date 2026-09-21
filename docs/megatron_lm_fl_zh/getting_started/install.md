# 安装 Megatron-LM-FL

您可以通过以下方法之一安装 Megatron-LM-FL：

## Docker（推荐）

### FlagOS 发版镜像（v0.2.0-rc2）

```bash
docker pull harbor.baai.ac.cn/flagos21-release/megatron-lm-fl:v0.2.0-rc2-nvidia
```

内含：torch 2.4.0a0, triton 3.0.0, trans-engine 2.14.0。适用于千亿参数模型预训练。

### CUDA

```bash
docker pull harbor.baai.ac.cn/flagscale/flagscale-train:dev-cu128-py3.12-20260319182856
docker run -itd --gpus all --shm-size=500g --name <name> harbor.baai.ac.cn/flagscale/flagscale-train:dev-cu128-py3.12-20260319182856 /bin/bash
docker exec -it <name> /bin/bash
conda activate flagscale-train
pip install flash-attn==2.8.3 --no-build-isolation
```

## 从源码安装

```bash
git clone https://github.com/flagos-ai/Megatron-LM-FL.git
cd Megatron-LM-FL
git checkout <tag number>
pip install . --no-build-isolation --root-user-action=ignore
```

## 非 NVIDIA 平台

Megatron-LM-FL v0.3.0-rc2 已在沐曦、海光、昇腾与平头哥 PPU 上完成验证。请使用厂商容器镜像，再按对应标签从源码安装：

| 平台 | 设备检查命令 | 容器镜像 | 可见设备环境变量 | FlagTree 后端 |
|------|--------------|----------|------------------|---------------|
| 沐曦 MetaX | `mx-smi` | `harbor.baai.ac.cn/flagscale/megatron-lm-with-te:202603231839` | `MACA_VISIBLE_DEVICES` | `metax` |
| 海光 Hygon | `hy-smi` | `harbor.sourcefind.cn:5443/dcu/admin/base/custom:vllm0.20.0-ubuntu22.04-dtk26.04-py3.10-MiniCPM-V-4.6` | `HIP_VISIBLE_DEVICES` | `hcu` |
| 昇腾 Ascend | `npu-smi info` | `harbor.baai.ac.cn/flagos-dev/flagscale:manual-20260812-ascend-dev-inference` | `ASCEND_RT_VISIBLE_DEVICES` | `ascend` |
| 平头哥 PPU | `ppu-smi` | `harbor.baai.ac.cn/flagtree/flagtree-ppu-py312-torch2.10.0-sdk2.1.0-cu130-ubuntu24.04:202607-3.6-vllm0.24.0` | `CUDA_VISIBLE_DEVICES` | `ppu` |

```bash
cd /workspace/Megatron-LM-FL
git checkout 0.3.0-rc2
pip install . --no-build-isolation --root-user-action=ignore

pip list | grep megatron
megatron-core                            0.18.2+c8fa61f2e
```

```{note}
海光平台在安装或运行前需要先 `source /opt/dtk/env.sh`。昇腾平台需要 `--privileged`，并挂载 `davinci*`、`davinci_manager`、`devmm_svm`、`hisi_hdc` 设备。
```

有关使用 Megatron-LM-FL、TransformerEngine-FL 和 FlagScale 的端到端训练工作流，请参见[端到端用例](https://docs.flagos.io/projects/TransformerEngine-FL/zh-cn/latest/user_guide/e2e-use-case.html)与[多平台训练与测试](../user_guide/multi-platform-training.md)。

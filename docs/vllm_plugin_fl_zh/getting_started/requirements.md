# 要求

## 软件要求

| 要求 | v0.1.0（vLLM 0.13.0） | v0.2.0（vLLM 0.20.0 或 vLLM 0.20.2） | v0.3.0-rc2（vLLM 0.24.0） | 备注 |
|-------------|----------------------|----------------------|----------------------|-------|
| Python | 3.10 - 3.13 | 3.10 - 3.13 | 3.10 - 3.13 | 必需 |
| PyTorch | >= 2.7.1 | >= 2.7.1 | >= 2.7.1 | 必需 |
| vLLM | 0.13.0 | 0.20.2 | 0.24.0 | NVIDIA 使用官方发布；非 NVIDIA 需以 `VLLM_TARGET_DEVICE=empty` 从源码安装 |
| FlagGems | >= v5.0.0 | >= v5.0.0 | >= v5.0.0 | 算子调度必需 |
| FlagCX | v0.9.0 | v0.9.0 | v0.9.0 | 可选，用于多芯片通信 |
| FlagTree | 0.4.0 | 0.4.0 | 0.7.0-rc0-triton3.6 | 从 `0.7.0-rc0` 发版分支配合对应厂商 backend 源码编译（见[从源代码安装](install.md)）。昇腾使用 `0.7.0-rc0-triton3.5`；清微智能使用 `0.7.0-rc0-triton3.3` |

## 支持的硬件平台

下表汇总了支持的硬件及其验证状态：

| 芯片厂商 | v0.1.0（vLLM 0.13.0） | v0.2.0（vLLM 0.20.0 或 vLLM 0.20.2） | v0.3.0-rc2（vLLM 0.24.0） | 备注 |
|-------------|----------------------|----------------------|----------------------|-------|
| NVIDIA | 支持 | 支持 | 支持 | |
| Ascend | 支持 | — | 支持 | 需要 FlagTree 和 eager 执行 |
| MetaX | 支持 | — | 支持 | MetaX C550 已适配 vLLM 0.24.0 |
| T-Head | 支持 | — | 支持 | |
| Iluvatar | 支持 | — | 支持 | BI-V150 已适配 vLLM 0.24.0；启用 CUDA graph |
| Moore Threads | 支持 | — | 支持 | MTT S5000 已适配 vLLM 0.24.0 |
| Tsingmicro | 合并中 | — | 支持 | [PR #52](https://github.com/flagos-ai/vllm-plugin-FL/pull/52) |
| Hygon DCU | 支持 | 支持 | 支持 | 需要 DTK 容器（参见安装指南） |
| Sunrise | 支持 | — | 支持 | |
| PPU | — | — | 支持 | empty-mode 支持（#190）；FlagTree PPU backend 源码编译仍在进行中（FlagTree #1131） |

## 已验证配置（FlagOS 2.2-RC0）

下表为 FlagOS 2.2-RC0 跨厂商验证中实际跑通的配置。"已验证"指所列组件安装、导入并通过了记录的各项检查；标注为其他状态的项仍未完成，并附对应的追踪 issue。plugin 版本列记录该次运行实际安装的构建（vLLM 0.24.0 各组为 `0.3.0-rc0`）；当前发布候选版为 `0.3.0-rc2`，这些配置的验证结论不变。

| 平台 | 加速卡 | vLLM | vllm-plugin-FL | FlagGems | FlagTree（backend） | 状态 |
|----------|-------------|------|----------------|----------|--------------------|--------|
| 沐曦 MetaX | MACA C550 ×8 | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6（metax） | 环境与 FlagTree 编译已验证；未复现 `KeyError: 'BLOCK_M'` |
| 海光 DCU | BW1000 ×8 | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 + flash attention 修复 | 0.7.0-rc0-triton3.6（hcu） | 环境已验证 |
| 海光 DCU | BW1000 ×8 | 0.20.0+das native | 0.3.0-rc0 | 5.4.0-rc0 + flash attention 修复 | 0.7.0-rc0-triton3.6（hcu） | native 模式环境已验证 |
| 天数智芯 Iluvatar | BI-V150 ×16 | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6（iluvatar） | `vllm serve` 可启动，CUDA graph 捕获与首次请求返回 200 OK；冷缓存 autotune 仍未打通 |
| 摩尔线程 | MTT S5000 ×8 | 0.24.0 empty | 0.3.0 | 5.4.0-rc0.post1 | 0.7.0-rc0-triton3.6（mthreads） | dev 栈可运行；rc0 标准栈（FlagGems 5.3.4 + Triton 3.2.0）卡在 FlagGems autotune |
| 阿里 PPU | PPU ×16 | 0.24.0 empty | 0.3.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6（ppu） | FlagTree PPU backend 源码编译受阻（FlagTree #1131）；`release/0.2` plugin 路径已验证 |
| 昇腾 Ascend | 910c ×16 | 0.20.2 empty | 0.2.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.5（ascend） | 环境已验证，需要 eager 执行 |
| 清微智能 | TX8110 ×32 | 0.20.2（镜像内置） | 0.2.0 | 4.2.1（镜像内置） | 0.7.0-rc0-triton3.3（tsingmicro） | 离线与在线 serve 均验证通过 |
| 燧原 Enflame | ZIXIAOC200 ×8 | 0.20.2 empty | 0.2.1 | 5.3.1（镜像内置） | 0.7.0-rc0-triton3.6（enflame） | `vllm serve` 可启动 |
| 曦望 Sunrise | S2 ×8 | 0.20.2+flagos empty | 0.2.2-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6（sunrise） | 文本推理已验证；vision embedding 数值问题未解决 |
| 昆仑芯 Kunlunxin | P800 OAM ×8 | 0.20.2 empty | 0.2.0-rc0 | 5.4.0-rc0 | 0.7.0-rc0-triton3.6（kunlunxin） | 安装已验证；模型加载受阻于 backend 架构不兼容 |

## 支持的模型

理论上，如果不涉及不支持的算子，vllm-plugin-FL 可以支持 vLLM 中所有可用的模型。以下模型已经过端到端验证：

| 模型 | 状态 | 示例 |
|-------|--------|---------|
| Qwen3.5-397B-A17B | 支持 | [qwen3_5_offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/qwen3_5_offline_inference.py) |
| Qwen3-Next-80B-A3B | 支持 | [qwen3_next_offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/qwen3_next_offline_inference.py) |
| Qwen3-4B | 支持 | [offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/offline_inference.py) |
| MiniCPM-o 4.5 | 支持 | [examples/minicpm/](https://github.com/flagos-ai/vllm-plugin-FL/tree/main/examples/minicpm) |
| GLM-5 | 支持 | [glm_5_offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/glm_5_offline_inference.py) |
| Qwen3.5-35B-A3B | 支持 | [qwen3_5_offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/qwen3_5_offline_inference.py) |
| BAAI/bge-m3 | 支持 | [bge_m3.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/vllm_fl/models/bge_m3.py) |
| MiniMax-M2.7 | 支持 | [minimax_m27_offline_inference.py](https://github.com/flagos-ai/vllm-plugin-FL/blob/main/examples/minimax_m27_offline_inference.py) |
| Qwen3.6-35B-A3B | 支持 | [文本 + 图像推理/服务（v0.2.0）](/getting_started/run-inference-task.md#run-a-serving-inference-task) |
| Qwen3.6-27B | 支持 | [文本 + 图像推理/服务（v0.2.0）](/getting_started/run-inference-task.md#run-a-serving-inference-task) |
| Qwen2.5-1.5B | 支持 | [Iluvatar BI-V150 示例](example-qwen2.5-bv150.md) |

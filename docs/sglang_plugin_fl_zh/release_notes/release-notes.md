# 发布说明

## v0.2.0-rc2（候选发布版）

```{note}
这是 FlagOS 2.2 的候选发布版（标签 `v0.2.0-rc2.post1`，发布于 2026-09）。版本号与支持平台列表将在 GA 时最终确定。
```

- **新增特性**

  - 新增 out-of-tree 厂商后端：MUSA (#6)、TXDA (#33)、昆仑芯 KLX (#41)、Iluvatar (#34)、海光 (#35，于 #78 由 hcu 更名)、燧原 GCU (#42)，以及平头哥 PPU CUDA 兼容厂商路由 (#27)，含 PPU 默认 attention 后端 (#63) 与平头哥 PPU-ZW810E CI (#64)。
  - 多平台 attention 后端支持 (#28)，并在昇腾与 MUSA 平台启用 CUDA graph (#31)。
  - FlagCX 全量通信替换以支持流水线并行 (#26)，在昇腾/MUSA 上启用 FlagCX 通信并提供平台感知的多机示例 (#32)；Qwen3.6 模型多机推理示例 (#16) 支持流水线并行 (#23)。
  - 面向 PD 分离（disaggregation）的 FlagCX KV 传输后端 (#59)。
  - Qwen3.6-27B 的 MTP（多 Token 预测）支持 (#58)。
  - Engine overrides (#62) 及面向国产平台部署的空设备（empty device）支持 (#43)。
  - SGLang server 端到端吞吐基准脚本 (#40)；MUSA (#54)、昇腾 NPU (#57) 与 CUDA (#45, #37) 端到端 CI。

- **改进 / 修复**

  - strict 模式 `call()` 增加 dispatch 缓存以消除 L2 开销 (#21)；对齐 `SGLANG_FL_STRICT` 语义 (#69)。
  - 兼容 FlagGems 5.3.0-rc2 的 DeviceDetector 路径变更 (#29, #30)。
  - DeviceInfo 服务类重构，引入厂商 early-patch 机制 (#73)；设备兼容性修复 (#66)。
  - NPU 侧基于 YAML 的 FlagGems 黑名单维护 (#55) 与 MUSA layer1 配置 (#56)；昇腾厂商补丁支持 PP 通信与 Qwen3-VL (#49)。
  - 修复 MUSA PP 多请求挂起 (#36)；绕过 torch_musa `isin` 并修复 VL 精度 (#79)；多机素数序列校验 (#80)。
  - 新增 Apache-2.0 许可证与版权头 (#46, #47)。

## v0.1.0


sglang-plugin-FL 初始版本。

- 新增功能

  - SGLang 的三层算子替换架构：
    - **第一层**：通过 FlagGems Triton 内核进行 ATen 算子替换
    - **第二层**：SGLang 融合内核调度（SiluAndMul、RMSNorm、RotaryEmbedding）
    - **第三层**：通过 CommunicatorFL（FlagCX / torch.distributed）进行分布式通信
  - 使用 SGLang entry_points 的非侵入式插件架构
  - 逐算子后端选择，支持自动回退
  - YAML 配置和环境变量控制
  - 桥接层将框架特定参数与标准化算子签名解耦
  - 厂商自动发现机制——同一后端可同时用于 sglang-plugin-FL 和 vllm-plugin-FL
  - 支持 NVIDIA CUDA、华为昇腾，并可扩展到其他硬件
  - 已验证模型：Qwen3.6-27B、Qwen3.6-35B-A3B、Qwen2.5-14B-Instruct
  - 调度日志和 ATen 替换日志用于调试
  - 用于数值调试的精度二分法工作流

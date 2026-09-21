# 发布说明

本节包含 vllm-plugin-FL 的发布信息。

## v0.3.0


vllm-plugin-FL v0.3.0 需要 [vllm v0.24.0](https://github.com/vllm-project/vllm/tree/v0.24.0) 或 [vllm v0.20.2](https://github.com/vllm-project/vllm/tree/v0.20.2)。


- **新增功能**

  - 支持 vLLM 0.24.0，包括官方 vLLM 0.24 CUDA stable-ABI wheel；FlagCX connector 的兼容范围扩展至 vLLM 0.20–0.24。
  - 面向 vLLM 0.24.0 新增或重新适配的厂商后端：沐曦 MetaX C550、摩尔线程 MUSA（MTT S5000）、天数智芯 Iluvatar BI-V150、T-Head attention 后端、PPU empty mode、曦望 Sunrise attention 后端、TXDA 以及海光工作流。
  - 量化推理：W8A8 推理适配 vLLM 0.24；Arm CPU 支持 Qwen packed W4A8 与 GDN。
  - vLLM 0.24 上的 Qwen3.5 纯文本运行时兼容。
  - out-of-tree 后端支持：新增 `weak_ref_tensor` C++ 扩展及 CMake 构建系统；vLLM 0.24.0+ 上支持 `BreakableCUDAGraphWrapper`，并在天数智芯 Iluvatar 上启用 CUDA graph。
  - 调度：支持追加 FlagGems 黑名单条目、MTP xGrammar mask 批处理、自定义吞吐测试用例。
  - 工具链：新增版本文档页；CI 从 release/0.2 迁移至 main，并支持 `/rerun-failed-ci`、`/cancel-ci` PR 评论命令。

- **功能增强**

  - 昇腾：重写 fused-MoE 实现并整合厂商融合模块。
  - 调度：新增可选的 Hopper 长上下文路由；`fused_experts` 改走 FlagGems；更新 NVIDIA FlagGems 黑名单与支持厂商列表；改进 `CachedOp` 快速路径诊断与回退行为。
  - CUDA graph：对非 DeepEP 后端禁用 CUDA graph；KV cache 容量计算计入 CUDA graph 显存；修复 vLLM 0.24.0 下的 MTP。
  - Worker：为独立引擎保留数据并行 GPU 偏移；在 out-of-tree 运行时缺失 `torchvision` 时对 `kernel_warmup` 做保护；MetaX `all_reduce` 现传入 `group=device_group`。

## v0.2.0


vllm-plugin-FL v0.2.0 需要 [vllm v0.20.2](https://github.com/vllm-project/vllm/tree/v0.20.2)。支持的平台：NVIDIA、Hygon DCU。

- **新增功能**

  - Qwen3.6-35B-A3B 模型支持，包含文本和图像推理/服务
  - Qwen3.6-27B 模型支持，包含文本和图像推理/服务
  - Hygon DCU 平台支持，通过 DTK 容器部署
  - 基于服务的测试工作流（vllm serve + OpenAI 客户端），用于多模态模型

- **功能增强**

  - 扩展 NVIDIA 平台测试矩阵，覆盖 Qwen3.6 模型
  - 更新 vLLM 兼容性至 v0.20.x

## v0.1.0

vllm-plugin-FL v0.1.0 需要 [vllm v0.13.0](https://github.com/vllm-project/vllm/tree/v0.13.0)。支持的平台：NVIDIA、Ascend、T-Head、MetaX、Iluvatar。

- **新增功能**

  - vllm-plugin-FL 初始发布，作为 vLLM 推理/服务框架插件
  - 通过 FlagGems 和 FlagCX 集成实现统一多芯片后端支持
  - 灵活的算子调度系统，支持 FlagGems、厂商特定和 PyTorch 参考后端
  - 端到端验证支持 Qwen3.5-397B-A17B、Qwen3-Next-80B-A3B、Qwen3-4B、MiniCPM-o 4.5、GLM-5、Qwen3.5-35B-A3B 和 BAAI/bge-m3 模型
  - 硬件支持 NVIDIA、Ascend、T-Head、MetaX 和 Iluvatar 芯片
  - 平台特定配置文件（ascend.yaml、cuda.yaml），用于自动检测默认值
  - 基于环境变量的配置，用于后端选择、厂商过滤和算子控制
  - YAML 配置文件支持，用于完整调度策略覆盖
  - 多进程安全的算子注册表，支持线程安全缓存操作

- **功能增强**

  - 优化调度流程，对已解析算子进行缓存
  - 从首选后端到可用替代后端的失败回退机制
  - 每个算子的后端选择顺序配置
  - FlagGems 和 OOT 算子的白名单和黑名单支持
  - 调试日志模式，用于调度系统故障排除

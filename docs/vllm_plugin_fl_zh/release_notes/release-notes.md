# 发布说明

本节包含 vllm-plugin-FL 的发布信息。

## v0.3.0-rc0

```{note}
这是 FlagOS 2.2 的发布候选版本（2026-08-24 发布，tag `v0.3.0-rc0`）。版本号与支持平台列表将在 GA 时定稿。
```

vllm-plugin-FL v0.3.0-rc0 需要 [vllm v0.24.0](https://github.com/vllm-project/vllm/tree/v0.24.0)。

- **新增功能**

  - vLLM 兼容性从 v0.20.2 升级至 v0.24.0，支持官方 vLLM 0.24 CUDA stable-ABI wheel。
  - 新增/重新适配面向 vLLM 0.24.0 的厂商后端：
    - MetaX C550 后端适配（#294，基于 #241 的 0.20.2 适配）。
    - 摩尔线程 MUSA（MTT S5000）后端适配（#308，基于 #176 的 0.20.2 更新）。
    - 天数智芯 Iluvatar BI-V150 后端适配（#310）。
    - T-Head 厂商 attention 后端（#360）。
    - PPU empty-mode 支持（#190）。
  - 新增 `weak_ref_tensor` C++ 扩展，提供 CMake 构建系统（#231）。
  - 为 vLLM 0.24.0+ 的 out-of-tree 厂商后端新增 `BreakableCUDAGraphWrapper` 支持（#342），并在 Iluvatar 上启用 CUDA graph（#232）。
  - 升级 FlagCX connector 以支持 vLLM 0.20–0.24（#295）。

- **功能增强**

  - 昇腾融合模块重构：重写 fused-MoE 实现并整合厂商融合模块（#240，cherry-pick #136）。
  - 调度增强：新增可选的 Hopper 长上下文路由（#384）；`fused_experts` 改走 FlagGems（#230）；修复 `GroupedTopKRouterFL` 的 `valid_grouping` 闭包问题（#237）；更新 NVIDIA FlagGems 黑名单与支持厂商列表（#222、#228）；移除 MUSA 厂商后端中对 FlagGems 的直接调用（#376）；改进 `CachedOp` 快速路径诊断与回退行为（#206）。
  - CUDA graph 健壮性：对非 DeepEP 后端禁用 CUDA graph（#346）；KV cache 容量计算计入 CUDA graph 显存（#381）；修复 vLLM 0.24.0 下的 MTP（#334、#337）。
  - Worker 修复：为独立引擎保留数据并行 GPU 偏移（#380）；在 out-of-tree 运行时缺失 `torchvision` 时对 `kernel_warmup` 做保护（#386）；MetaX `all_reduce` 现传入 `group=device_group`（#348）。

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

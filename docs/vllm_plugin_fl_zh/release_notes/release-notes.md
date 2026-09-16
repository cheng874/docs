# 发布说明

本节包含 vllm-plugin-FL 的发布信息。

## v0.3.0-rc2（发布候选版）

```{note}
这是 FlagOS 2.2 的发布候选版本（2026-09 发布，tag `v0.3.0-rc2.post1`；取代 2026-08-24 的 `v0.3.0-rc0`）。版本号与支持平台列表将在 GA 时定稿。
```

vllm-plugin-FL v0.3.0-rc2 需要 [vllm v0.24.0](https://github.com/vllm-project/vllm/tree/v0.24.0)。

自 rc0 以来的新增内容（来自 `v0.3.0-rc0...v0.3.0-rc2.post1` 对比）：

- **新增功能**

  - vLLM 0.24 上的 Qwen3.5 纯文本运行时兼容 (#383)。
  - W8A8 量化推理适配 vLLM 0.24 (#336)；Arm CPU 集成 Qwen packed W4A8 与 GDN (#433)。
  - FlagCX connector：Prometheus KV 传输指标，并移植 release/0.2 的 #315 (#418)。
  - Sunrise attention 后端移植至 vLLM 0.24.0（CUSTOM 注册 + ptpu `memory_stats` shim）(#391)；基于空设备 vLLM 0.24.0 的 TXDA 支持 (#447)；启用 vLLM 0.24.0 的海光工作流 (#436)。
  - Dispatch：支持追加 FlagGems 黑名单条目 (#439)；自定义吞吐测试用例 (#426)；MTP xGrammar mask 批处理 (#414)。
  - 新增版本文档页 (#403)；CI 从 release/0.2 迁移至 main (#415)，并支持 `/rerun-failed-ci`、`/cancel-ci` PR 评论命令 (#480)。

- **修复**

  - GDN：packed decode beta 保持 fp32 (#385)。
  - Iluvatar：Triton patch 收敛至模块级并移除死代码 (#406)。
  - Dispatch 保留可用的参考回退注册 (#440)；out-of-tree 后端继承原生 MXFP8 候选 (#441)。
  - 恢复 #382 的 FlagGems KV cache 更新 (#474) 与 #279 的 T-Head 静态图支持 (#472)。

以下 rc0 内容仍属于本发布候选版：

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

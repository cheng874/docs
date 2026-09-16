# FlagScale v2.1.0-rc2 发布说明

```{note}
这是 FlagOS 2.2 的候选发布版（标签 `v2.1.0-rc2.post1`，发布于 2026-09）。版本号与支持平台列表将在 GA 时最终确定。
```

## 亮点

- **新模型支持**：新增 GLM5 训练支持 (#1227)、Qwen36 LLM 主干及 checkpoint 转换 (#1273)、KERV 训练与推理集成 (#1278, #1291)，以及 qwen_gr00t 中的 Orca 模型新特性 (#1228)；DeepSeek-V4 TFLOPs 统计 (#1230)。
- **昇腾原生集成**：MegatronAdaptor FlagScale 模块在 FlagOS 上的原生集成 (#1226)，并新增清微 TXDA 后端平台 (#1254)。
- **可观测性**：性能监控集成 (#1216)、straggler 检测 (#1215)、低开销 GPU 进度心跳监控 (#1243)，以及 profiler kernel 报告 (#1281)。
- **训练引擎升级**：升级至 Megatron v0.18.2 (#1284)，采用新的 Override 机制 (#1214)。
- **多芯片 CI 扩展**：新增 MTT S5000 镜像构建与端到端验证 CI (#1260)、昇腾与 MetaX 构建测试流水线 (#1250)、海光 BW1000 (#1272)、昆仑芯 P800 训练 (#1282)，以及燧原镜像构建与测试 (#1275)。
- **修复**：DualPipeV 修复 (#1207)、GR00T checkpoint 可移植性 (#1219)、pi0.5 预训练加载内存峰值 (#1221)、Qwen3.5 checkpoint 转换 (#1231, #1233)、Engram transformer 集成 (#1279)，以及 chat template 返回类型兼容性 (#1262)。

# FlagScale v2.0.0 发布说明

## 亮点

- **DeepSeek V4 与 Qwen3.5 支持**：DeepSeek V4 训练支持及 Engram 优化 (#1195, #1147)，新增 Qwen35 模型 (#1196)。
- **Megatron-LM Core 0.17.0 升级**：FlagScale Train 同步上游 Megatron-LM Core 0.17.0 (#1193)，新增 `--mg-fl-prefer` 参数用于 Megatron-LM-FL 厂商选择 (#1183)。
- **FSDP2 Checkpoint 恢复**：训练支持 FSDP2 checkpoint resume (#1149)。
- **机器人方向**：`flagscale eval robo` CLI (#1181)；qwen_gr00t 训练与推理现已支持昇腾与 MUSA 平台 (#1178)。
- **CI/CD 迁移至 FlagCICD**：FlagScale CI 迁移至 FlagCICD 基础设施 (#1187, #1190)，新增昇腾 NPU 与 MetaX 多芯片测试支持 (#1160)，CUDA Docker 镜像自动构建并推送至 Harbor (#1143)，并将多芯片流水线合并为一条 (#1209)。
- **修复**：将 `platform` 重命名为 `platforms` 以避免循环导入 (#1165)，修复 DeepSeek-V3 checkpoint 导出兼容性 (#1202)，修复 tp > ep * etp 时 MoE checkpoint 保存问题 (#1204)，修复训练 writer 与 Engram allreduce 模式 (#1200)。

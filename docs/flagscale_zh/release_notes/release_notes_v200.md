# FlagScale v2.0.0 发布说明

## 亮点

- **DeepSeek V4 与 Qwen3.5 支持**：DeepSeek V4 训练支持及 Engram 优化 (#1195, #1147)，新增 Qwen35 模型 (#1196)。
- **Megatron-LM Core 0.17.0 升级**：FlagScale Train 同步上游 Megatron-LM Core 0.17.0 (#1193)，新增 `--mg-fl-prefer` 参数用于 Megatron-LM-FL 厂商选择 (#1183)。
- **FSDP2 Checkpoint 恢复**：训练支持 FSDP2 checkpoint resume (#1149)。
- **机器人方向**：`flagscale eval robo` CLI (#1181)；qwen_gr00t 训练与推理现已支持昇腾与 MUSA 平台 (#1178)。
- **CI/CD 迁移至 FlagCICD**：FlagScale CI 迁移至 FlagCICD 基础设施 (#1187, #1190)，新增昇腾 NPU 与 MetaX 多芯片测试支持 (#1160)，CUDA Docker 镜像自动构建并推送至 Harbor (#1143)，并将多芯片流水线合并为一条 (#1209)。
- **修复**：将 `platform` 重命名为 `platforms` 以避免循环导入 (#1165)，修复 DeepSeek-V3 checkpoint 导出兼容性 (#1202)，修复 tp > ep * etp 时 MoE checkpoint 保存问题 (#1204)，修复训练 writer 与 Engram allreduce 模式 (#1200)。

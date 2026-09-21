# FlagScale v2.0.0 Release Notes

## Highlights

- **DeepSeek V4 & Qwen3.5 Support**: DeepSeek V4 training support with Engram optimization (#1195, #1147), and the new Qwen35 model (#1196).
- **Megatron-LM Core 0.17.0 Upgrade**: FlagScale Train synchronized with upstream Megatron-LM Core 0.17.0 (#1193), with a new `--mg-fl-prefer` argument for Megatron-LM-FL vendor selection (#1183).
- **FSDP2 Checkpoint Resume**: Training support for FSDP2 checkpoint resume (#1149).
- **Robotics**: `flagscale eval robo` CLI (#1181); qwen_gr00t now supports the Ascend and MUSA platforms for both training and inference (#1178).
- **CI/CD on FlagCICD**: Migrated FlagScale CI to the FlagCICD infrastructure (#1187, #1190), added Ascend NPU and MetaX multi-chip test support (#1160), automated CUDA Docker image builds to Harbor (#1143), and merged the multi-chip pipelines into one (#1209).
- **Fixes**: Renamed `platform` to `platforms` to avoid circular imports (#1165), fixed DeepSeek-V3 checkpoint export compatibility (#1202), fixed MoE checkpoint saving when tp > ep * etp (#1204), and fixed the training writer and Engram allreduce mode (#1200).

# FlagScale v2.1.0-rc2 Release Notes

```{note}
This is the FlagOS 2.2 release candidate (tag `v2.1.0-rc2.post1`, published 2026-09; supersedes `v2.1.0-rc1.post1` and `v2.1.0-rc0.post1`). Version numbers and supported-platform lists will be finalized at GA.
```

## Highlights

- **New Model Support**: Added training support for GLM5 (#1227), Qwen36 LLM backbone with checkpoint conversion (#1273), KERV training and inference integration (#1278, #1291), and new Orca model features in qwen_gr00t (#1228); DeepSeek-V4 TFLOPs reporting (#1230).
- **Ascend Native Integration**: Native integration of the MegatronAdaptor FlagScale module on FlagOS (#1226), plus a Tsingmicro TXDA backend platform (#1254).
- **Observability**: Perf monitor integration (#1216), straggler detection (#1215), low-overhead GPU progress heartbeat monitoring (#1243), and profiler kernel reports (#1281).
- **Training Engine Upgrade**: Upgraded to Megatron v0.18.2 (#1284) with the new Override mechanism (#1214).
- **Multi-Chip CI Expansion**: Added CI for MTT S5000 image builds and end-to-end validation (#1260), Ascend and MetaX build-and-test pipelines (#1250), Hygon BW1000 (#1272), Kunlunxin P800 training (#1282), and Enflame image build and test (#1275).
- **Fixes**: DualPipeV fix (#1207), GR00T checkpoint portability (#1219), pi0.5 pretrained-loading memory peak (#1221), Qwen3.5 checkpoint conversion (#1231, #1233), Engram transformer integration (#1279), and chat template return-type compatibility (#1262).

## Multi-platform validation

FlagScale v2.1.0-rc2 was validated end-to-end on four non-NVIDIA platforms together with Megatron-LM-FL v0.3.0-rc2 and TransformerEngine-FL v0.3.0-rc2:

| Platform | FlagTree backend | Visible-devices env | Verified |
|----------|------------------|---------------------|----------|
| MetaX | `metax` | `MACA_VISIBLE_DEVICES` | Qwen3 training, 8 cards |
| Hygon | `hcu` | `HIP_VISIBLE_DEVICES` | Qwen3 training, single node |
| Ascend | `ascend` | `ASCEND_RT_VISIBLE_DEVICES` | Qwen3 training, single card and multi-card |
| T-Head PPU | `ppu` | `CUDA_VISIBLE_DEVICES` | Qwen3 training, 8 cards, FlagOS operator stack enabled |

For the step-by-step procedure, see [Multi-Platform Training and Testing](../user_guide/multi-platform-training.md).

# FlagScale v2.0.0 Release Notes

## v2.0.0 Highlights

- **DeepSeek V4 & Qwen3.5 Support**: DeepSeek V4 training support with Engram optimization (#1195, #1147), and the new Qwen35 model (#1196).
- **Megatron-LM Core 0.17.0 Upgrade**: FlagScale Train synchronized with upstream Megatron-LM Core 0.17.0 (#1193), with a new `--mg-fl-prefer` argument for Megatron-LM-FL vendor selection (#1183).
- **FSDP2 Checkpoint Resume**: Training support for FSDP2 checkpoint resume (#1149).
- **Robotics**: `flagscale eval robo` CLI (#1181); qwen_gr00t now supports the Ascend and MUSA platforms for both training and inference (#1178).
- **CI/CD on FlagCICD**: Migrated FlagScale CI to the FlagCICD infrastructure (#1187, #1190), added Ascend NPU and MetaX multi-chip test support (#1160), automated CUDA Docker image builds to Harbor (#1143), and merged the multi-chip pipelines into one (#1209).
- **Fixes**: Renamed `platform` to `platforms` to avoid circular imports (#1165), fixed DeepSeek-V3 checkpoint export compatibility (#1202), fixed MoE checkpoint saving when tp > ep * etp (#1204), and fixed the training writer and Engram allreduce mode (#1200).

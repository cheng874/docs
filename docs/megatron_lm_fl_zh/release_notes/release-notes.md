# 发布说明

本节包含 Megatron-LM-FL 的发布信息。

## v0.3.0（候选发布版）

```{note}
这是 FlagOS 2.2 的候选发布版（标签 `v0.3.0-rc2.post1`，发布于 2026-09；取代 `v0.3.0-rc0` 与 `v0.3.0-rc1`）。版本号与支持平台列表将在 GA 时最终确定。
```

Megatron-LM-FL v0.3.0 已同步上游 Megatron-LM v0.18.2，要求 Python >= 3.12。

- **新增特性**

  - 升级至 Megatron-LM v0.18.2 (#109)。
  - 新增平台后端：ENFLAME (#45)、昆仑芯 KunlunXin (#63) 与 MUSA (#92)，沿用既有的平台插件模式。
  - 支持 `GLM5` / `GLM5.1` / `GLM5.2` 系列的 DSA 结构 (#69)，并新增 sm90 的融合 DSA kernel (#86)。
  - 支持分块 cross-entropy 以降低显存占用 (#126)。
  - Engram 序列并行支持 (#56) 与 Triton mHC 融合 kernel (#71)。
  - MegatronAdaptor 模块在 FlagOS 上的昇腾原生集成 (#68)。
  - TXDA 平台升级至 v0.17.0 (#87)。
  - MoE 1F1B overlap 与 MHC 的兼容支持，在关闭 MHC 时保持向后兼容 (#54)。

- **改进特性**

  - Override 机制升级 (#59)。
  - 将 XME blocking 补丁与其余 XME 核心补丁迁移为 Megatron-LM-FL override (#70, #74)。
  - CI 新增 TransformerEngine-FL 增量构建与运行时集成 (#128)，并为 TE-FL 准备/检出步骤增加重试机制 (#140)。

- **修复**

  - 修复 `moe_act_func` 与 MHC recompute 数据类型导致相对上游 Megatron-LM 的精度偏差 (#73)。
  - Engram：移除 Engram 子模块上错误的 `sequence_parallel` 标志 (#75)。
  - DualPipeV 与 DeepSeek-V4 修复 (#48, #64)。
  - 修复 `get_device_type` 报错 (#60) 与共享存储路径处理 (#66)。
  - 修复插件层的平台名与设备名上报 (#151, #154)、原生加速器探测优先级 (#148)、非 CUDA 加速器运行时 (#156)、异构场景下专家数据并行的进程组 world size (#149)，以及重复的 P2P communicator stage 属性 (#150)。
  - `megatron_fsdp` cherry-pick 修复 (#79)、checkpoint 能耗监控保护 (#78)，以及移除自动生成的训练覆盖率测试 (#82)。

- **CI/CD**

  - 扩展多平台单元与功能测试覆盖：MetaX (#51, #58, #65)、昇腾 (#89)、MUSA (#92)、昆仑芯 P800 (#100)、海光 BW1000 (#93)、燧原 (#113)，并更新平台测试镜像 (#129) 与 CUDA runner label (#137)。

## v2.6

- **新增特性**

  - 部分（按层选择）Transformer checkpoint — 仅对可配置数量的 Transformer 层做 checkpoint，而非整个模型。
  - 在 `copy_model_grads_to_main_grads` 拷贝完成后有条件地释放 `grad`/`main_grad` 内存，并新增清空未使用内存的开关。
  - 本地 DDP 默认启用连续梯度缓冲，并修复 Torch DDP、移除 checkpoint 激活的连续缓冲。
  - pipeline schedule 在仅前向传播时不再保存输入/输出张量；为本地 DDP 与 `params_have_main_grad` 增加断言检查。
  - `destroy_model_parallel` 现在销毁更多进程组；torch.distributed 初始化方式由 TCP 切换为 `env`。

- **修复**

  - 修复 fused kernel 在短序列上的 SIMD 问题及上三角 softmax kernel；另有若干 fused softmax 修复。
  - 修复 checkpoint iteration 加载的跨 rank 同步、计时类型与验证迭代问题。
  - 分布式示例与 `mappings.py` 中的若干参数命名与拼写修复。

## v2.5

```{note}
v2.5 标签与上游 Megatron-LM 共享基础历史；v2.0 → v2.5 的对比中包含大量上游历史同步提交。以下条目仅总结该区间内已核实的 FlagOS 侧变更。
```

- **新增特性**

  - v2.x 线的上游 Megatron-LM 同步，使 fork 跟进上游核心改进（训练 schedule、fused kernel、分布式 checkpoint 与 API server 支持）。
  - 在早期版本引入的插件分派体系之上持续维护多平台后端（CUDA、MetaX、MUSA、TXDA、NPU）。

## v0.2.0


- **新增特性**

  - DeepSeek V4 模型支持 — 完整的 DeepSeek V4 架构训练支持，包括 CSA/HCA 注意力变体、用于 MoE token 路由的 Hash Router、多头超连接（mHC）、Engram 辅助记忆模块和多 Token 预测（MTP）增强。新增融合内核：`fused_mhc_kernels`、扩展的 `fused_mla_yarn_rope_apply`。

  - TXDA 平台后端 — 通过 `platform_txda.py` 新增 Tsingmicro 芯片支持，包括针对 TXDA 硬件的优化器和流水线调度适配。

  - NPU 平台后端 — 通过 `platform_npu.py` 新增 Ascend NPU 支持，遵循现有的 CUDA/MUSA 平台模式。

  - 多供应商插件调度 — 扩展了 `@override` 装饰器系统，通过 `MG_FL_PREFER` 环境变量进行运行时供应商选择。四级回退：首选供应商 → 默认供应商 → 唯一供应商 → 无。

  - Core 0.17.0 升级 — 同步上游 Megatron-LM Core 0.17.0，保留 FlagScale 特定补丁，包括 Engram DDP 缓冲区分离、异构流水线支持、`qk_layernorm_hidden_dim` 支持和 `cur_platform` 抽象。

  - CI/CD 增强 — 多平台单元和功能测试（CUDA + MetaX），Qwen3 基准测试门禁使用 A100 黄金值，pylint >= 9.0 lint 门禁，以及向 FlagCICD 平台上报覆盖率。


## v0.1.0

Megatron-LM-FL 初始版本。

- **新增特性**

  - 插件系统 — `@overridable` / `@override` 装饰器机制，用于平台特定的方法替换，无需修改上游代码。
  - 多平台支持 — 通过 `PlatformBase` 进行硬件抽象，支持 NVIDIA（CUDA）、MetaX、Moore Threads（MUSA）、TXDA（Tsingmicro）和 NPU（Ascend）的实现。
  - 完整上游兼容性 — 保留所有上游 Megatron-LM 功能，包括高级并行策略（TP、PP、DP、EP、CP）、混合精度（FP16、BF16、FP8）和 GPU 优化内核。

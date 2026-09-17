# 发布说明

本节包含 Megatron-LM-FL 的发布信息。

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

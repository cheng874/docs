# 发布说明

本节包含 TransformerEngine-FL 的发布信息。

## v0.3.0（候选发布版）

```{note}
这是 FlagOS 2.2 的候选发布版（标签 `v0.3.0-rc2.post1`，发布于 2026-09；取代 `v0.3.0-rc0` 与 `v0.3.0-rc1`）。版本号与支持平台列表将在 GA 时最终确定。
```

TransformerEngine-FL v0.3.0 已同步上游 NVIDIA TransformerEngine v2.17。

- **新增特性**

  - 同步上游 TransformerEngine v2.17 (#105)。
  - FlagOS Triton 融合 RoPE kernel (#83)。
  - FlagOS 层归一化算子 (#72)。
  - `multi_tensor_compute_scale_inv_e8m0` (#74)。
  - `generic_gemm` 支持 bias (#70)。
  - 清微 TXDA 厂商后端 (#88)。
  - 昇腾：集成 `transformer_engine_npu`，并修复 reference 后端的 GEMM 算子问题 (#89)。
  - 昆仑芯 TE-FL 后端补丁 (#84)。
  - 海光：在 `transformer_engine_hygon` 2.13 中通过 `multi_tensor_scale` 实现 `multi_tensor_scale_tensor` (#85)。

- **改进特性**

  - 补全 FlagOS Adam 接口 (#108) 与 Reference Adam 接口 (#109)。
  - 对齐 reference 的 `compute-scale` 语义 (#110) 与厂商通信重叠工厂参数 (#115)。
  - 暴露 TP 通信重叠所需的后端算子 (#95)。
  - 改进海光库路径解析并增加回退 (#82)。

- **修复**

  - 正确响应 flash attention 关闭开关 (#118)。
  - 修复插件 `te_general_grouped` 测试缺陷 (#81)。

- **CI/CD**

  - 扩展 CUDA 单元测试覆盖 (#73)；新增昇腾 NPU 单元测试 (#91)、海光 BW1000 reference 基线并标准化插件测试 (#92)、MUSA 工作流 (#93)、昆仑芯单元与 MCore 集成测试 (#94)，以及燧原 s60 reference 基线 (#98)。
  - NVIDIA runner label 更新为 `flagcicd-a100` (#111)。

## v0.2.0


- **新增特性**

  - TE V2.14 上游同步 — 集成 NVIDIA TransformerEngine 上游 v2.14（304 个提交，v2.9.0 → v2.14.0），纳入 MXFP8/NVFP4 量化、Blackwell（sm120）架构支持、FSDP2 与 DTensor 感知优化器状态、融合 RMSNorm dLN 与 add-through，以及 MoE 分组 MLP 算子。FlagOS 插件系统完全保留，同步了 OP API 签名和多后端兼容补丁。
  - KunlunXin 供应商后端 — 新增百度昆仑芯片供应商算子支持，包含 flash attention 和算子注册。
  - ENFLAME 供应商后端 — 新增 ENFLAME 芯片供应商算子支持，包含 flash attention 和算子注册。
  - FlagOS 分组 GEMM 算子 — 基于 FlagGems Triton 内核为 flagos 后端实现了 `te_general_grouped_gemm`，支持前向和后向计算。
  - CI/CD 增强 — 新增 MetaX MACA CI 工作流，向 FlagCICD 平台上报覆盖率，以及工作流重构和集成测试。

## v0.1.0

TransformerEngine-FL 初始版本。

- **新增特性**

  - 多后端插件架构 — 基于插件的算子调度系统（`OpRegistry`、`OpManager`、`SelectionPolicy`），包含三层后端：FlagOS（默认/Triton）、Vendor（硬件特定）和 Reference（纯 PyTorch）。
  - 供应商后端 — 新增五个硬件供应商后端：Hygon（DCU）、METAX（GPU 含 flash attention）、KunlunXin（百度昆仑含 flash attention）、Iluvatar（Corex GPU）和 MUSA（Moore Threads S 系列 GPU）。
  - FlagOS 后端 — 基于 FlagGems 的统一算子调度，集成 FlagCX 通信库。
  - 注意力系统 — 多供应商注意力后端框架，集成 flash attention。
  - CI/CD 流水线 — GitHub Actions 工作流，多供应商测试矩阵。

# FlagBLAS 发布说明

## v0.3.0-rc2（候选发布版）

```{note}
这是 FlagOS 2.2 的候选发布版（标签 `v0.3.0-rc2.post1`，发布于 2026-09）。版本号与支持平台列表将在 GA 时最终确定。FEP-0019 Wave 1 的打包工作仍在 FlagBLAS#1 中推进（Debian `.deb` / RPM `.rpm`；wheel 发布至 PyPI，二进制包发布至 FlagOS Nexus 仓库）。
```

- **新增特性**

  - 新增 Level-1 算子：`rotg`、`rotm`、`rotmg`；修复 `amin`。
  - 新增 Level-2 算子：`hpmv`、`trsv`、`cher2`、`zher2`、`chpr`、`zhpr`、`sspr2`、`dspr2`、`chpr2`、`zhpr2`、`sspr`、`dspr`、`ssyr2`、`dsyr2`、`ger`、`tpsv`、`tbsv`、`syr`、`her`，以及 `trmm` 算子。
  - 新增 GEMM 算子：`dgemm`、`cgemm`、`zgemm` (#14) 及 NVIDIA 后端 Group GEMM (#18)。
  - 静态分派（static dispatch）基础设施及文档 (#9)，已应用于 `hgemm`。
  - 新硬件后端：昇腾（Level-2 BLAS 支持、910C CI、`saxpy` 示例算子）与海光 DCU（`GEMV`、`SYMV`、`HEMV`、`TRMV`、`TBMV`、`TPMV`、`GBMV`、`HBMV`、`SPMV`、`HPMV`，集成 hipBLAS 基准）。
  - Level-2 算子基准测试大规模扩充（旋转、三角、带状、对称/厄米、packed、rank-1/rank-2 更新、`ger`、`trmm`、`fp8_gemv`、`sbmv`）并登记 core shapes (#40–#66)。
  - 每周全量测试工作流 (#19) 及昇腾/海光 CI 流水线。

- **改进 / 修复**

  - 全部 L2/L3 算子晋升为 stable 阶段 (#65)。
  - `sgemm_nt`/`sgemm_tt`、TRSV、GER、sgemm/hgemm/bfgemm 优化 (#17)。
  - 修复大 n 值 strided 输入下 `amin` kernel 的 int32 索引溢出。
  - 在 `operators.yaml` 中登记缺失算子并移除孤立的 `fp8gemm` 条目 (#62)。
  - 海光 CI 加固：DTK 环境加载、torch 诊断步骤、uv 管理的 Python (#67)。
  - 全部源码文件添加 Apache-2.0 版权头 (#12, #13)。

## v0.2.0


- **新增功能**
  - **算子注册表** —— 新增 `conf/operators.yaml`，包含完整的算子元数据。
  - **CI/CD 流水线** —— GitHub Actions 工作流，包含正确性测试、性能基准测试和 pre-commit 钩子。
  - **libtuner 自动调优** —— 集成 libtuner 实现内核配置的自动调优。

- **增强功能**

  - hgemm 通过 block-pointer 和 TMA 内核变体进行优化。
  - amax 小 N 路径优化，提升性能。
  - asum 算子经过深度性能调优。
  - sgemm 和 hgemm 自动调优从硬编码配置迁移至 libtuner。
  - GEMV fp64 标量打包和小 N 路径优化。

## v0.1.0

FlagBLAS 初始版本。

- **新增功能**

  - BLAS 标准接口库，支持多后端。
  - 核心向量和矩阵操作（BLAS Level 1、2、3）。
  - 灵活的多后端支持机制。

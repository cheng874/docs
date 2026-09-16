# FlagBLAS 发布说明

## 未发布（FlagOS 2.2 开发中）

- **打包（FEP-0019，Wave 1）** —— Debian `.deb` 与 RPM `.rpm` 打包正在 FlagBLAS#1 中评审（CI 已通过）。Python wheel 将发布至 PyPI，二进制包发布至 FlagOS Nexus 仓库。

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

# FlagSparse 发布说明

## v0.3.0-rc2（候选发布版）

```{note}
这是 FlagOS 2.2 的候选发布版（标签 `v0.3.0-rc2.post1`，发布于 2026-09）。版本号与支持平台列表将在 GA 时最终确定。打包工作（FEP-0019 Wave 1）已合入：Debian `.deb` 与 RPM `.rpm` 打包（FlagSparse#12），含 openEuler 24.03 RPM 构建支持（FlagSparse#29）；二进制包发布至 FlagOS Nexus 仓库。
```

- **新增特性**

  - 新增/扩充稀疏算子：SpMM CSR 扩展、col-major 与 COO 优化变体、SpMM CSC/BSR；SpMV CSC、BSR 及 BSR 优化（含 scipy 基线）；SpSV SELL。
  - 合入 NCIC-AlphaSparse 线的最新稀疏算子实现，测试对齐官方 runner，并发布更新的稀疏支持矩阵 (#25, #26, #30, #38)。
  - 海光 DCU 支持与 CUDA 一并合入（含 DCU 运行命令与健壮性修复）(#44, #45)。
  - 专用 runner 上的 GPU CI（Triton 3.6 / FlagTree 依赖）及 GPU benchmark 工作流 (#23, #24)。

- **改进 / 修复**

  - SpMV CSR 与 SpGEMM 优化；SDDMM 优化 v0.1 (#39, #40)。
  - 修复 SpSM 与 SpSV 测试；统一计时与索引修复 (#28)。
  - 打包后续修复：smoke-test 解耦、ubuntu:24.04 基础镜像对齐、RPM spec 修复 (#8, #9, #11)。
  - 算子注册表解析器兼容版权头 (#33)。
  - 全部源码文件添加 Apache-2.0 版权头 (#33)。

## v0.2.0


- **新增功能**

  - **SpMM 算子** —— SpMM COO、SpMM CSR-opt、SpMM CSR-opt-alg2、AlphaSparse SpMM alg1（含 TLE 和 TLE-opt 变体）。
    - 在 NVIDIA 上支持。
  - **SpGEMM 算子** —— CSR 输入的稀疏矩阵-稀疏矩阵乘法。
    - 在 NVIDIA 上支持。
  - **SDDMM 算子** —— 基于 CSR 稀疏模式的采样稠密-稠密矩阵乘法。
    - 在 NVIDIA 上支持。
  - **SpSM 算子** —— 带稠密矩阵右侧的稀疏三角求解（CSR 和 COO）。
    - 在 NVIDIA 上支持。
  - **SpSV 描述符 API** —— 完整的描述符、缓冲区大小、分析、预处理和求解 API，用于 SpSV 工作流。
    - 在 NVIDIA 上支持。
  - **稀疏格式构造函数** —— create_csr_matrix、create_coo_matrix、create_csc_matrix、create_bsr_matrix、create_sell_matrix、create_blocked_ell_matrix、coo_to_csr、coo_to_csc、coo_to_bsr、coo_to_sell、coo_to_blocked_ell、generate_random_sparse_matrix、read_mtx_file。
    - 在 NVIDIA 上支持。
  - **算子注册表** —— 添加了 `conf/operators.yaml`，包含完整的算子元数据。
    - 在 NVIDIA 上支持。
  - **CI/CD 流水线** —— GPU CI 工作流、每夜 CPU 检查、发布草稿器、pre-commit 配置。
    - 在 NVIDIA 上支持。

- **增强功能**

  - SpMV CSR 和 COO 算子经过显著优化和精度改进。
  - SpSV CSR 和 COO 求解器扩展了全面的测试覆盖和基于描述符的 API。
  - Gather/Scatter 算子增强了 int64 支持。
  - 基准测试框架统一，具有标准化的形状配置。
  - pytest 精度套件扩展，为所有算子添加了专用测试文件。

## v0.1.0

FlagSparse 首次发布。

- **新增功能**

  - GPU 稀疏运算包，包含 SpMV、SpMM、SpGEMM、SDDMM、gather 和 scatter 算子。
  - CSR 和 COO 稀疏格式支持。
  - SpSV 和 SpSM 三角求解算子。
  - FlagGems 风格的算子接口注册表（`conf/operators.yaml`）。
  - 基于 CPU-FP64 金标准参考比较的 pytest 精度套件。
  - 具有两级加速比报告的性能基准测试框架。

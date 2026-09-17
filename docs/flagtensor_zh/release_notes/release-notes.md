# FlagTensor 发布说明

## v0.3.0-rc2（候选发布版）

```{note}
这是 FlagOS 2.2 的候选发布版（标签 `v0.3.0-rc2.post1`，发布于 2026-09）。版本号与支持平台列表将在 GA 时最终确定。FEP-0019 Wave 1 的打包工作仍在 FlagTensor#4 中推进（后端无关的 Python 包及原生 NVIDIA runtime/development/CPython 包，依赖 `libtriton-jit-nvidia >= 0.1.0-3`，将发布至 PyPI 与 FlagOS Nexus 仓库）。
```

- **新增特性**

  - 新硬件后端：平头哥 PPU (#10)、Iluvatar CoreX（含 BI-V150 contraction GEMM 调优与已发布的性能报告：36 算子、2158 组测量）(#11, #13, #16)、华为昇腾 (#12)、沐曦 MetaX C550（含 PyTorch 原生基线支持）(#15, #17)，以及海光 DCU + 昆仑芯 XPU。
  - 覆盖全部 36 个算子的 C++ 封装（TritonJIT 支持）(#7, #8)。
  - 新增 contraction 与 trinary 算子及融合 trinary 原型；额外 6 个 binary 算子注册进 `_FULL_CONFIG`；`add()` 新增 `alpha` 参数以兼容 `aten::add.Tensor`。
  - FlagOS 插件及面向非生产后端的厂商门控算子选择。
  - 算子命名全面对齐 cuTensor 官方命名体系。
  - 统一的多后端 `setup.sh`（`--backend metax`、nvidia/ppu/iluvatar）与生产级 GPU 无关 Dockerfile。

- **改进 / 修复**

  - 面向验收的重构：FlagGems 风格文档、符合规范的 CI 路径；CI 收敛为 4 条核心工作流并使用组织级 runner 标签。
  - 修复 block-sparse contraction 与 CuTensor workspace；benchmark dtype 对齐；双 key 性能数据解析修复 (#5)。
  - Triton 3.6 兼容（flagtree 0.6.1+iluvatar3.6）及 Iluvatar tune configs。
  - 恢复 Iluvatar 上的厂商原生基线解析 (#16)；benchmark 通过/失败判定与 matplotlib 解耦。
  - 全部源码文件添加 Apache-2.0 版权头 (#6)。

## v0.2.0


- **新增功能**

  - **一元算子** —— abs、acos、acosh、asin、asinh、atan、atanh、ceil、conj、cos、cosh、exp、floor、identity、log、mish、neg、rcp、relu、sigmoid、sin、sinh、soft_plus、soft_sign、sqrt、swish、tan、tanh（28 个算子）。
  - **二元算子** —— add、max、min、mul。
  - **收缩算子** —— contraction、contraction_trinary、elementwise_trinary。
  - **稀疏算子** —— block_sparse_contraction。
  - **算子注册表** —— 添加了 `conf/operators.yaml`，包含完整的算子元数据。
  - **多 GPU 测试运行器** —— `tools/run_tests.py`，带实时进度显示和 YAML 驱动的算子选择。
  - **CI/CD 流水线** —— 质量门（lint/format）、正确性和性能流水线。

- **增强功能**

  - 手工优化的 Triton 内核，支持按架构自动调优（Ampere、Hopper）。
  - 与供应商无关的后端抽象，已注册 15 家供应商。
  - 架构特定的内核特化（`_nvidia/hopper/`、`_nvidia/ampere/`）。
  - 每个算子的测试基础设施，支持 pytest 标记和 JSON 结果记录。

## v0.1.0

FlagTensor 首次发布。

- **新增功能**

  - 支持多后端的张量原语库。
  - 一元操作（ReLU 等）。
  - 用于逐元素张量算术的二元操作。
  - 用于多维归约的收缩操作。
  - 基于 cuTensor 基线的正确性和性能比较。

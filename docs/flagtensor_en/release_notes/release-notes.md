# FlagTensor Release Notes

## v0.3.0-rc2 (release candidate)

```{note}
This is the FlagOS 2.2 release candidate (tag `v0.3.0-rc2.post1`, published 2026-09). Version numbers and supported-platform lists will be finalized at GA. The packaging work tracked under FEP-0019 Wave 1 continues in FlagTensor#4 (backend-neutral Python packages plus native NVIDIA runtime/development/CPython packages depending on `libtriton-jit-nvidia >= 0.1.0-3`, to be published to PyPI and the FlagOS Nexus repository).
```

- **Added Features**

  - New hardware backends: T-Head PPU (#10), Iluvatar CoreX with BI-V150 contraction GEMM tuning and a published performance report (36 ops, 2158 measurements) (#11, #13, #16), Huawei Ascend (#12), MetaX C550 (muxi) with PyTorch-native baseline support (#15, #17), and Hygon DCU + Kunlunxin XPU.
  - C++ wrapper with TritonJIT support for all 36 operators (#7, #8).
  - New contraction and trinary operators with a fused trinary prototype; six additional binary ops registered into `_FULL_CONFIG`; `alpha` parameter added to `add()` for `aten::add.Tensor` compatibility.
  - FlagOS plugin and vendor-gated operator selection for non-production backends.
  - Operator naming fully aligned with the official cuTensor naming scheme.
  - Unified multi-backend `setup.sh` (`--backend metax`, nvidia/ppu/iluvatar) and a production, GPU-agnostic Dockerfile.

- **Improved / Fixed**

  - Acceptance-ready restructuring with FlagGems-style documentation and spec-compliant CI paths; CI consolidated to 4 core workflows with org-level runner labels.
  - block-sparse contraction and CuTensor workspace fixes; benchmark dtype alignment; dual-key performance-data parsing fix (#5).
  - Triton 3.6 compatibility (flagtree 0.6.1+iluvatar3.6) with Iluvatar tune configs.
  - Vendor-native baseline resolution restored on Iluvatar (#16); benchmark pass/fail decoupled from matplotlib.
  - Apache-2.0 copyright headers added across all source files (#6).

## v0.2.0


- **Added Features**

  - **Unary Operators** — abs, acos, acosh, asin, asinh, atan, atanh, ceil, conj, cos, cosh, exp, floor, identity, log, mish, neg, rcp, relu, sigmoid, sin, sinh, soft_plus, soft_sign, sqrt, swish, tan, tanh (28 operators).
  - **Binary Operators** — add, max, min, mul.
  - **Contraction Operators** — contraction, contraction_trinary, elementwise_trinary.
  - **Sparse Operators** — block_sparse_contraction.
  - **Operator Registry** — Added `conf/operators.yaml` with full operator metadata.
  - **Multi-GPU Test Runner** — `tools/run_tests.py` with live progress display and YAML-driven operator selection.
  - **CI/CD Pipeline** — Quality gates (lint/format), correctness and performance pipelines.

- **Enhanced Features**

  - Hand-optimized Triton kernels with per-architecture autotune (Ampere, Hopper).
  - Vendor-agnostic backend abstraction with 15 registered vendors.
  - Architecture-specific kernel specialization (`_nvidia/hopper/`, `_nvidia/ampere/`).
  - Per-operator test infrastructure with pytest marks and JSON result recording.

## v0.1.0

Initial release of FlagTensor.

- **Added Features**

  - Tensor-primitive library with multi-backend support.
  - Unary operations (ReLU and others).
  - Binary operations for element-wise tensor arithmetic.
  - Contraction operations for multi-dimensional reductions.
  - Correctness and performance comparison against cuTensor baselines.
# FlagBLAS Release Notes

## v0.3.0-rc2 (release candidate)

```{note}
This is the FlagOS 2.2 release candidate (tag `v0.3.0-rc2.post1`, published 2026-09). Version numbers and supported-platform lists will be finalized at GA. The packaging work tracked under FEP-0019 Wave 1 continues in FlagBLAS#1 (Debian `.deb` / RPM `.rpm`; wheels to PyPI and binary packages to the FlagOS Nexus repository).
```

- **Added Features**

  - New Level-1 operators: `rotg`, `rotm`, `rotmg`; `amin` fixes.
  - New Level-2 operators: `hpmv`, `trsv`, `cher2`, `zher2`, `chpr`, `zhpr`, `sspr2`, `dspr2`, `chpr2`, `zhpr2`, `sspr`, `dspr`, `ssyr2`, `dsyr2`, `ger`, `tpsv`, `tbsv`, `syr`, `her`, plus the `trmm` operator.
  - New GEMM operators: `dgemm`, `cgemm`, `zgemm` (#14) and Group GEMM for the NVIDIA backend (#18).
  - Static dispatch infrastructure with documentation (#9), applied to `hgemm`.
  - New hardware backends: Ascend (Level-2 BLAS support, 910C CI, `saxpy` demo op) and Hygon DCU (`GEMV`, `SYMV`, `HEMV`, `TRMV`, `TBMV`, `TPMV`, `GBMV`, `HBMV`, `SPMV`, `HPMV`, hipBLAS benchmark integration).
  - Comprehensive benchmark suite expansion for Level-2 operators (rotations, triangular, banded, symmetric/Hermitian, packed, rank-1/rank-2 updates, `ger`, `trmm`, `fp8_gemv`, `sbmv`) with core-shape registrations (#40–#66).
  - Weekly full-test workflow (#19) and Ascend/Hygon CI pipelines.

- **Improved / Fixed**

  - All L2/L3 operators promoted to stable stage (#65).
  - `sgemm_nt`/`sgemm_tt`, TRSV, GER, sgemm/hgemm/bfgemm optimizations (#17).
  - Fixed int32 index overflow in large-n `amin` kernels for strided inputs.
  - Registered missing ops in `operators.yaml` and removed the orphan `fp8gemm` entry (#62).
  - Hygon CI hardening: DTK environment loading, torch diagnose steps, uv-managed Python (#67).
  - Apache-2.0 copyright headers added across all source files (#12, #13).

## v0.2.0


- **Added Features**
  - **Operator Registry** — Added `conf/operators.yaml` with full operator metadata.
  - **CI/CD Pipeline** — GitHub Actions workflow with correctness tests, performance benchmarks, and pre-commit hooks.
  - **libtuner Autotuning** — Integrated libtuner for automatic kernel configuration tuning.

- **Enhanced Features**

  - hgemm optimized with block-pointer and TMA kernel variants.
  - amax small-N path optimized for improved performance.
  - asum operator underwent deep performance tuning.
  - sgemm and hgemm autotuning migrated from hardcoded configs to libtuner.
  - GEMV fp64 scalar packing and small-N paths optimized.

## v0.1.0

Initial release of FlagBLAS.

- **Added Features**

  - BLAS-standard interface library with multi-backend support.
  - Core vector and matrix operations (Level 1, 2, 3 BLAS).
  - Flexible multi-backend support mechanism.


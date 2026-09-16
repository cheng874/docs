# FlagSparse Release Notes

## v0.3.0-rc2 (release candidate)

```{note}
This is the FlagOS 2.2 release candidate (tag `v0.3.0-rc2.post1`, published 2026-09). Version numbers and supported-platform lists will be finalized at GA. Packaging (FEP-0019 Wave 1) has landed: Debian `.deb` and RPM `.rpm` packaging (FlagSparse#12) including openEuler 24.03 RPM build support (FlagSparse#29); binary packages are published to the FlagOS Nexus repository.
```

- **Added Features**

  - New/expanded sparse operators: SpMM CSR expansion, col-major and COO-optimized variants, SpMM CSC/BSR; SpMV CSC, BSR and BSR-optimized (with a scipy baseline); SpSV SELL.
  - Latest sparse operator implementations merged from the NCIC-AlphaSparse line, with tests aligned to the official runners and an updated sparse support matrix (#25, #26, #30, #38).
  - Hygon DCU support merged alongside CUDA (with DCU run commands and robustness fixes) (#44, #45).
  - GPU CI on dedicated runners with Triton 3.6 / FlagTree requirements, plus a GPU benchmark workflow (#23, #24).

- **Improved / Fixed**

  - SpMV CSR and SpGEMM optimizations; SDDMM optimization v0.1 (#39, #40).
  - Fixed SpSM and SpSV tests; unified timing and index fixes (#28).
  - Packaging follow-ups: smoke-test decoupling, ubuntu:24.04 base alignment, RPM spec fixes (#8, #9, #11).
  - Operator registry parser made resilient to copyright headers (#33).
  - Apache-2.0 copyright headers added across all source files (#33).

## v0.2.0


- **Added Features**

  - **SpMM Operators** — SpMM COO, SpMM CSR-opt, SpMM CSR-opt-alg2, AlphaSparse SpMM alg1 (with TLE and TLE-opt variants).
    - Supported on NVIDIA.
  - **SpGEMM Operator** — Sparse matrix-sparse matrix multiplication for CSR inputs.
    - Supported on NVIDIA.
  - **SDDMM Operator** — Sampled dense-dense matrix multiplication on CSR sparsity pattern.
    - Supported on NVIDIA.
  - **SpSM Operator** — Sparse triangular solve with dense matrix right-hand sides (CSR and COO).
    - Supported on NVIDIA.
  - **SpSV Descriptor API** — Full descriptor, buffer-size, analysis, preprocess, and solve API for SpSV workflows.
    - Supported on NVIDIA.
  - **Sparse Format Constructors** — create_csr_matrix, create_coo_matrix, create_csc_matrix, create_bsr_matrix, create_sell_matrix, create_blocked_ell_matrix, coo_to_csr, coo_to_csc, coo_to_bsr, coo_to_sell, coo_to_blocked_ell, generate_random_sparse_matrix, read_mtx_file.
    - Supported on NVIDIA.
  - **Operator Registry** — Added `conf/operators.yaml` with full operator metadata.
    - Supported on NVIDIA.
  - **CI/CD Pipeline** — GPU CI workflow, nightly CPU checks, release drafter, pre-commit config.
    - Supported on NVIDIA.

- **Enhanced Features**

  - SpMV CSR and COO operators underwent significant optimization and accuracy improvements.
  - SpSV CSR and COO solvers expanded with comprehensive test coverage and descriptor-based API.
  - Gather/Scatter operators enhanced with int64 support.
  - Benchmark framework unified with standardized shape configurations.
  - pytest accuracy suite expanded with dedicated test files for all operators.

## v0.1.0

Initial release of FlagSparse.

- **Added Features**

  - GPU sparse operations package with SpMV, SpMM, SpGEMM, SDDMM, gather, and scatter operators.
  - CSR and COO sparse format support.
  - SpSV and SpSM triangular solve operators.
  - FlagGems-style operator interface registry (`conf/operators.yaml`).
  - pytest accuracy suite with CPU-FP64 golden reference comparison.
  - Performance benchmark framework with two-level speedup reporting.

# FlagDNN Release Notes

## v0.3.0-rc2 (release candidate)

```{note}
This is the FlagOS 2.2 release candidate (tag `v0.3.0-rc2.post1`, published 2026-09). Version numbers and supported-platform lists will be finalized at GA. The packaging work tracked under FEP-0019 Wave 1 continues in FlagDNN#1 (native NVIDIA runtime/development packages consuming `libtriton-jit-nvidia >= 0.1.0-3`, to be published to the FlagOS Nexus repository).
```

- **Added Features**

  - New hardware backends: Ascend (with dedicated tests and performance tuning), Hygon DCU (with CPU reference ops), Moore Threads (MUSA), Iluvatar (WIP adaptation synced 2026-08-24), and an updated T-Head backend — each with a backend README (#5, #8, #9, #10).
  - New operators: `conv_dgrad`, `conv_wgrad`, and an `sdpa_fp8_backward` draft.
  - CI/CD workflow for FlagDNN (#2), including `run_op.sh`-based per-operator runs.

- **Improved / Fixed**

  - Architecture refactoring of the testing framework (adapted to both NVIDIA and Ascend) with fixes for batch test collection.
  - Long causal SDPA performance work: host descriptors, bounded ids in the backward pass, and owner-compute causal d128 backward.
  - Performance fixes for `add_square`, `matmul`, `conv2d`, binary-related ops, `batchnorm`, and NVIDIA/Ascend tuning rounds (#6, #7, #8).
  - Apache-2.0 copyright headers added across all source files (#3, #4).

## v0.2.0


- **Added Features**

  - **Graph Execution Engine** — New graph-mode execution path with IR capture, kernel fusion, auto-tuning, and multi-node planning. Supports graph-level operator dispatch and memory optimization.
  - **Neural Network Operators** — conv1d, conv2d, conv3d, conv_fprop, conv_dgrad, conv_wgrad, causal_conv1d, max_pool2d, max_pool3d, avg_pool1d, avg_pool2d, avg_pool3d, adaptive_avg_pool2d, adaptive_avg_pool3d, adaptive_max_pool2d, adaptive_max_pool3d, gelu_approx_tanh, silu, swish, leaky_relu, leaky_relu_, prelu, elu, elu_, rrelu, rrelu_, mish, softplus, softsign, softshrink, softmin, log_softmax, hardswish, relu6, selu, glu, celu, tanh, sigmoid, sigmoid_backward, logsigmoid, hardtanh, hardtanh_, threshold, threshold_.
  - **Normalization Operators** — batchnorm, batchnorm_inference, layernorm, rmsnorm, group_norm.
  - **Linear Algebra Operators** — mm, mv, dot, matmul.
  - **Math Operators** — exp, log, rsqrt, square, positive, isinf, isnan, max, min, scale, ge, gt, le, lt, maximum, minimum, fmax, fmin, bitwise_and, bitwise_or, bitwise_xor, bitwise_not, logical_and, logical_or, logical_not, unary.
  - **Reduction Operators** — cummin, cummax, any, all, reduction.
  - **Loss Operators** — kl_div, mse_loss, l1_loss.
  - **Tensor Operators** — embedding, one_hot, concatenate, gen_index, identity, reshape, slice, transpose, binary_select.
  - **Fused Operators** — add_square, rmsnorm_rht_amax.
  - **Other Operators** — interpolate.
  - **Attention Operators** — sdpa, sdpa_backward (graph mode).
  - **Iluvatar Backend** — Added Iluvatar GPU backend support with heuristics config and op blacklist.
  - **Operator Registry** — Added `conf/operators.yaml` for standardized operator metadata.
  - **Graph Benchmark Suite** — Comprehensive benchmark framework for graph-mode operators.

- **Enhanced Features**

  - Eager-mode operators underwent deep performance tuning and framework restructuring.
  - Triton kernel launch patterns optimized to reduce overhead.
  - Benchmark framework unified with standardized shape configurations.

## v0.1.0

Initial release of FlagDNN.

- **Added Features**

  - Deep neural network computing library with multi-backend support.
  - ReLU operator with Triton kernel implementation.
  - Flexible multi-backend support mechanism.
  - PyTorch integration via `flag_dnn.ops` API.


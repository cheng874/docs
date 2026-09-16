# 变更历史

## v5.4.0-rc2（候选发布版）

```{note}
这是 FlagOS 2.2 的候选发布版（标签 `v5.4.0-rc2.post2`，发布于 2026-09）。版本号与支持平台列表将在 GA 时最终确定。
```

- 新增算子：
  `hash_tensor` (#6088)、
  `split_with_sizes` (#5590)、
  `convolution_overrideable` (#5642)、
  `adaptive_max_pool3d` (#5671)、
  `topk_w8a16_fp8`（E4M3FN，海光）(#6190)
- 新增厂商专用 kernel：摩尔线程 `conv_transpose1d`、`upsample_linear1d_backward`、`fmod_`、`matmuladd` (#6174, #6175, #6170, #6180)；昇腾 `matrix_rank`、`igammac`、`gru` 及 `linalg_solve_triangular` 改进 (#6161, #6136, #6201, #6209)
- 新增纯 Triton `lgamma` 回退实现，以及带 vLLM 基线的独立 FP8 MM 性能测试 (#5464, #6183)
- 昆仑芯 `copy` 算子族迁移至 TLE (#6093)
- 提升 autotune 缓存健壮性（SQLite WAL 模式与 busy timeout，修复 "database is locked" 错误）(#6203)
- 修复 `pointwise_dynamic` 的 graph capture 缓冲复用 (#6171)、Sunrise `cumsum` 空输入保护并添加 `asin` 回退 (#6165)、FFT `res_out` (#4802)、`flash_attention_backward` 的 Triton 3.5 兼容性 (#6253)，并 gate `tl.map_elementwise` 使 flag_gems 可在 flagtree/3.5 分支上导入 (#6236)
- 文档：说明 `fused_marlin_moe` 的权重布局并非 vLLM Marlin 布局 (#6204)

## v5.3.0

**发布日期**：2026-09

基于 `v5.0.0` 与 `v5.3.0` 之间的 863 个提交（包含至 v5.3.6 的 v5.3.x 补丁版本）整理。要点：

- 新增算子：
  `ctc_loss` (#2723)、
  `svd` (#2904)、
  `scatter_reduce` (#2914)、
  `chunk_gated_delta_rule` (#2921)、
  `median` (#2796)、
  `index_copy_` (#1743)、
  `router_gemm`（含 split-K `mm` 支持）(#3220)、
  `topk_softplus_sqrt` 融合 MoE 门控 (#3046, #3428)、
  `affine_grid_generator` (#3373)、
  `_euclidean_dist` (#3371)、
  `conv_transpose2d`（语义化 Triton）(#3405)、
  面向 DeepSeek V4 的 `top_k_per_row_prefill` / `top_k_per_row_decode` (#3279, #3431)、
  `fused_deepseek_v4_qnorm_rope_kv_rope_quant_insert` (#3327)、
  `fused_inv_rope_fp8_quant` (#3332)、
  `pack_seq_triton` / `unpack_seq_triton` (#3433, #3437)、
  DeepSeek V4 attention 算子 `fused_q_kv_rmsnorm`、`compute_global_topk_indices_and_lens`、`dequantize_and_gather_k_cache`、`combine_topk_swa_indices` 及 indexer k-quant/cache kernel (#3478–#3481, #3438, #3439)、
  `rad2deg` (#3445)、`randint` (#3446)、`reflection_pad1d_backward` (#3448)、
  `cauchy` (#3496)、`as_strided_copy` (#3501)、`log1p` (#1747)、`floor` (#1736)
- 新增 fused Marlin MoE（INT4 MoE GEMM，后续以 transposed-B 布局优化并支持 W8A16）(#3222, #3375, #3609)
- 新增 M×N 融合 Hadamard 变换 kernel（H3/H5/H7）(#3096)
- 新厂商后端及重要厂商适配：ARM64 CPU 后端（NEON/SVE2，含 INT8 量化）(#3775)；Spacemit 后端（Triton 3.6.0+spacemit.a5）(#3355, #3793, #3828)；燧原后端算子迁移、C++ 封装与 int64 支持 (#3335, #2938, #3471)；摩尔线程 SQMMA 适配 Triton 3.6 及 mm autotune (#3351, #3493)；Sunrise CI 支持 (#3544)
- DeepSeek V4 算子对照 vLLM API 的性能基准与 vLLM 精度测试 (#3494, #3500)
- NVIDIA 后端升级至 Triton 3.6 与更新版 PyTorch (#3383, #3391, #3601)；CUDA 12.8/13.0 Containerfile (#3528, #3600)
- 新增简洁可扩展的 FlagTune API（用于部分 matmul 算子）(#3462)
- 优化 fused MoE kernel 选择与 safe_softmax 动态 block/warp 缩放 (#3340, #2936)
- 修复 flash-attn varlen 在 key cache 非连续时的错误 (#3410)、fp8 copy (#3509)、Iluvatar `trunc_divide` 整数分派 (#3608)、昇腾空张量 `fill_` (#4105)、MUSA device.type 分派问题 (#3495, #3498, #3499)
- 大规模算子测试覆盖专项行动，以及基于共享队列批量测试的 `run_tests` 脚本重构 (#3073–#3343, #3633–#3647)

## v5.0

**发布日期**：待定

- 新增数学算子：
  `absolute`（生成）、
  `acos`、
  `arcsinh`（生成）、
  `arcsinh_`（生成）、
  `arcsinh.out`（生成）、
  `arctanh_`（生成）、
  `asinh_`（生成）、
  `ceil`、
  `ceil_`、
  `ceil.out`、
  `diagmma_`（生成）、
  `equal`、
  `floor_`（生成）、
  `fmin`（生成）、
  `fmin.out`（生成）、
  `hardswish_`（生成）、
  `hypot`（生成）、
  `i0`（生成）、
  `i0_`（生成）、
  `i0.out`（生成）、
  `log1p_`（生成）、
  `logaddexp`（生成）、
  `logaddexp.out`（生成）、
  `logical_and_`、
  `logical_or_`、
  `logit`（生成）、
  `logit_`（生成）、
  `logit.out`（生成）、
  `sgn_`（生成）、
  `sinh_`（生成）、
  `special_i1`（生成）、
  `special_i1.out`（生成）
- 新增 BLAS 算子：
  `bmm.out`、
  `cutlass_scaled_mm_sm_90`、
  `tril`（生成）
- 新增 MoE 算子：
  `dispatch_fused_moe_kernel`、
  `grouped_topk`、
  `inplace_fused_experts`、
  `outplace_fused_experts`
- 新增分布算子：
  `normal_`
- 新增神经网络算子：
  `_upsample_nearest_exact1d`、
  `apply_repetition_penalties`（生成）、
  `chunk_gated_delta_rule_fwd`、
  `dswiglu`、
  `embedding_dense_backward`、
  `fused_recurrent_gated_delta_rule_fwd`、
  `hardsigmoid`（生成）、
  `hardsigmoid.out`（生成）、
  `nll_loss_nd_backward`、
  `nll_loss_nd_forward`、
  `one_hot`、
  `pixel_unshuffle`（生成）、
  `pixel_unshuffle.out`（生成）、
  `prelu`（生成）、
  `reflection_pad1d`（生成）、
  `reflection_pad1d.out`（生成）、
  `reflection_pad2d`（生成）、
  `reflection_pad2d.out`（生成）、
  `relu6`（生成）、
  `swiglu`、
  `triu_`、
  `unfold_backward`、
  `upsample_bicubic2d`、
  `upsample_linear1d`、
  `upsample_nearest1d`、
  `upsample_nearest3d`
- 新增张量算子：
  `_functional_sym_constrain_range_for_size`（生成）、
  `alias_copy`（生成）、
  `alias_copy.out`（生成）、
  `fill.Scalar_out`、
  `fill.Tensor_out`、
  `lift_fresh_copy`（生成）、
  `replication_pad1d`（生成）、
  `replication_pad1d.out`（生成）、
  `replication_pad3d`、
  `rrelu_with_noise_backward`（生成）、
  `selu`（生成）、
  `selu_`（生成）、
  `slice_backward`（生成）、
  `softshrink`（生成）、
  `softshrink.out`（生成）、
  `t_copy`（生成）、
  `t_copy.out`（生成）、
  `unfold_backward`、
  `zero`（生成）、
  `zero_`、
  `zero.out`（生成）
- 移除规约算子 `moe_sum`。
- 新增规约算子：
  `bincount`
- 新增 DSA 算子：
  `spare_mla_fwd`

## v4.3

**发布日期**：待定

- 新增数学算子：
  `acos`,
  `ceil`,
  `ceil_`,
  `ceil_out`,
  `equal`,
  `logical_and_`,
  `logical_or_`
- 新增 BLAS 算子：
  `bmm.out`
- 新增 Distribution 算子：
  `normal_`
- 新增神经网络算子：
  `one_hot`,
  `triu_`,
  `upsample_linear1d`,
  `upsample_nearest1d`,
- 新增张量算子：
  `unfold_backward`,
  `zero_`
- 移除 Reduction 算子：
  `moe_sum`

## v4.2

**发布日期**：2026-01-04

- 此版本包含 216 个算子，参见[支持的算子列表](../reference/operators)
- 新增神经网络算子：
  `avg_pool2d`,
  `avg_pool2d_backward`,
  `dgeglu` (*alpha*),
  `dreglu` (*alpha*),
  `geglu` (*alpha*),
  `reglu` (*alpha*),
- 新增 BLAS 算子：
  `baddbmm`,
- 新增卷积算子：
  `conv1d`,
  `conv2d`,
  `conv3d`
- 新增张量算子：
  `copy_`,
  `masked_scatter`,
  `masked_scatter_`,
  `per_token_group_quant_fp8` (*alpha*),
  `scatter_add_`,
  `to_copy`
- 新增 Reduction 算子：
  `moe_sum`,
  `scaled_softmax_backward`,
  `scaled_softmax_forward`
- 新增数学算子：
  `exp_out`,
  `tan`,
  `tan_`,
  `true_divide_out`
- 将张量算子 `continuous` 提升为 Beta 状态
- 将 Reduction 算子 `index` 提升为稳定状态
- 之前的 `upsample` 算子被分为
  `upsample_nearest2d` 和 `upsample_bicubic2d_aa` 两个算子

## v4.1

**发布日期**：2025-11-01

- 新增两个融合形式的 RWKV 算子：
  `rwkv_ka_fusion`、
  `rwkv_mm_sparsity`，
  被 [BlinkDL/Albatross:faster_251101](https://github.com/BlinkDL/Albatross/tree/main/faster_251101)
  RWKV 项目采纳

## v4.0

**发布日期**：2025-10-31

- 总计支持 202 个算子
- 新增线性代数算子：
  `addcdiv`,
  `addcmul`,
  `addmv`,
  `addmv_out`,
  `addr`
- 新增 BLAS 算子：
  `addmm_out`
- 新增数学算子：
  `atan`,
  `atan_`,
  `bitwise_left_shift`,
  `bitwise_right_shift`,
  `clamp_min`,
  `clamp_min_`,
  `exp2`,
  `exp2_`,
  `sqrt_`
- 新增神经网络算子：
  `celu`,
  `celu_`,
  `elu_`,
  `elu_backward`,
  `get_scheduler_metadata`,
  `glu_backward`,
  `moe_align_block_size`,
  `softplus`
- 新增 Reduction 算子：
  `index` (*beta*),
  `std`,
  `trace`
- 新增张量算子：
  `index_add_`,
  `logspace`,
  `max_pool2d_backward`,
  `max_pool2d_with_indices`,
  `topk_softmax`
- Triton JIT C++ 运行时现在包含以下预编译内核：
  `add`,
  `addmm`,
  `argmax`,
  `bmm`,
  `bmm_out`,
  `cat`,
  `contiguous`,
  `embedding`,
  `exponential_`,
  `fill`,
  `flash_attn_varlen_func`,
  `fused_add_rms_norm`,
  `max`,
  `mm`,
  `nonzero`,
  `reshape_and_cache_flash`,
  `rms_norm`,
  `rms_norm_backward`,
  `rotary_embedding`,
  `softmax`,
  `sum`,
  `topk`,
  `zeros`

## v3.0

**发布日期**：2025-07-14

- 总计支持 184 个算子，包含在大模型推理中常用的定制算子
- 新增硬件平台支持：昇腾（Ascend）、AIPU 等
- 新增对 vLLM 框架的兼容，通过对 DeepSeek 模型的推理验证
- 新增 BLAS 算子：
  `dot`,
  `mm_out`
- 新增张量算子：
  `index_put_`,
  `scatter_`,
  `sort_stable`
- 新增线性代数算子：
  `lerp`,
  `sum_dim_out`,
  `sum_out`
- Added math operators:
  `angle`,
  `nan_to_num`,
  `polar`,
  `tanh_backward`
- 新增 Reduction 算子：
  `cummax`,
  `cumsum_out`,
  `eye`,
  `index` (*alpha*),
  `layer_norm_backward`,
  `softmax_backward`
- 新增神经网络算子：
  `batch_norm`,
  `batch_norm_backward`,
  `dropout_backward`,
  `embedding_backward`,
  `flash_attention_forward`,
  `gelu_backward`,
  `glu`,
  `group_norm_backward`,
  `log_softmax` (*stable*),
  `log_softmax_backward`,
  `sigmoid_backward`,
  `silu_backward`,
  `threshold`,
  `threshold_backward`,
  `weight_norm_interface_backward`
- 移除神经网络算子：
  `cross_entropy_loss`,
  `instance_norm`
- 移除线性代数算子：
  `outer` (*fused*),

## v2.2

**发布日期**：2025-04-17

- 新增 BLAS 算子：
  `vdot`
- 新增张量算子：
  `cat`,
  `constant_pad_nd`,
  `contiguous` (*alpha*),
  `diag`,
  `diag_embed`,
  `fill`,
  `fill_`,
  `hstack`,
  `index_add`,
  `index_put`,
  `isin`,
  `kron`,
  `linspace`,
  `masked_fill`,
  `masked_fill_`,
  `quantile`,
  `repeat_interleave_self_tensor`,
  `repeat_interleave_tensor`,
  `scatter`,
  `select_scatter`,
  `slice_scatter`,
  `sort`,
  `stack`,
  `vstack`,
  `where_out` (*stable*),
- 新增线性代数算子：
  `diagonal_backward`
- 新增卷积算子：
  `_conv_depthwise2d`,
- 新增神经网络算子：
  `_upsample_bicubic2d_aa`,
  `elu`,
  `gelu_`,
  `instance_norm` (*fused*),
  `mse_loss`,
  `nll_loss_backward`,
  `nll_loss_forward`,
  `nll_loss2d_backward`,
  `nll_loss2d_forward`,
  `relu_`,
  `scaled_dot_product_attention`,
  `scaled_dot_product_attention_backward`,
  `scaled_dot_product_attention_forward`,
  `sigmoid_`,
  `silu_`,
  `upsample_nearest2d`,
  `weight_norm_interface`,
- 新增数学算子：
  `abs_`,
  `add_`,
  `bitwise_and_`,
  `bitwise_not_`,
  `bitwise_or_`,
  `clamp_`,
  `cos_`,
  `div_mode_`,
  `exp_`,
  `floor_divide_`,
  `log`,
  `log_sigmoid`,
  `logical_and`,
  `logical_not`,
  `logical_or`,
  `logical_xor`,
  `mul_`,
  `pow_`,
  `reciprocal_`,
  `remainder`,
  `remainder_`,
  `rsqrt_`,
  `sin_`,
  `sub_`,
  `tanh_`
- 新增 Reduction 算子：
  `argmin`,
  `count_nonzero`,
  `cummin`,
  `gather`,
  `gather_backward`
- 新增科学算子：
  `erf_`
- 新增 Distribution 算子：
  `randperm`

## v2.1

**发布日期**：2024-09-05

- 新增张量算子：
  `_unique2`,
  `arange`,
  `flip`,
  `full`,
  `full_like`,
  `index_select`,
  `masked_fill` (*alpha*),
  `masked_select`,
  `ones`,
  `ones_like`,
  `pad`,
  `repeat`,
  `tile`,
  `unique`,
  `where`,
  `zeros`,
  `zeros_like`
- 新增神经网络算子：
  `embedding`
- 新增数学算子：
  `allclose`,
  `floor_divide`,
  `isclose`,
  `isfinite`,
  `maximum`,
  `minimum`,
  `true_divide`,
  `trunc_divide`
- 新增 Distribution 算子：
  `exponential_`,
  `multinomial`,
  `nonzero`,
  `normal`,
  `rand`,
  `rand_like`,
  `randn`,
  `randn_like`,
  `topk`,
  `uniform_`
- 新增科学算子：
  `erf`,
  `resolve_conj`,
  `resolve_neg`

## v2.0

**发布日期**：2024-05-31

- 新增 BLAS 算子：
  `mv`,
  `outer`
- 新增数学算子：
  `bitwise_and`,
  `bitwise_not`,
  `bitwise_or`,
  `clamp`,
  `cos`,
  `eq`,
  `ge`,
  `gt`,
  `isinf`,
  `isnan`,
  `le`,
  `lt`,
  `ne`,
  `neg`,
  `or`,
  `sigmoid`
  `sin`,
  `tanh`,
- 新增 Reduction 算子：
  `all`,
  `amax`,
  `any`,
  `argmax`,
  `cross_entropy_loss`,
  `group_norm`,
  `log_softmax` (*alpha*),
  `max`,
  `min`,
  `prod`,
  `rms_norm`,
  `rms_norm_backward`,
  `rms_norm_forward`,
  `sum`,
  `var_mean`,
  `vector_norm`,
- 新增神经网络算子：
  `apply_rotary_position_embedding`,
  `fused_add_rms_norm`,
  `gelu_and_mul`,
  `outer` (*alpha*),
  `silu_and_mul`,
  `silu_and_mul_out`,
  `skip_layer_norm`

## v1.0

**发布日期**：2024-05-10

- 新增 BLAS 算子：
  `addmm`,
  `bmm`,
  `mm`
- 新增数学算子：
  `abs`,
  `add`,
  `div`,
  `dropout`,
  `exp`,
  `gelu`,
  `mul`,
  `pow`,
  `reciprocal`,
  `relu`,
  `rsqrt`,
  `silu`,
  `sub`,
  `triu`
- 新增 Reduction 算子：
  `cumsum`,
  `layer_norm`,
  `mean`,
  `softmax`

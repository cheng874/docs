# Multi-Platform Build and Testing

This guide covers building TransformerEngine-FL and validating it on four non-NVIDIA platforms: MetaX, Hygon, Ascend, and T-Head PPU. It focuses on the parts that are specific to this component — the operator backend tiers, the vendor backends, and the attention backends — and on how to tell a healthy build from a broken one.

For the training orchestration around it, see [Megatron-LM-FL](https://github.com/flagos-ai/Megatron-LM-FL) and [FlagScale](https://github.com/flagos-ai/FlagScale).

---

## 1. Backend layout

TransformerEngine-FL dispatches every operator through three tiers. Knowing which tier a failure comes from is the fastest way to localize a problem.

| Tier | Package path | Purpose |
|------|--------------|---------|
| FlagOS | `transformer_engine/plugin/core/backends/flagos` | Default Triton implementation, built on FlagGems |
| Vendor | `transformer_engine/plugin/core/backends/vendor/<vendor>` | Hardware-specific implementations |
| Reference | `transformer_engine/plugin/core/backends/reference` | Pure PyTorch fallback |

Vendor backends shipped in v0.3.0:

| Vendor | Directory | Notes |
|--------|-----------|-------|
| CUDA | `vendor/cuda` | NVIDIA GPUs |
| MetaX | `vendor/metax` | Flash attention |
| Hygon | `vendor/hygon` | DCU, flash attention |
| Ascend NPU | `vendor/npu` | Requires `transformer_engine_npu` |
| KunlunXin | `vendor/kunlunxin` | Flash attention |
| Iluvatar | `vendor/iluvatar` | Corex GPU |
| MUSA | `vendor/musa` | Moore Threads S-series |
| ENFLAME | `vendor/enflame` | Flash attention |
| Tsingmicro | `vendor/tsingmicro` | TXDA |

---

## 2. Platform prerequisites

| Platform | Device check | FlagTree backend | Visible-devices env |
|----------|--------------|------------------|---------------------|
| MetaX | `mx-smi` | `metax` | `MACA_VISIBLE_DEVICES` |
| Hygon | `hy-smi` | `hcu` | `HIP_VISIBLE_DEVICES` |
| Ascend | `npu-smi info` | `ascend` | `ASCEND_RT_VISIBLE_DEVICES` |
| T-Head PPU | `ppu-smi` | `ppu` | `CUDA_VISIBLE_DEVICES` |

```{note}
Hygon requires `source /opt/dtk/env.sh` before any build or run command.
```

---

## 3. Build from source

```bash
git clone https://github.com/flagos-ai/TransformerEngine-FL.git
cd TransformerEngine-FL
git checkout 0.3.0-rc2
git submodule update --init --recursive
```

On NVIDIA, build against the CUDA toolkit:

```bash
MAX_JOBS=64 pip install -v . --no-build-isolation --root-user-action=ignore
```

On every non-NVIDIA platform, skip the CUDA extension and build only the plugin layer:

```bash
TE_FL_SKIP_CUDA=1 MAX_JOBS=64 pip install -v . --no-build-isolation --root-user-action=ignore
```

Verify the installed version:

```bash
pip list | grep transformer
transformer_engine                       2.17.0+69cf722e
transformers                             5.8.1
```

```{note}
`TE_FL_SKIP_CUDA=1` is mandatory on non-NVIDIA platforms. Without it the build tries to compile the CUDA kernels and fails.
```

On MetaX, the same result is reported as:

```text
transformer_engine                       2.17.0+f247b9fe
transformer_engine_metax                 2.9.0
transformers                             4.51.0
```

---

## 4. Install the FlagOS compiler and operator library

TransformerEngine-FL's FlagOS tier is built on FlagGems, which in turn needs FlagTree as its compiler. Install both before enabling `te_fl_prefer: flagos`.

```bash
python -m pip uninstall -y triton
cd /workspace/FlagTree
git checkout 0.7.0-rc2-triton3.6

pip install "nanobind>=2.4,<3"
pip install -U scikit-build-core==0.11 pybind11 ninja cmake
# Ascend only
pip install -r /workspace/FlagTree/python/requirements-ascend.txt
unset LLVM_SYSPATH LLVM_INCLUDE_DIRS LLVM_LIBRARY_DIR

export FLAGTREE_BACKEND=metax        # metax | hcu | ascend | ppu
MAX_JOBS=32 python3 -m pip install . --no-build-isolation -v

python -c "import triton; print('Triton:', triton.__version__)"
```

```bash
cd /workspace/FlagGems
git checkout 5.4.0-rc2
pip install --no-build-isolation -e .
python -c "import flag_gems; print(flag_gems.__version__)"
```

```{note}
On T-Head PPU, `/workspace` is an OSS object-store FUSE mount (`ossfs2`) that cannot host in-place ELF writes (the assembler fails with `file truncated`). Build FlagTree and FlagGems from local disk instead, keeping `.git` so `setuptools_scm` can resolve the version.
```

---

## 5. Operator selection

Operator selection is driven by three model arguments in the task-level YAML:

| Argument | Meaning | Example |
|----------|---------|---------|
| `te_fl_prefer` | Preferred tier for every operator | `flagos`, `vendor`, `reference` |
| `te_fl_per_op` | Per-operator override, `op=backend\|backend` | `rmsnorm_fwd=vendor:acme\|flagos;rope_fwd=flagos\|reference` |
| `te_fl_allow_vendors` / `te_fl_deny_vendors` | Vendor allow/deny lists | `vendor_a` |

```yaml
model:
  transformer_impl: transformer_engine
  te_fl_prefer: flagos
  te_fl_per_op: "rmsnorm_fwd=vendor:acme|flagos;rope_fwd=flagos|reference"
  te_fl_allow_vendors: "vendor_a"
  te_fl_deny_vendors: "vendor_b"
  enable_flag_gems: True
  flag_gems_log_path: ${experiment.exp_name}
```

Fallback order is: preferred backend → the per-operator list → the default vendor backend → the sole registered vendor → Reference.

---

## 6. Run the training test

The test job is a Qwen3 training run driven by FlagScale, with TransformerEngine-FL supplying the transformer operators.

```bash
cd /workspace/FlagScale
flagscale train qwen3 --config ./examples/qwen3/conf/train_te_fl.yaml
```

The task configuration `./examples/qwen3/conf/train/te_fl.yaml` selects the engine:

```yaml
model:
  transformer_impl: transformer_engine
  te_fl_prefer: flagos
  enable_flag_gems: True
  distributed_backend: flagcx
```

Set the visible-devices variable for your platform in `train_te_fl.yaml`:

```yaml
experiment:
  envs:
    LOGLEVEL: "INFO"
    CUDA_VISIBLE_DEVICES: "0,1,2,3,4,5,6,7"
    CUDA_DEVICE_MAX_CONNECTIONS: 1
    MACA_VISIBLE_DEVICES: "0,1,2,3,4,5,6,7"   # MetaX
```

| Platform | Variable to set |
|----------|-----------------|
| MetaX | `MACA_VISIBLE_DEVICES: "0,1,2,3,4,5,6,7"` |
| Hygon | `HIP_VISIBLE_DEVICES: "0,1,2,3,4,5,6,7"` |
| Ascend | `ASCEND_RT_VISIBLE_DEVICES: "0,1,2,3"` |
| T-Head PPU | `CUDA_VISIBLE_DEVICES: "8,9,10,11,12,13,14,15"` |

### Expected output

A healthy T-Head PPU run with the FlagOS tier selected (`te_fl_prefer: flagos`, `enable_flag_gems: true`, `global_batch_size: 8`):

```text
[default7]: [2026-09-14 15:08:27.273656] iteration       44/  102400 | consumed samples:          352 | elapsed time per iteration (ms): 6922.3 | throughput per GPU (TFLOP/s/GPU): 62.0 | learning rate: 1.289062E-04 | global batch size:     8 | lm loss: 6.457796E+00 | loss scale: 1.0 | grad norm: 4.096 | num zeros: 760881152.0 | params norm: 2241.466 | number of skipped iterations:   0 | number of nan iterations:   0 |
[default7]: [2026-09-14 15:08:34.201805] iteration       45/  102400 | consumed samples:          360 | elapsed time per iteration (ms): 6928.0 | throughput per GPU (TFLOP/s/GPU): 61.9 | learning rate: 1.318359E-04 | global batch size:     8 | lm loss: 6.415310E+00 | loss scale: 1.0 | grad norm: 4.814 | num zeros: 759052800.0 | params norm: 2241.458 | number of skipped iterations:   0 | number of nan iterations:   0 |
```

A healthy MetaX run on the vendor tier (`te_fl_prefer: flagos` not set, `global_batch_size: 32`):

```text
[default7]: [2026-09-08 20:31:37.112485] iteration      561/ 7629408 | consumed samples:        17952 | elapsed time per iteration (ms): 1510.4 | throughput per GPU (TFLOP/s/GPU): 54.1 | learning rate: 3.000000E-03 | global batch size:    32 | lm loss: 4.858129E-02 | loss scale: 1.0 | grad norm: 0.027 | num zeros: 3.0 | params norm: 967.809 | number of skipped iterations:   0 | number of nan iterations:   0 |
```

Stop the job:

```bash
flagscale train qwen3 --stop
```

---

## 7. Known issues and workarounds

### 7.1 MetaX

**Multi-card training fails when the FlagOS tier is selected** — the MetaX backend C++ bindings are incompatible with the Triton 3.6.0 Python API. `metax.passes.ttgpuir.add_accelerate_matmul()` expects a C++ `mlir::PassManager` but receives a Python-wrapped `triton._C.libtriton.ir.pass_manager`. Tracked in [Megatron-LM-FL issue #143](https://github.com/flagos-ai/Megatron-LM-FL/issues/143).

**`CUDA_DEVICE_MAX_CONNECTIONS` must be set even though the device is not CUDA** — argument validation in the training engine still requires it whenever multi-card parallelism is enabled. Tracked in [FlagScale issue #1289](https://github.com/flagos-ai/FlagScale/issues/1289).

### 7.2 Hygon

**`AssertionError: Unknown c10d backend type FLAGCX`** — the FlagCX backend is not registered on this platform. Switch the distributed backend back to the vendor collective library:

```yaml
system:
  distributed_backend: nccl
```

**`NotImplementedError: the derivative for 'chunk' is not implemented`** — the FlagGems `chunk` operator has no backward. Exclude it:

```yaml
model:
  flag_gems_unused: ["chunk", "conv3d", "mul", "mul_", "index_put", "index_put_", "_index_put_impl_", "baddbmm", "mm", "normal_", "sum_dim", "gather_backward", "index_add_", "slice_backward", "slice"]
```

**`FlagTune ManifestFetchError: FLAGTUNE_MANIFEST_URL is not configured`** — no cached FlagTune cost-model manifest is available. See [FlagGems issue #6133](https://github.com/flagos-ai/FlagGems/issues/6133).

**`ValueError: Invalid entry in hostfile`** — FlagGems overwrites the runner hostfile when `flag_gems_log_path` points at it. Point that argument at a dedicated log file. See [FlagGems issue #6134](https://github.com/flagos-ai/FlagGems/issues/6134).

### 7.3 Ascend

**`MLIRCompilationError: ub overflow` in the FlagGems attention backward kernel** — the unified buffer required by the attention backward kernel exceeds what the NPU provides. Reduce `seq_length` (for example 4096 → 1024), or fall back to the native TransformerEngine backend instead of the FlagOS tier. The compiler enables multi-buffering by default (`--enable-auto-multi-buffer=True`), doubling the requirement; `num_stages=1` disables it.

**Python 3.10 environment** — the image ships Python 3.10, which needs the `typing_extensions` import path in the training engine's `models/hybrid.py`.

### 7.4 T-Head PPU

**FlagTree and FlagGems cannot be built on `/workspace`** — see the note in section 4.

**FlagCX is not enabled** — the FlagCX path is known to fail on this platform; keep `distributed_backend` on the vendor collective library.

---

## 8. Notes

- Always pass `TE_FL_SKIP_CUDA=1` on non-NVIDIA platforms.
- `te_fl_prefer: flagos` requires FlagTree and FlagGems to be installed first; otherwise dispatch falls through to the vendor or Reference tier.
- Use `te_fl_per_op` to work around a single failing operator instead of abandoning the whole FlagOS tier.
- For operator-level API details, see the [reference](../references/reference.md) page.

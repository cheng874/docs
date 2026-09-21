# Install software for running an inference task

You can download the docker images for supported hardwares from the [FlagOS main page](https://flagos.io/Home?spm=5176.28103460.0.0.69662988ZUbtpg). Just simply click the **Download** button, use the `docker pull` command to download the docker image, and then use the `docker run` and `docker exec` commands to start the container and enter it.

## Install from docker image

vllm-plugin-FL is installed from a pre-built Docker image. Pull and start the image first, then install the components inside the container. The supported versions and hardware platforms are listed in [Requirements](requirements.md).

1. Pull and start the image

FlagOS release images are published with a uniform tag layout, in which the vLLM version and the plugin branch must match each other (vLLM 0.24.0 with plugin 0.3.0, vLLM 0.20.2 with plugin 0.2.2):

```{code-block} shell
<registry>/<repository>/vllm<vLLM version>-<vendor>-<vendor SDK>:<FlagOS version>-<plugin branch>_g<commit>.d<build date>
```

A container is always created with `docker run` and then entered with `docker exec`:

```{code-block} shell
docker pull <image>

docker run -itd \
  --name <container name> \
  --network host --ipc host \
  --shm-size <shared memory, see the table below> \
  <device passthrough, see the table below> \
  -v <model dir>:/models \
  <image> <bash|sleep infinity>

docker exec -it <container name> bash
```

Container names are `<vendor>-vllm-<version>`, optionally suffixed with `-plugin-<branch>`; the name passed to `docker exec` must be identical to the `--name` given to `docker run`. The command after the image decides how the container stays alive: `bash` for an interactive container, `sleep infinity` (or `tail -f /dev/null`) for a detached one. Vendor test guides may also write the image path inline instead of defining a variable — the options are the same.

Only the parameters below differ between backends; the rest are the same as in the template above. `—` means the vendor guide does not set that parameter.

| Backend | Device passthrough | Extra mounts | Shared memory | Environment variables |
|---------|--------------------|--------------|---------------|-----------------------|
| NVIDIA | `--gpus all` | — | `512g` | — |
| Hygon DCU | `--device /dev/kfd --device /dev/mkfd --device /dev/dri --group-add video` | `/opt/hyhal:/opt/hyhal` | — | `-e DCU_VISIBLE_DEVICES=all` |
| Iluvatar | `--privileged` | `/dev:/dev`, `/usr/src:/usr/src`, `/lib/modules:/lib/modules` | `32g` | — |
| Enflame, Tsingmicro, Sunrise | `--privileged` | — | — | `-e ENFLAME_VISIBLE_DEVICES=0` (Enflame only) |
| Kunlunxin | `--privileged` | — | `128G` | — |
| Moore Threads | `--privileged --runtime=mthreads` | — | `64g` | `-e MTHREADS_VISIBLE_DEVICES=all` |
| Ascend | `--device /dev/davinci0..N --device /dev/davinci_manager --device /dev/devmm_svm --device /dev/hisi_hdc` | `/usr/local/dcmi:/usr/local/dcmi`, `/usr/local/bin/npu-smi:/usr/local/bin/npu-smi`, `/usr/local/Ascend/driver:/usr/local/Ascend/driver` | `512g` | — |
| MetaX | `--device /dev/mxcd --device /dev/dri` | — | `100gb` | — |
| Alibaba PPU, T-Head PPU | `--device /dev/alixpu --device /dev/alixpu_ctl --device /dev/alixpu_ppu{0..15}` | — | — | — |

```{note}
The release images ship the vendor runtime and a base vLLM build. To run the FlagOS 2.2 release, replace vLLM with the `empty` v0.24.0 source build and install vllm-plugin-FL v0.3.0 as described in step 2 below. For the full per-vendor command sequence (proxy setup, FlagGems flash-attention fix, FlagTree backend selection, autotune warm-up), see the vendor test guides.
```

2. Install the components in the container

Pick the branch that matches your vLLM version; the branch and the vLLM version must stay paired:

| vllm-plugin-FL branch | Community vLLM version |
|-----------------------|------------------------|
| `release/0.2` | [v0.20.2](https://github.com/vllm-project/vllm/tree/v0.20.2) |
| `main` | [v0.24.0](https://github.com/vllm-project/vllm/tree/v0.24.0) |

2.1 Install vLLM

    For **NVIDIA** GPUs, install vLLM from the official [v0.24.0](https://github.com/vllm-project/vllm/tree/v0.24.0) release (optional if the correct version is already installed):

    ```{code-block} shell
    pip install vllm==0.24.0
    ```

    For **non-NVIDIA** chips, install vLLM from source with the `empty` device target:

    ```{code-block} shell
    git clone -b v0.24.0 https://github.com/vllm-project/vllm.git
    cd vllm
    VLLM_TARGET_DEVICE=empty pip install -v --no-build-isolation --no-deps .
    ```

2.2 Install vllm-plugin-FL

    Clone the repository, using the branch that matches your vLLM version (see [Version compatibility](#version-compatibility)):

    ```{code-block} shell
    git clone -b main https://github.com/flagos-ai/vllm-plugin-FL
    cd vllm-plugin-FL
    # for vLLM 0.20.2, use: git clone -b release/0.2 https://github.com/flagos-ai/vllm-plugin-FL
    ```

    Install it. By default vllm-plugin-FL installs as a Python-only package:

    ```{code-block} shell
    pip install --no-build-isolation .
    # or editable install
    pip install --no-build-isolation -e .
    ```

    For CUDA-like devices, including CUDA and HIP/ROCm environments that use PyTorch's CUDA dispatch key, build the plugin native extension by setting `VLLM_VENDOR=cuda` during installation:

    ```{code-block} shell
    VLLM_VENDOR=cuda pip install --no-build-isolation .
    # or editable install
    VLLM_VENDOR=cuda pip install --no-build-isolation -e .
    ```

    This builds and installs `vllm_fl._C`, which provides native C++ support required by some graph/custom-op paths, especially when vLLM is installed with `VLLM_TARGET_DEVICE=empty`. If `VLLM_VENDOR` is not set, vllm-plugin-FL is installed as a Python-only plugin and the native extension is skipped.

2.3 Install [FlagGems](https://flagos-ai.github.io/FlagGems/getting-started/install/)

    Install build dependencies

    ```{code-block} shell
    pip install -U scikit-build-core==0.11 pybind11 ninja cmake
    ```

    Install FlagGems:

    ```{code-block} shell
    git clone -b v5.3.4 https://github.com/flagos-ai/FlagGems
    cd FlagGems
    pip install --no-build-isolation .
    # or editable install
    pip install --no-build-isolation -e .
    ```

    ```{note}
    On Sunrise platform, depends on FlagGems [PR #2949](https://github.com/flagos-ai/FlagGems/pull/2949).
    On Hygon platform, depends on FlagGems [PR #3477](https://github.com/flagos-ai/FlagGems/pull/3477).
    ```

2.4 (Optional) Install [FlagCX](https://github.com/flagos-ai/FlagCX/blob/main/docs/getting_started.md#build-and-installation)

    Clone the repository:

    ```{code-block} shell
    git clone -b v0.13.0 https://github.com/flagos-ai/FlagCX.git
    cd FlagCX
    git submodule update --init --recursive
    ```

    Build the library with different flags targeting to different platforms:

    ```{code-block} shell
    make USE_NVIDIA=1
    ```

    Set environment:

    ```{code-block} shell
    export FLAGCX_PATH="$PWD"
    ```

    Install FlagCX:

    ```{code-block} shell
    cd plugin/torch/
    FLAGCX_ADAPTOR=[xxx] pip install . --no-build-isolation
    # or editable install
    FLAGCX_ADAPTOR=[xxx] pip install -e . --no-build-isolation
    ```

    ```{note}
    [xxx] should be selected according to the current platform, e.g., nvidia, ascend, etc.
    ```

If there are multiple plugins in the current environment, you can select vllm-plugin-fl with VLLM_PLUGINS='fl'.

### Additional setup for Huawei Ascend

1. Install [FlagTree](https://resource.flagos.net)

    ```{code-block} shell
    RES="--index-url=https://resource.flagos.net/repository/flagos-pypi-hosted/simple --trusted-host=https://resource.flagos.net"
    python3 -m pip install flagtree==0.6.1+ascend3.5 $RES
    ```

    For other chips, use the matching FlagTree build (e.g., `flagtree==0.6.1+iluvatar3.6`, `flagtree==0.6.1+metax3.6`).

2. Set required environment variable

    ```{code-block} shell
    export TRITON_ALL_BLOCKS_PARALLEL=1
    ```

3. Enable eager execution

    Ascend requires eager execution. Add `enforce_eager=True` to the `LLM` constructor or pass `--enforce-eager` on the command line.

### (Optional) Additional setup for CUDA

This section illustrates how to run an inference task with CUDA through setting environment variables.

For operator dispatch environment variables, see [Environment variables](../dispatch_user_guide/configure-backend-selection.md/#environment-variables).

#### Use CUDA communication library

```{code-block} shell
unset FLAGCX_PATH
```

#### Use native CUDA operators

If you want to use the original CUDA operators, you can set the following environment variables.

```{code-block} shell
export USE_FLAGGEMS=0
```

3. (Optional) Dispatch operators

If needed, you can also dispatch operators.

For concept related information, see [vllm-plugin-FL Overview](../overview/overview.md).
For configuration related information, see [Operator dispatch user guide](../dispatch_user_guide/dispatch-user-guide.md).

After installation and optional operator dispatch configuration, you can proceed to [Run an inference task](run-inference-task.md).

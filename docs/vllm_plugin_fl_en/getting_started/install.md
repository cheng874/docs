# Install software for running an inference task


You can download the docker images for supported hardwares from the [FlagOS main page](https://flagos.io/Home?spm=5176.28103460.0.0.69662988ZUbtpg). Just simply click the **Download** button, use the `docker pull` command to download the docker image, and then use the `docker run` and `docker exec` commands to start the container and enter it.


## Install from source

This section covers installing vllm-plugin-FL and its dependencies from source code.

### Version compatibility

Pick the branch that matches your vLLM version; the branch and the vLLM version must stay paired:

| vllm-plugin-FL branch | Community vLLM version |
|-----------------------|------------------------|
| `release/0.2` | [v0.20.2](https://github.com/vllm-project/vllm/tree/v0.20.2) |
| `main` | [v0.24.0](https://github.com/vllm-project/vllm/tree/v0.24.0) |

1. Install vLLM

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

2. Install vllm-plugin-FL

    2.1 Clone the repository, using the branch that matches your vLLM version (see [Version compatibility](#version-compatibility)):

    ```{code-block} shell
    git clone -b main https://github.com/flagos-ai/vllm-plugin-FL
    cd vllm-plugin-FL
    # for vLLM 0.20.2, use: git clone -b release/0.2 https://github.com/flagos-ai/vllm-plugin-FL
    ```

    2.2 install

    By default vllm-plugin-FL installs as a Python-only package:

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

3. Install [FlagGems](https://flagos-ai.github.io/FlagGems/getting-started/install/)

    3.1 Install build dependencies

    ```{code-block} shell
    pip install -U scikit-build-core==0.11 pybind11 ninja cmake
    ```

    3.2 Install FlagGems

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

4. (Optional) Install [FlagCX](https://github.com/flagos-ai/FlagCX/blob/main/docs/getting_started.md#build-and-installation)

    4.1 Clone the repository:

    ```{code-block} shell
    git clone -b v0.13.0 https://github.com/flagos-ai/FlagCX.git
    cd FlagCX
    git submodule update --init --recursive
    ```

    4.2 Build the library with different flags targeting to different platforms:

    ```{code-block} shell
    make USE_NVIDIA=1
    ```

    4.3 Set environment

    ```{code-block} shell
    export FLAGCX_PATH="$PWD"
    ```

    4.4 Install FlagCX

    ```{code-block} shell
    cd plugin/torch/
    FLAGCX_ADAPTOR=[xxx] pip install . --no-build-isolation
    # or editable install
    FLAGCX_ADAPTOR=[xxx] pip install -e . --no-build-isolation
    ```

    ```{note}
    [xxx] should be selected according to the current platform, e.g., nvidia, ascend, etc.
    ```

If there are multiple plugins in the current environment, you can specify use vllm-plugin-fl via VLLM_PLUGINS='fl'.

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

### （Optional）Additional setup for CUDA

This section illustrates how to run an inference task with CUDA through setting environment variables.

For operator dispatch environment variables, see [Environment variables](../dispatch_user_guide/configure-backend-selection.md/#environment-variables).

#### Use CUDA communication library

This section demonstrates how to run an inference task with CUDA by setting environment variables.

```{code-block} shell
unset FLAGCX_PATH
```

#### Use native CUDA operators

If you want to use the original CUDA operators, you can set the following environment variables.

```{code-block} shell
export USE_FLAGGEMS=0
```

## Install from docker image

This section covers running vllm-plugin-FL using pre-built Docker images.

```{note}
The commands below use the vLLM 0.24.0 images and the FlagOS 2.2 release stack. For the vLLM 0.20.2 images, select the matching image from the FlagOS resource download page.
```

### Common `docker run` / `docker exec` conventions

FlagOS release images are published with a uniform tag layout:

```{code-block} shell
IMG=<registry>/<repository>/vllm<vLLM version>-<vendor>-<vendor SDK>:<FlagOS version>-<plugin branch>_g<commit>.d<build date>
```

For example:

```{code-block} shell
IMG=harbor.baai.ac.cn/flagos-app/vllm0.24.0-hygon-dtk26.04:2.1.2-0.3.0rc2.post1_gc9bbcf0.d20260914
```

The `vLLM version` and the `plugin branch` must match each other (vLLM 0.24.0 with plugin 0.3.0, vLLM 0.20.2 with plugin 0.2.2); `g<commit>` and `d<build date>` identify the build. Vendor test guides may also write the image path inline instead of defining `IMG=` — the options are the same.

A container is always created with `docker run` and then entered with `docker exec`:

```{code-block} shell
docker run -itd \
  --name <vendor>-vllm-<version> \
  --network host --ipc host \
  --shm-size <64g|128g|512g> \
  <device passthrough, see the table below> \
  -e <VENDOR>_VISIBLE_DEVICES=all \
  -v <model dir>:/models \
  -v <vendor runtime dir>:<vendor runtime dir> \
  $IMG <bash|sleep infinity>

docker exec -it <vendor>-vllm-<version> bash
```

Device passthrough is the only part that really differs between vendors — pick exactly one form:

| Vendor | Device passthrough |
|--------|--------------------|
| NVIDIA | `--gpus all` |
| Iluvatar, Enflame, Tsingmicro, Kunlunxin | `--privileged` (Iluvatar additionally mounts `/dev`, `/lib/modules`, `/sys`) |
| Moore Threads | `--privileged --runtime=mthreads` |
| Hygon DCU | `--device /dev/kfd --device /dev/mkfd --device /dev/dri --group-add video` |
| Ascend | `--device /dev/davinci0..N --device /dev/davinci_manager --device /dev/devmm_svm --device /dev/hisi_hdc` |
| MetaX | `--device /dev/mxcd --device /dev/dri` |
| Alibaba PPU, T-Head PPU | `--device /dev/alixpu --device /dev/alixpu_ctl --device /dev/alixpu_ppu{0..15}` |

Conventions shared by all vendors:

- `--network host` (`--net host`) on every vendor, `--ipc host` on most; `--shm-size` ranges from `64g` to `512g` depending on the platform.
- `-v <model dir>:/models` exposes the weights; `-v <vendor runtime dir>:<same path>` mounts the host driver (for example `/opt/hyhal` on Hygon, `/usr/local/corex-*` on Iluvatar).
- Container names are `<vendor>-vllm-<version>`, optionally suffixed with `-plugin-<branch>` (for example `hygon-vllm-024-plugin-030`). The name passed to `docker exec` must be identical to the `--name` given to `docker run`.
- The command after `$IMG` decides how the container stays alive: `bash` for an interactive container, `sleep infinity` (or `tail -f /dev/null`) for a detached one. In both cases you enter it afterwards with `docker exec -it <name> bash`.

Example, Hygon DCU with the image above:

```{code-block} shell
docker run -it --name vllm-hygon-0240 \
  --device /dev/kfd --device /dev/mkfd --device /dev/dri \
  --group-add video \
  -v /opt/hyhal:/opt/hyhal \
  -v /public-nvme:/public-nvme \
  --security-opt seccomp=unconfined \
  -e DCU_VISIBLE_DEVICES=all \
  $IMG bash

docker exec -it vllm-hygon-0240 bash
```

Before starting a service, install the FlagGems version used for the verification:

```{code-block} shell
git clone -b v5.3.4 https://github.com/flagos-ai/FlagGems
cd FlagGems
pip install --no-build-isolation -e .
```

| Platform | Image | Contents |
|----------|-------|----------|
| Alibaba PPU | `egslingjun-registry.cn-wulanchabu.cr.aliyuncs.com/egslingjun/inference-xpu-pytorch:26.04-v2.1.0-vllm0.19.0-torch2.10-cu130-20260508` | PPU SDK 2.0.0-715aa1, torch 2.10.0, vLLM 0.19.0 (replaced by an `empty` 0.24.0 source build in the guide) |
| Moore Threads MTT S5000 | `harbor.baai.ac.cn/flagrelease-public/flagrelease_mthreads-gmi_vllm024plugin_base:08281629` | MUSA base image used for the vLLM 0.24.0 + plugin 0.3.0 stack |
| Moore Threads MTT S5000 | `harbor.baai.ac.cn/plugin/musa-ph1.4.3.5-tree0.6.1a2-triton3.6.0-cxnone-plugin0.3.0-vllm0.24.0-cp310-pt290-x64:20260804` | Full stack: MUSA PH 1.4.3.5, FlagTree 0.6.1a2 (Triton 3.6.0), plugin 0.3.0, vLLM 0.24.0, Python 3.10, torch 2.9.0 |
| Iluvatar BI-V150 | `harbor.baai.ac.cn/plugin/iluvatar-corex4.5.0-flagtree0.6.0-triton3.6.0-cxnone-vllm_fl0.24.0:20260827` | corex 4.5.0, FlagTree 0.6.0 (Triton 3.6.0), vllm_fl for vLLM 0.24.0 |
| Tsingmicro TX8110 | `harbor.baai.ac.cn/plugin/tsingmicro001-gems4.2.1-treenone-triton3.6.0-cx0.1.0-plugin0.2.0-vllm0.20.2-cp310-pt211-x64-v260604163331.01:202607130736` | FlagGems 4.2.1, Triton 3.6.0, FlagCX 0.1.0, plugin 0.2.0, vLLM 0.20.2, Python 3.10, torch 2.11.0 |
| Enflame ZIXIAOC200 | `harbor.baai.ac.cn/plugin/enflame001-gems5.3.1-treenone-triton3.6.0-cxnone-plugin0.2.1-vllm0.20.2-cp312-pt211-x64-1.10.6:202608281710` | FlagGems 5.3.1, Triton 3.6.0, plugin 0.2.1, vLLM 0.20.2, Python 3.12, torch 2.11.0 |
| Sunrise S2 | `harbor.baai.ac.cn/plugin/sunrise001-gems5.3.4-tree0.6.0_sunrise3.6-cx0.13.0-plugin0.2.1-vllm0.20.2_flagos-cp310-pt211-x64-v0.25.0:202608311648` | FlagGems 5.3.4, FlagTree 0.6.0 (sunrise 3.6), FlagCX 0.13.0, plugin 0.2.1, vLLM 0.20.2+flagos, Python 3.10, torch 2.11.0 |
| Kunlunxin P800 | `harbor.baai.ac.cn/flagos-app/vllm0.20.2-kunlunxin-xre5.37.1:2.1.2-0.2.1_g8236c0a.d20260821` | xre 5.37.1 runtime base image for the vLLM 0.20.2 + plugin 0.2.0 source build |
| Hygon DCU | `harbor.sourcefind.cn:5443/dcu/admin/base/custom:vllm0.20.0-ubuntu22.04-dtk26.04-py3.10-MiniCPM-V-4.6` | DTK 26.04 base image (vLLM 0.20.0 Hygon build) used for the 0.20.2/0.24.0 `empty` source builds |
| MetaX C550 | `cr.metax-tech.com/public-ai-release/maca/vllm-metax:0.20.0-maca.ai3.7.0.107-torch2.8-py312-ubuntu22.04-amd64` | MACA 3.7.0 image, torch 2.8.0+metax, Python 3.12; the image vLLM is replaced by an `empty` 0.24.0 source build |
| Ascend 910c | `quay.io/ascend/vllm-ascend:v0.20.2rc1-a3` | CANN 9.0.0 Ascend image used for the 0.20.2 `empty` source build |

MetaX and Hygon require device passthrough rather than `--gpus all`; for example, on MetaX:

```{code-block} shell
IMG=harbor.baai.ac.cn/flagos-app/vllm0.24.0-metax-maca3.7.2.1:2.1.2-0.2.1_g5c511da.d20260901

docker run -d \
  --name metax-vllm-024-plugin-030 \
  --network host --ipc host --shm-size 64g \
  --device /dev/dri:/dev/dri:rwm \
  --device /dev/mxcd:/dev/mxcd:rwm \
  -v /data/models:/models \
  $IMG sleep infinity
```

```{note}
These images ship the vendor runtime and a base vLLM build. To run the FlagOS 2.2 release, replace vLLM with the `empty` v0.24.0 source build and install vllm-plugin-FL v0.3.0 as described in [Install from source](#install-from-source). For the full per-vendor command sequence (proxy setup, FlagGems flash-attention fix, FlagTree backend selection, autotune warm-up), see the vendor test guides linked from the FlagOS resource download page.
```

### Hygon DCU

Available for vllm-plugin-FL v0.2.0 (vLLM 0.20.0).

1. Pull and start the Hygon DCU Docker container:

    ```{code-block} shell
    docker pull harbor.sourcefind.cn:5443/dcu/admin/base/custom:vllm0.20.0-ubuntu22.04-dtk26.04-py3.10-MiniCPM-V-4.6

    docker run \
        --name perf \
        --network=host \
        --ipc=host \
        --device=/dev/kfd \
        --device=/dev/mkfd \
        --device=/dev/dri \
        -v /opt/hyhal:/opt/hyhal \
        -v /path/to/models:/models \
        --group-add video \
        --cap-add=SYS_PTRACE \
        --security-opt seccomp=unconfined \
        -itd harbor.sourcefind.cn:5443/dcu/admin/base/custom:vllm0.20.0-ubuntu22.04-dtk26.04-py3.10-MiniCPM-V-4.6 \
        /bin/bash
    ```

    Replace `/path/to/models` with your actual model storage path.

2. Inside the container, install FlagGems:

    ```{code-block} shell
    git clone https://github.com/flagos-ai/FlagGems
    cd FlagGems
    git checkout 2718037d887cd6a3143474da0224648e40c5004f
    pip install --no-build-isolation -e .
    ```

3. Install vllm-plugin-FL:

    ```{code-block} shell
    git clone https://github.com/flagos-ai/vllm-plugin-FL
    cd vllm-plugin-FL
    git checkout 48af29e21491700a38020ab031af5d3b90e6795e
    pip install --no-build-isolation -e .
    ```

4. Download models:

    ```{code-block} shell
    modelscope download --model Qwen/Qwen3.6-27B --local_dir /models/Qwen3.6-27B
    modelscope download --model Qwen/Qwen3.6-35B-A3B --local_dir /models/Qwen3.6-35B-A3B
    ```

### NVIDIA

Available for vllm-plugin-FL v0.2.0 (vLLM 0.20.2).

1. Pull and start the NVIDIA Docker container:

    ```{code-block} shell
    docker pull vllm/vllm-openai:v0.20.0-cu130-ubuntu2404

    docker run -itd \
        --name perf \
        --entrypoint /bin/bash \
        --gpus all \
        --ipc=host \
        --privileged \
        --net host \
        --shm-size 512g \
        -v /path/to/models:/models \
        vllm/vllm-openai:v0.20.0-cu130-ubuntu2404
    ```

    Replace `/path/to/models` with your actual model storage path.

2. Inside the container, install dependencies:

    ```{code-block} shell
    apt-get update
    apt install git
    apt install vim
    pip install -U scikit-build-core==0.11 pybind11 ninja cmake
    ```

3. Install vllm:

    ```{code-block} shell
    pip install vllm==0.20.2
    ```

4. Install FlagGems:

    ```{code-block} shell
    git clone https://github.com/flagos-ai/FlagGems
    cd FlagGems
    git checkout 1dab11ab1a6671e3132528492d2cc193e78af8f4
    pip install --no-build-isolation .
    ```

5. Install vllm-plugin-FL:

    ```{code-block} shell
    git clone https://github.com/flagos-ai/vllm-plugin-FL
    cd vllm-plugin-FL
    git checkout 48af29e21491700a38020ab031af5d3b90e6795e
    pip install --no-build-isolation .
    ```

6. Download models:

    ```{code-block} shell
    modelscope download --model Qwen/Qwen3.6-27B --local_dir /models/Qwen3.6-27B
    modelscope download --model Qwen/Qwen3.6-35B-A3B --local_dir /models/Qwen3.6-35B-A3B
    ```

### Huawei Ascend

Available for vllm-plugin-FL v0.1.0 (vLLM 0.13.0).

1. Pull and start the Ascend Docker container:

    ```{code-block} shell
    docker pull quay.io/ascend/vllm-ascend:v0.13.0rc1-a3

    docker run \
    --name flagos \
    --network host \
    --ipc=host \
    --privileged \
    --device /dev/davinci0 \
    --device /dev/davinci1 \
    --device /dev/davinci2 \
    --device /dev/davinci3 \
    --device /dev/davinci4 \
    --device /dev/davinci5 \
    --device /dev/davinci6 \
    --device /dev/davinci7 \
    --device /dev/davinci8 \
    --device /dev/davinci9 \
    --device /dev/davinci10 \
    --device /dev/davinci11 \
    --device /dev/davinci12 \
    --device /dev/davinci13 \
    --device /dev/davinci14 \
    --device /dev/davinci15 \
    --device /dev/davinci_manager \
    --device /dev/devmm_svm \
    --device /dev/hisi_hdc \
    -v /usr/local/dcmi:/usr/local/dcmi \
    -v /usr/local/bin/npu-smi:/usr/local/bin/npu-smi \
    -v /usr/local/Ascend/driver/lib64/:/usr/local/Ascend/driver/lib64/ \
    -v /usr/local/Ascend/driver/version.info:/usr/local/Ascend/driver/version.info \
    -v /usr/local/Ascend/driver:/usr/local/Ascend/driver \
    -v /usr/local/sbin:/usr/local/sbin \
    -v /etc/ascend_install.info:/etc/ascend_install.info \
    -v /path/to/models:/models \
    -itd quay.io/ascend/vllm-ascend:v0.13.0rc1-a3 bash

    docker exec -it flagos bash
    ```

    Replace `/path/to/models` with your actual model storage path.

2. Inside the container, install FlagGems:

    ```{code-block} shell
    pip install -U scikit-build-core==0.11 pybind11 ninja cmake
    git clone https://github.com/flagos-ai/FlagGems
    cd FlagGems
    git checkout 6f2585dc9c48d440d856ad75f4aedee66fac365a
    pip install --no-build-isolation -e .
    ```

3. Install FlagTree:

    ```{code-block} shell
    RES="--index-url=https://resource.flagos.net/repository/flagos-pypi-hosted/simple --trusted-host=https://resource.flagos.net"
    python3 -m pip install flagtree==0.4.0+ascend3.2 $RES
    ```

4. Install vllm-plugin-FL:

    ```{code-block} shell
    git clone https://github.com/flagos-ai/vllm-plugin-FL
    cd vllm-plugin-FL
    git checkout ba008211c1c9646e19290e832a7f7775f7d2944f
    pip install --no-build-isolation -e .
    ```

5. Set environment variables and start the service:

    ```{code-block} shell
    export VLLM_PLUGINS=fl
    export TRITON_ALL_BLOCKS_PARALLEL=1
    vllm serve --model /models/Qwen3-4B --served-model-name qwen --enforce-eager
    ```

    ```{note}
    Ascend requires eager execution. Add `enforce_eager=True` to the `LLM` constructor or pass `--enforce-eager` on the command line.
    ```

### Iluvatar BI-V150

Available for vllm-plugin-FL v0.1.0 (vLLM 0.13.0).

1. Load and start the Corex Docker container:

    ```{code-block} shell
    docker load -i /mnt/share/images/corex.4.4.0.release.0211.vllm.013.flagos.tar

    docker run --shm-size="32g" -itd \
      -v /dev:/dev -v /usr/src/:/usr/src \
      -v /lib/modules/:/lib/modules \
      -v /mnt/share/user_homes/:/mnt/share/user_homes/ \
      --privileged --cap-add=ALL --pid=host --net=host \
      --name flagos_v2 corex:4.4.0.release.0211.vllm.013.flagos /bin/bash
    ```

2. Inside the container, install FlagGems:

    ```{code-block} shell
    pip install -U scikit-build-core==0.11 pybind11 ninja cmake
    git clone https://github.com/flagos-ai/FlagGems
    cd FlagGems
    git checkout 6f2585dc9c48d440d856ad75f4aedee66fac365a
    pip install --no-build-isolation -e .
    cd ../
    ```

3. Install vllm-plugin-FL:

    ```{code-block} shell
    git clone https://github.com/flagos-ai/vllm-plugin-FL.git
    cd vllm-plugin-FL
    git checkout f11a0f4707aecae245ec81289329b208ede5b06d
    pip install --no-build-isolation -e . --no-deps
    cd ../
    ```

4. Start the service:

    ```{code-block} shell
    export VLLM_PLUGINS=fl
    export VLLM_ENGINE_ITERATION_TIMEOUT_S=36000
    export VLLM_RPC_TIMEOUT=36000000
    vllm serve /mnt/share/user_homes/zyp/Qwen3-4B/ --served-model-name qwen --enforce-eager
    ```

    ```{note}
    The first startup takes approximately 15 minutes. Subsequent startups take less than 2 minutes.
    ```

The steps above provide a minimal setup for running Qwen3-4B on BV150. If you need the full FlagOS stack with FlagTree, FlagGems usage patterns, environment verification, and troubleshooting — or if you are setting up BV150 for the first time — see the complete end-to-end guide: [Qwen2.5-1.5B on Iluvatar BI-V150](example-qwen2.5-bv150.md).

## (Optional) Dispatch operators

If needed, you can also dispatch operators.

For concept related information, see [vllm-plugin-FL Overview](../overview/overview.md).
For configuration related information, see [Operator dispatch user guide](../dispatch_user_guide/dispatch-user-guide.md).

After installation and optional operator dispatch configuration, you can proceed to [Run an inference task](run-inference-task.md).


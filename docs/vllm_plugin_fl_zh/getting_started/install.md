# 安装运行推理任务所需的软件

您可以从 [FlagOS 主页面](https://flagos.io/Home?spm=5176.28103460.0.0.69662988ZUbtpg) 下载受支持硬件的 Docker 镜像。点击 **Download** 按钮，使用 `docker pull` 命令拉取镜像，然后使用 `docker run` 和 `docker exec` 命令启动容器并进入容器。

## 从源代码安装

本节介绍从源代码安装 vllm-plugin-FL 及其依赖项。

### 版本兼容性

请选择与 vLLM 版本匹配的分支，分支与 vLLM 版本必须成对使用：

| vllm-plugin-FL 分支 | 社区 vLLM 版本 |
|-----------------------|------------------------|
| `release/0.2` | [v0.20.2](https://github.com/vllm-project/vllm/tree/v0.20.2) |
| `main` | [v0.24.0](https://github.com/vllm-project/vllm/tree/v0.24.0) |

1. 安装 vLLM

    对于 **NVIDIA** GPU，从官方 [v0.24.0](https://github.com/vllm-project/vllm/tree/v0.24.0) 版本安装 vLLM（如果已安装正确版本则可选）：

    ```{code-block} shell
    pip install vllm==0.24.0
    ```

    对于 **非 NVIDIA** 芯片，使用 `empty` 设备目标从源码安装 vLLM：

    ```{code-block} shell
    git clone -b v0.24.0 https://github.com/vllm-project/vllm.git
    cd vllm
    VLLM_TARGET_DEVICE=empty pip install -v --no-build-isolation --no-deps .
    ```

2. 安装 vllm-plugin-FL

    2.1 克隆仓库：

    ```{code-block} shell
    git clone https://github.com/flagos-ai/vllm-plugin-FL
    ```

    2.2 安装

    默认情况下，vllm-plugin-FL 以纯 Python 包形式安装：

    ```{code-block} shell
    cd vllm-plugin-FL
    pip install --no-build-isolation .
    # 或可编辑安装
    pip install --no-build-isolation -e .
    ```

    对于 CUDA 类设备（包括使用 PyTorch CUDA dispatch key 的 CUDA 与 HIP/ROCm 环境），安装时设置 `VLLM_VENDOR=cuda` 以编译并安装插件原生扩展：

    ```{code-block} shell
    VLLM_VENDOR=cuda pip install --no-build-isolation .
    # 或可编辑安装
    VLLM_VENDOR=cuda pip install --no-build-isolation -e .
    ```

    该步骤会构建并安装 `vllm_fl._C`，为部分 graph/自定义算子路径提供原生 C++ 支持，尤其适用于以 `VLLM_TARGET_DEVICE=empty` 安装 vLLM 的场景。若不设置 `VLLM_VENDOR`，vllm-plugin-FL 将以纯 Python 插件形式安装，跳过原生扩展。

4. 安装 [FlagGems](https://flagos-ai.github.io/FlagGems/getting-started/install/)

    4.1 安装构建依赖

    ```{code-block} shell
    pip install -U scikit-build-core==0.11 pybind11 ninja cmake
    ```

    4.2 安装 FlagGems

    ```{code-block} shell
    git clone -b v5.3.4 https://github.com/flagos-ai/FlagGems
    cd FlagGems
    pip install --no-build-isolation .
    # 或可编辑安装
    pip install --no-build-isolation -e .
    ```

    ```{note}
    在 Sunrise 平台上，依赖 FlagGems [PR #2949](https://github.com/flagos-ai/FlagGems/pull/2949)。
    在 Hygon 平台上，依赖 FlagGems [PR #3477](https://github.com/flagos-ai/FlagGems/pull/3477)。
    ```

5. （可选）安装 [FlagCX](https://github.com/flagos-ai/FlagCX/blob/main/docs/getting_started.md#build-and-installation)

    5.1 克隆仓库：

    ```{code-block} shell
    git clone -b v0.13.0 https://github.com/flagos-ai/FlagCX.git
    cd FlagCX
    git submodule update --init --recursive
    ```

    5.2 使用不同标志构建库以适配不同平台：

    ```{code-block} shell
    make USE_NVIDIA=1
    ```

    5.3 设置环境变量

    ```{code-block} shell
    export FLAGCX_PATH="$PWD"
    ```

    5.4 安装 FlagCX

    ```{code-block} shell
    cd plugin/torch/
    FLAGCX_ADAPTOR=[xxx] pip install . --no-build-isolation
    # 或可编辑安装
    FLAGCX_ADAPTOR=[xxx] pip install -e . --no-build-isolation
    ```

    ```{note}
    [xxx] 应根据当前平台选择，例如 nvidia、ascend 等。
    ```

如果当前环境中有多个插件，可以通过 VLLM_PLUGINS='fl' 指定使用 vllm-plugin-fl。

### 华为 Ascend 额外设置

1. 安装 [FlagTree](https://resource.flagos.net)

    ```{code-block} shell
    RES="--index-url=https://resource.flagos.net/repository/flagos-pypi-hosted/simple --trusted-host=https://resource.flagos.net"
    python3 -m pip install flagtree==0.6.1rc1+ascend3.5 $RES
    ```

    其他芯片请使用对应的 FlagTree 构建（例如 `flagtree==0.6.1+iluvatar3.6`、`flagtree==0.6.1+metax3.6`）。

2. 设置必需的环境变量

    ```{code-block} shell
    export TRITON_ALL_BLOCKS_PARALLEL=1
    ```

3. 启用 eager 执行

    Ascend 需要 eager 执行。在 `LLM` 构造函数中添加 `enforce_eager=True` 或在命令行中传递 `--enforce-eager`。

### （可选）CUDA 额外设置

本节说明如何通过设置环境变量使用 CUDA 运行推理任务。

算子调度环境变量请参见 [环境变量](../dispatch_user_guide/configure-backend-selection.md/#environment-variables)。

#### 使用 CUDA 通信库

本节演示如何通过设置环境变量使用 CUDA 运行推理任务。

```{code-block} shell
unset FLAGCX_PATH
```

#### 使用原生 CUDA 算子

如果您想使用原始的 CUDA 算子，可以设置以下环境变量。

```{code-block} shell
export USE_FLAGGEMS=0
```

## 从 Docker 镜像安装

本节介绍使用预构建的 Docker 镜像运行 vllm-plugin-FL。

### docker run 与 docker exec 通用写法

FlagOS 发版镜像的 tag 布局是统一的：

```{code-block} shell
IMG=<registry>/<repository>/vllm<vLLM 版本>-<厂商>-<厂商 SDK>:<FlagOS 版本>-<plugin 分支>_g<commit>.d<构建日期>
```

例如：

```{code-block} shell
IMG=harbor.baai.ac.cn/flagos-app/vllm0.24.0-hygon-dtk26.04:2.1.2-0.3.0rc2.post1_gc9bbcf0.d20260914
```

其中 `vLLM 版本` 与 `plugin 分支` 必须相互匹配（vLLM 0.24.0 配 plugin 0.3.0，vLLM 0.20.2 配 plugin 0.2.2）；`g<commit>` 与 `d<构建日期>` 标识构建版本。厂商测试手册中也可能不定义 `IMG=` 而直接写镜像全路径，参数含义相同。

容器统一先用 `docker run` 创建，再用 `docker exec` 进入：

```{code-block} shell
docker run -itd \
  --name <厂商>-vllm-<版本> \
  --network host --ipc host \
  --shm-size <64g|128g|512g> \
  <设备直通，见下表> \
  -e <VENDOR>_VISIBLE_DEVICES=all \
  -v <模型目录>:/models \
  -v <厂商运行时目录>:<厂商运行时目录> \
  $IMG <bash|sleep infinity>

docker exec -it <厂商>-vllm-<版本> bash
```

真正因厂商而异的只有设备直通，按平台选择其中一种：

| 厂商 | 设备直通 |
|--------|--------------------|
| NVIDIA | `--gpus all` |
| 天数智芯、燧原、清微智能、昆仑芯 | `--privileged`（天数智芯另挂 `/dev`、`/lib/modules`、`/sys`） |
| 摩尔线程 | `--privileged --runtime=mthreads` |
| 海光 DCU | `--device /dev/kfd --device /dev/mkfd --device /dev/dri --group-add video` |
| 昇腾 | `--device /dev/davinci0..N --device /dev/davinci_manager --device /dev/devmm_svm --device /dev/hisi_hdc` |
| 沐曦 MetaX | `--device /dev/mxcd --device /dev/dri` |
| 阿里 PPU、T-Head PPU | `--device /dev/alixpu --device /dev/alixpu_ctl --device /dev/alixpu_ppu{0..15}` |

各厂商共同遵循的约定：

- `--network host`（`--net host`）各厂商都有，`--ipc host` 多数都有；`--shm-size` 视平台从 `64g` 到 `512g` 不等。
- `-v <模型目录>:/models` 暴露模型权重；`-v <厂商运行时目录>:<同路径>` 挂载宿主机驱动（例如海光的 `/opt/hyhal`、天数智芯的 `/usr/local/corex-*`）。
- 容器名统一为 `<厂商>-vllm-<版本>`，可加 `-plugin-<分支>` 后缀（例如 `hygon-vllm-024-plugin-030`）。`docker exec` 使用的容器名必须与 `docker run` 的 `--name` 完全一致。
- `$IMG` 之后的命令决定容器如何保持运行：交互式容器用 `bash`，后台容器用 `sleep infinity`（或 `tail -f /dev/null`）。两种情况都在创建后用 `docker exec -it <容器名> bash` 进入。

示例，使用上述镜像的海光 DCU：

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

| 平台 | 镜像 | 内容 |
|----------|-------|----------|
| 阿里 PPU | `egslingjun-registry.cn-wulanchabu.cr.aliyuncs.com/egslingjun/inference-xpu-pytorch:26.04-v2.1.0-vllm0.19.0-torch2.10-cu130-20260508` | PPU SDK 2.0.0-715aa1、torch 2.10.0、vLLM 0.19.0（指南中替换为 `empty` 0.24.0 源码编译版） |
| 摩尔线程 MTT S5000 | `harbor.baai.ac.cn/flagrelease-public/flagrelease_mthreads-gmi_vllm024plugin_base:08281629` | 用于 vLLM 0.24.0 + plugin 0.3.0 栈的 MUSA 基础镜像 |
| 摩尔线程 MTT S5000 | `harbor.baai.ac.cn/plugin/musa-ph1.4.3.5-tree0.6.1a2-triton3.6.0-cxnone-plugin0.3.0-vllm0.24.0-cp310-pt290-x64:20260804` | 全栈：MUSA PH 1.4.3.5、FlagTree 0.6.1a2（Triton 3.6.0）、plugin 0.3.0、vLLM 0.24.0、Python 3.10、torch 2.9.0 |
| 天数智芯 BI-V150 | `harbor.baai.ac.cn/plugin/iluvatar-corex4.5.0-flagtree0.6.0-triton3.6.0-cxnone-vllm_fl0.24.0:20260827` | corex 4.5.0、FlagTree 0.6.0（Triton 3.6.0）、面向 vLLM 0.24.0 的 vllm_fl |
| 清微智能 TX8110 | `harbor.baai.ac.cn/plugin/tsingmicro001-gems4.2.1-treenone-triton3.6.0-cx0.1.0-plugin0.2.0-vllm0.20.2-cp310-pt211-x64-v260604163331.01:202607130736` | FlagGems 4.2.1、Triton 3.6.0、FlagCX 0.1.0、plugin 0.2.0、vLLM 0.20.2、Python 3.10、torch 2.11.0 |
| 燧原 ZIXIAOC200 | `harbor.baai.ac.cn/plugin/enflame001-gems5.3.1-treenone-triton3.6.0-cxnone-plugin0.2.1-vllm0.20.2-cp312-pt211-x64-1.10.6:202608281710` | FlagGems 5.3.1、Triton 3.6.0、plugin 0.2.1、vLLM 0.20.2、Python 3.12、torch 2.11.0 |
| 曦望 Sunrise S2 | `harbor.baai.ac.cn/plugin/sunrise001-gems5.3.4-tree0.6.0_sunrise3.6-cx0.13.0-plugin0.2.1-vllm0.20.2_flagos-cp310-pt211-x64-v0.25.0:202608311648` | FlagGems 5.3.4、FlagTree 0.6.0（sunrise 3.6）、FlagCX 0.13.0、plugin 0.2.1、vLLM 0.20.2+flagos、Python 3.10、torch 2.11.0 |
| 昆仑芯 P800 | `harbor.baai.ac.cn/flagos-app/vllm0.20.2-kunlunxin-xre5.37.1:2.1.2-0.2.1_g8236c0a.d20260821` | 用于 vLLM 0.20.2 + plugin 0.2.0-rc0 源码编译的 xre 5.37.1 运行时基础镜像 |
| 海光 DCU | `harbor.sourcefind.cn:5443/dcu/admin/base/custom:vllm0.20.0-ubuntu22.04-dtk26.04-py3.10-MiniCPM-V-4.6` | 用于 0.20.2/0.24.0 `empty` 源码编译的 DTK 26.04 基础镜像（含海光 vLLM 0.20.0 构建） |
| 沐曦 MetaX C550 | `cr.metax-tech.com/public-ai-release/maca/vllm-metax:0.20.0-maca.ai3.7.0.107-torch2.8-py312-ubuntu22.04-amd64` | MACA 3.7.0 镜像、torch 2.8.0+metax、Python 3.12；镜像内 vLLM 会被 `empty` 0.24.0 源码编译版替换 |
| 昇腾 Ascend 910c | `quay.io/ascend/vllm-ascend:v0.20.2rc1-a3` | 用于 0.20.2 `empty` 源码编译的 CANN 9.0.0 昇腾镜像 |

沐曦与海光需要设备直通而非 `--gpus all`，例如沐曦：

```{code-block} shell
docker run -d \
  --name metax-vllm-024-plugin-030 \
  --network host --ipc host --shm-size 64g \
  --device /dev/dri:/dev/dri:rwm \
  --device /dev/mxcd:/dev/mxcd:rwm \
  -v /data/models:/models \
  cr.metax-tech.com/public-ai-release/maca/vllm-metax:0.20.0-maca.ai3.7.0.107-torch2.8-py312-ubuntu22.04-amd64 \
  sleep infinity
```

```{note}
这些镜像自带厂商运行时与基础 vLLM 构建。要运行 FlagOS 2.2 发布候选版，请按[从源代码安装](#从源代码安装)将 vLLM 替换为 `empty` v0.24.0 源码编译版并安装 vllm-plugin-FL v0.3.0。各厂商完整命令序列（代理设置、FlagGems flash attention 修复、FlagTree backend 选择、autotune 预热）请参见 FlagOS 资源下载页链接的厂商测试手册。
```

### SVT 全栈测试镜像（v0.2.0-rc2）

预构建的 SVT 全栈测试镜像：

| 平台 | 镜像 | 内容 |
|----------|-------|----------|
| NVIDIA GPU | `harbor.baai.ac.cn/flagos21-release/vllm-plugin-fl:v0.2.0-rc2-nvidia-svt` | vllm 0.20.2, FlagGems 5.3.0-rc2.post1, FlagTree 3.6.0, vllm-plugin-FL 0.2.0-rc2.post1, torch 2.11.0+cu130 |
| 海光 DCU | `harbor.baai.ac.cn/flagos21-release/vllm-plugin-fl:v0.2.0-rc2-hygon-svt` | vllm 0.20.0, FlagGems 5.3.0-rc2.post1, FlagTree 0.5.0-rc2.post1+hcu, vllm-plugin-FL 0.2.0-rc2.post1, torch 2.10.0+das |

```bash
# NVIDIA SVT
docker pull harbor.baai.ac.cn/flagos21-release/vllm-plugin-fl:v0.2.0-rc2-nvidia-svt

# 海光 DCU SVT
docker pull harbor.baai.ac.cn/flagos21-release/vllm-plugin-fl:v0.2.0-rc2-hygon-svt
```

### Hygon DCU

适用于 vllm-plugin-FL v0.2.0（vLLM 0.20.0）。

1. 拉取并启动 Hygon DCU Docker 容器：

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

    将 `/path/to/models` 替换为实际的模型存储路径。

2. 在容器内安装 FlagGems：

    ```{code-block} shell
    git clone https://github.com/flagos-ai/FlagGems
    cd FlagGems
    git checkout 2718037d887cd6a3143474da0224648e40c5004f
    pip install --no-build-isolation -e .
    ```

3. 安装 vllm-plugin-FL：

    ```{code-block} shell
    git clone https://github.com/flagos-ai/vllm-plugin-FL
    cd vllm-plugin-FL
    git checkout 48af29e21491700a38020ab031af5d3b90e6795e
    pip install --no-build-isolation -e .
    ```

4. 下载模型：

    ```{code-block} shell
    modelscope download --model Qwen/Qwen3.6-27B --local_dir /models/Qwen3.6-27B
    modelscope download --model Qwen/Qwen3.6-35B-A3B --local_dir /models/Qwen3.6-35B-A3B
    ```

### NVIDIA

适用于 vllm-plugin-FL v0.2.0（vLLM 0.20.2）。

1. 拉取并启动 NVIDIA Docker 容器：

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

    将 `/path/to/models` 替换为实际的模型存储路径。

2. 在容器内安装依赖：

    ```{code-block} shell
    apt-get update
    apt install git
    apt install vim
    pip install -U scikit-build-core==0.11 pybind11 ninja cmake
    ```

3. 安装 vllm：

    ```{code-block} shell
    pip install vllm==0.20.2
    ```

4. 安装 FlagGems：

    ```{code-block} shell
    git clone https://github.com/flagos-ai/FlagGems
    cd FlagGems
    git checkout 1dab11ab1a6671e3132528492d2cc193e78af8f4
    pip install --no-build-isolation .
    ```

5. 安装 vllm-plugin-FL：

    ```{code-block} shell
    git clone https://github.com/flagos-ai/vllm-plugin-FL
    cd vllm-plugin-FL
    git checkout 48af29e21491700a38020ab031af5d3b90e6795e
    pip install --no-build-isolation .
    ```

6. 下载模型：

    ```{code-block} shell
    modelscope download --model Qwen/Qwen3.6-27B --local_dir /models/Qwen3.6-27B
    modelscope download --model Qwen/Qwen3.6-35B-A3B --local_dir /models/Qwen3.6-35B-A3B
    ```

### 华为 Ascend

适用于 vllm-plugin-FL v0.1.0（vLLM 0.13.0）。

1. 拉取并启动 Ascend Docker 容器：

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

    将 `/path/to/models` 替换为实际的模型存储路径。

2. 在容器内安装 FlagGems：

    ```{code-block} shell
    pip install -U scikit-build-core==0.11 pybind11 ninja cmake
    git clone https://github.com/flagos-ai/FlagGems
    cd FlagGems
    git checkout 6f2585dc9c48d440d856ad75f4aedee66fac365a
    pip install --no-build-isolation -e .
    ```

3. 安装 FlagTree：

    ```{code-block} shell
    RES="--index-url=https://resource.flagos.net/repository/flagos-pypi-hosted/simple --trusted-host=https://resource.flagos.net"
    python3 -m pip install flagtree==0.4.0+ascend3.2 $RES
    ```

4. 安装 vllm-plugin-FL：

    ```{code-block} shell
    git clone https://github.com/flagos-ai/vllm-plugin-FL
    cd vllm-plugin-FL
    git checkout ba008211c1c9646e19290e832a7f7775f7d2944f
    pip install --no-build-isolation -e .
    ```

5. 设置环境变量并启动服务：

    ```{code-block} shell
    export VLLM_PLUGINS=fl
    export TRITON_ALL_BLOCKS_PARALLEL=1
    vllm serve --model /models/Qwen3-4B --served-model-name qwen --enforce-eager
    ```

    ```{note}
    Ascend 需要 eager 执行。在 `LLM` 构造函数中添加 `enforce_eager=True` 或在命令行中传递 `--enforce-eager`。
    ```

### Iluvatar BI-V150

适用于 vllm-plugin-FL v0.1.0（vLLM 0.13.0）。

1. 加载并启动 Corex Docker 容器：

    ```{code-block} shell
    docker load -i /mnt/share/images/corex.4.4.0.release.0211.vllm.013.flagos.tar

    docker run --shm-size="32g" -itd \
      -v /dev:/dev -v /usr/src/:/usr/src \
      -v /lib/modules/:/lib/modules \
      -v /mnt/share/user_homes/:/mnt/share/user_homes/ \
      --privileged --cap-add=ALL --pid=host --net=host \
      --name flagos_v2 corex:4.4.0.release.0211.vllm.013.flagos /bin/bash
    ```

2. 在容器内安装 FlagGems：

    ```{code-block} shell
    pip install -U scikit-build-core==0.11 pybind11 ninja cmake
    git clone https://github.com/flagos-ai/FlagGems
    cd FlagGems
    git checkout 6f2585dc9c48d440d856ad75f4aedee66fac365a
    pip install --no-build-isolation -e .
    cd ../
    ```

3. 安装 vllm-plugin-FL：

    ```{code-block} shell
    git clone https://github.com/flagos-ai/vllm-plugin-FL.git
    cd vllm-plugin-FL
    git checkout f11a0f4707aecae245ec81289329b208ede5b06d
    pip install --no-build-isolation -e . --no-deps
    cd ../
    ```

4. 启动服务：

    ```{code-block} shell
    export VLLM_PLUGINS=fl
    export VLLM_ENGINE_ITERATION_TIMEOUT_S=36000
    export VLLM_RPC_TIMEOUT=36000000
    vllm serve /mnt/share/user_homes/zyp/Qwen3-4B/ --served-model-name qwen --enforce-eager
    ```

    ```{note}
    首次启动大约需要 15 分钟。后续启动不到 2 分钟。
    ```

以上步骤提供了在 BV150 上运行 Qwen3-4B 的最小设置。如果您需要完整的 FlagOS 技术栈（含 FlagTree、FlagGems 使用模式、环境验证和故障排除），或者您是首次设置 BV150，请参见完整的端到端指南：[Qwen2.5-1.5B on Iluvatar BI-V150](example-qwen2.5-bv150.md)。

## （可选）调度算子

如果需要，您也可以调度算子。

概念相关信息请参见 [vllm-plugin-FL 概览](../overview/overview.md)。
配置相关信息请参见 [算子调度用户指南](../dispatch_user_guide/dispatch-user-guide.md)。

安装和可选的算子调度配置完成后，您可以继续[运行推理任务](run-inference-task.md)。

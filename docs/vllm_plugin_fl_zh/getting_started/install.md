# 安装运行推理任务所需的软件

## 从 Docker 镜像安装

vllm-plugin-FL 通过预构建的 Docker 镜像安装。请先拉取并启动镜像，再在容器内安装各组件。受支持的版本与硬件平台见[要求](requirements.md)。

1. 拉取并启动镜像

打开 [FlagOS 主页面](https://flagos.io/Home)，点击页面正中间的 **Download**，选择与你的硬件对应的镜像，页面会给出该镜像的 `docker pull` 命令。

```{code-block} shell
docker pull <镜像>

docker run -itd \
  --name <容器名> \
  --network host --ipc host \
  --shm-size <共享内存> \
  <设备直通，见下表> \
  -v <模型目录>:/models \
  <镜像> sleep infinity
```

`docker run` 创建容器并在当前终端运行，请保持该终端不关闭；另开一个终端进入已运行的容器：

```{code-block} shell
docker exec -it <容器名> bash
```

`docker exec` 使用的容器名要与 `docker run` 的 `--name` 一致（`<厂商>-vllm-<版本>`，可加 `-plugin-<分支>` 后缀）。各后端只有下列参数不同；`—` 表示厂商手册未设置该参数。

| 后端 | 设备直通 | 额外挂载 | 共享内存 | 环境变量 |
|---------|--------------------|--------------|---------------|-----------------------|
| NVIDIA | `--gpus all` | — | `512g` | — |
| 海光 DCU | `--device /dev/kfd --device /dev/mkfd --device /dev/dri --group-add video` | `/opt/hyhal:/opt/hyhal` | — | `-e DCU_VISIBLE_DEVICES=all` |
| 天数智芯 | `--privileged` | `/dev:/dev`、`/usr/src:/usr/src`、`/lib/modules:/lib/modules` | `32g` | — |
| 燧原、清微智能、曦望 | `--privileged` | — | — | `-e ENFLAME_VISIBLE_DEVICES=0`（仅燧原） |
| 昆仑芯 | `--privileged` | — | `128G` | — |
| 摩尔线程 | `--privileged --runtime=mthreads` | — | `64g` | `-e MTHREADS_VISIBLE_DEVICES=all` |
| 昇腾 | `--device /dev/davinci0..N --device /dev/davinci_manager --device /dev/devmm_svm --device /dev/hisi_hdc` | `/usr/local/dcmi:/usr/local/dcmi`、`/usr/local/bin/npu-smi:/usr/local/bin/npu-smi`、`/usr/local/Ascend/driver:/usr/local/Ascend/driver` | `512g` | — |
| 沐曦 MetaX | `--device /dev/mxcd --device /dev/dri` | — | `100gb` | — |
| 阿里 PPU、T-Head PPU | `--device /dev/alixpu --device /dev/alixpu_ctl --device /dev/alixpu_ppu{0..15}` | — | — | — |

```{note}
以上镜像自带厂商运行时与基础 vLLM 构建。要运行 FlagOS 2.2 发布版，请按下文第 2 步将 vLLM 替换为 `empty` v0.24.0 源码编译版并安装 vllm-plugin-FL v0.3.0。各厂商完整命令序列（代理设置、FlagGems flash attention 修复、FlagTree backend 选择、autotune 预热）请参见厂商测试手册。
```

2. 在容器内安装各组件

请选择与 vLLM 版本匹配的分支，分支与 vLLM 版本必须成对使用：

| vllm-plugin-FL 分支 | 社区 vLLM 版本 |
|-----------------------|------------------------|
| `release/0.2` | [v0.20.2](https://github.com/vllm-project/vllm/tree/v0.20.2) |
| `main` | [v0.24.0](https://github.com/vllm-project/vllm/tree/v0.24.0) |

2.1 安装 vLLM

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

2.2 安装 vllm-plugin-FL

    克隆仓库，分支需与 vLLM 版本匹配（见[版本兼容性](#版本兼容性)）：

    ```{code-block} shell
    git clone -b main https://github.com/flagos-ai/vllm-plugin-FL
    cd vllm-plugin-FL
    # 若使用 vLLM 0.20.2，请改用：git clone -b release/0.2 https://github.com/flagos-ai/vllm-plugin-FL
    ```

    安装。默认情况下，vllm-plugin-FL 以纯 Python 包形式安装：

    ```{code-block} shell
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

2.3 安装 [FlagGems](https://flagos-ai.github.io/FlagGems/getting-started/install/)

    安装构建依赖

    ```{code-block} shell
    pip install -U scikit-build-core==0.11 pybind11 ninja cmake
    ```

    安装 FlagGems：

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

2.4 （可选）安装 [FlagCX](https://github.com/flagos-ai/FlagCX/blob/main/docs/getting_started.md#build-and-installation)

    克隆仓库：

    ```{code-block} shell
    git clone -b v0.13.0 https://github.com/flagos-ai/FlagCX.git
    cd FlagCX
    git submodule update --init --recursive
    ```

    使用不同标志构建库以适配不同平台：

    ```{code-block} shell
    make USE_NVIDIA=1
    ```

    设置环境变量：

    ```{code-block} shell
    export FLAGCX_PATH="$PWD"
    ```

    安装 FlagCX：

    ```{code-block} shell
    cd plugin/torch/
    FLAGCX_ADAPTOR=[xxx] pip install . --no-build-isolation
    # 或可编辑安装
    FLAGCX_ADAPTOR=[xxx] pip install -e . --no-build-isolation
    ```

    ```{note}
    [xxx] 应根据当前平台选择，例如 nvidia、ascend 等。
    ```

如果当前环境中有多个插件，可以通过 VLLM_PLUGINS='fl' 选择使用 vllm-plugin-fl。

### 华为 Ascend 额外设置

1. 安装 [FlagTree](https://resource.flagos.net)

    ```{code-block} shell
    RES="--index-url=https://resource.flagos.net/repository/flagos-pypi-hosted/simple --trusted-host=https://resource.flagos.net"
    python3 -m pip install flagtree==0.6.1+ascend3.5 $RES
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

```{code-block} shell
unset FLAGCX_PATH
```

#### 使用原生 CUDA 算子

如果您想使用原始的 CUDA 算子，可以设置以下环境变量。

```{code-block} shell
export USE_FLAGGEMS=0
```

3. （可选）调度算子

如果需要，您也可以调度算子。

概念相关信息请参见 [vllm-plugin-FL 概览](../overview/overview.md)。
配置相关信息请参见 [算子调度用户指南](../dispatch_user_guide/dispatch-user-guide.md)。

安装和可选的算子调度配置完成后，您可以继续[运行推理任务](run-inference-task.md)。

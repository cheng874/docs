# 概览

FlagPrism 集中维护 FlagTree 的可选调试与性能分析组件，目前处于活跃开发中。

## 组件

- **Debugger**（`Debugger/`）—— `flagtree.debugger` 的 Python 与 native 实现。它将编译期静态 metadata 与 device 运行期记录关联，导出 Triton 语句级报告、IR op 级报告和 level-2 NumPy artifact，用于观察 Triton kernel 内部数值、访存和 op 执行状态。
- **Profiler**（`Profiler/`）—— `flagtree.profiler` 的 Python 包、native 运行时与 CLI。轻量级 Triton 性能分析器，提供被调用 GPU kernel 的程序上下文、metadata 和硬件性能指标。
- **`cmake/FlagPrism.cmake`** —— 两个组件统一的 CMake 构建策略与 target 集成。
- **`python/flagprism_build.py`** —— 统一 wheel 的包、CLI 与 CMake 参数策略。

## 与 FlagTree 的关系

FlagTree 将 FlagPrism 作为 `third_party/FlagPrism` 子模块消费。`flagtree-debugger` 和 `flagtree-profiler` 不再单独发布 wheel。在 FlagTree 仓库运行 `pip wheel .` 会在同一个 CMake graph 中构建 core、Debugger 和 Profiler，并打包进单个 FlagTree wheel：

- Debugger 源码安装为 `flagtree.debugger`。
- `Profiler/python/flagtree_profiler` 安装为 `flagtree.profiler`。
- 两个组件的 `_native` 扩展都放入同一个 wheel。

Debugger 编译器插件链接进 `libtriton`；其运行时传输与解码接口位于独立的 `flagtree.debugger._native` 扩展，不链接 `libtriton`。

## 构建模式

Python wheel 仅支持两种构建模式：

1. **联合构建（默认）** —— Debugger 与 Profiler 一起构建（`TRITON_BUILD_FLAGPRISM=ON`）。
2. **core-only 构建** —— `TRITON_BUILD_FLAGPRISM=OFF`，不包含任一工具包。

两个组件不能单独启用或禁用，`TRITON_BUILD_FLAGPRISM` 是唯一的组件开关。可用 `FLAGPRISM_BACKEND` 选择厂商后端（例如 `tianshu`）。

## 支持的后端

- **Debugger** 动态采集与 hidden-argument launch 路径已在昇腾/CANN9 与天数/CoreX 4.4（LLVM 22）验证。
- **Profiler** 支持 `cupti`（NVIDIA）、`roctracer`（AMD）、`instrumentation`（NVIDIA/AMD）、`cann`（昇腾）、`tianshu`（天数/CoreX）后端。
- 在昇腾上，默认 `backend="cann", hook="triton"` 的 IR 采集路径复用 Debugger instrumentation 运行时，因此两个工具作为一个套件一起构建和分发。
- 天数/CoreX 使用 `backend="tianshu"`；其进程内 Debugger 运行时使用 CUDA 兼容的 CoreX 驱动接口，ixKN 厂商指标通过外部 `ixkn-cli` 包装器采集并从 CSV 导入。

## 状态

FlagPrism 正在建设中、活跃开发，目前尚无 tag release，由 FlagTree 子模块直接消费。

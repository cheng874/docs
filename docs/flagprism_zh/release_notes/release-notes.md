# 发布说明

## 未发布（FlagOS 2.2 开发中）

FlagPrism 是 FlagTree 可选调试与性能分析工具套件的新归属，由 FEP-0068（FlagTree DevTools）追踪。仓库于 2026-08-04 创建，目前处于活跃开发中，尚无 tag release，由 FlagTree 作为 `third_party/FlagPrism` 子模块消费。

- **统一工具套件** —— 集中维护 `flagtree.debugger` 与 `flagtree.profiler`，通过同一个 CMake graph 一起构建进单个 FlagTree wheel。不再单独发布 `flagtree-debugger`/`flagtree-profiler` wheel。
- **Debugger** —— 编译期 metadata 与 device 运行期记录关联；导出 Triton 语句级报告、IR op 级报告和 level-2 NumPy artifact。公开 API 为 `flagtree.debugger` 加 kernel 内 `ftl.debug_collect_start/end` marker。动态采集与 hidden-argument launch 已在昇腾/CANN9 与天数/CoreX 4.4（LLVM 22）验证。
- **Profiler** —— 轻量级 Triton 性能分析器，支持函数/区域分析、`shadow`/`python` 上下文、自定义 scope 指标、五个后端（`cupti`、`roctracer`、`instrumentation`、`cann`、`tianshu`）、CLI 工具（`flagtree-profiler`、`flagtree-profiler-viewer`）和 Hatchet 兼容的 JSON 输出。
- **构建模式** —— 联合 Debugger+Profiler 构建（`TRITON_BUILD_FLAGPRISM=ON`，默认）或 core-only（`OFF`）；两者不能单独启用。厂商后端选择器 `FLAGPRISM_BACKEND`（如 `tianshu`）。
- **厂商适配** —— 文档化的 `VendorAdapter`/`Profiler`/`VendorMetricsImporter` 接口，以及新厂商 Debugger 隐藏参数/调试记录写入需求。
- **测试** —— C++ 单元测试、lit/FileCheck MLIR 测试、Python 测试（含昇腾套件）和运行时 smoke/异步循环测试。

### FlagOS 2.2 状态

FlagPrism 正在建设中。FEP-0068 处于 Implementable 阶段；仓库现已存在，Debugger 与 Profiler 正在活跃开发，但尚未发布任何 release tag，完整多后端支持仍在完善中。最新后端验证状态以仓库为准。

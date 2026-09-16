# FlagTree 0.7.0 发布

```{note}
本版本面向 FlagOS 2.2（计划 GA 日期 2026-09-28）。以下条目反映已纳入 2.2 的 FEP 范围。实现尚未合入的特性标注为“进行中”，将在特性冻结（2026-08-31）前随对应 PR 合入而更新。
```

- **新增特性**
  - TLE-Struct：
    - **GPU 缓冲区别名（buffer aliasing）** —— 通过 `tle.gpu.alloc(..., alias=...)` 提供带类型的共享内存视图，并对别名视图进行静态校验。面向 FlagOS 2.2（FEP-0065）。**进行中** —— 实现正在 FlagTree 仓库中追踪。
    - **布局控制（layout control）** —— 新增 `tle.gpu.set_layout`，用于显式分布式布局赋值。面向 FlagOS 2.2（FEP-0065）。**进行中**。

- **DevTools（调试器与性能分析器）—— 进行中**
  - **FlagTree DevTools** —— 由 FEP-0068 提出（目标 FlagOS 2.2）。专用仓库已创建为 [flagos-ai/FlagPrism](https://github.com/flagos-ai/FlagPrism)（2026-08-04 建仓，MIT），集中维护 `flagtree.debugger` 与 `flagtree.profiler`，由 FlagTree 作为 `third_party/FlagPrism` 子模块消费。FEP 追踪 issue（community#76）仍将 Owner 指定以及 FlagTree 侧前置项（`triton.debugger`/`triton.profiler` facade、可选组件注册、compiler/runtime hooks）列为未完成项。FlagPrism 正处于活跃开发中，尚无 tag release；当前状态见 [FlagPrism 仓库](https://github.com/flagos-ai/FlagPrism)。

- **打包**
  - Wave 1 统一打包集成（FEP-0019）：Debian `.deb` 与 RPM `.rpm` 包发布至 FlagOS Nexus 仓库。**已在 FlagTree#607 合入**。

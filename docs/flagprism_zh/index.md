# FlagPrism

FlagPrism 是 [FlagTree](https://github.com/flagos-ai/FlagTree) 的可选调试与性能分析工具套件，集中维护 `flagtree.debugger` 与 `flagtree.profiler` 两个组件。

```{grid} 1 1 2 2
:gutter: 2

:::{grid-item-card} 概览
:link: overview/overview
:link-type: doc

FlagPrism 是什么、与 FlagTree 的关系、整体架构。
:::

:::{grid-item-card} 快速开始
:link: getting_started/install
:link-type: doc

将 FlagPrism 作为 FlagTree wheel 的一部分构建安装。
:::

:::{grid-item-card} Debugger
:link: user_guide/debugger
:link-type: doc

观察 kernel 内部数值、访存与 op 执行。
:::

:::{grid-item-card} Profiler
:link: user_guide/profiler
:link-type: doc

对 Triton kernel 进行上下文、元数据和硬件指标分析。
:::
```

## 项目链接

- **仓库**：[flagos-ai/FlagPrism](https://github.com/flagos-ai/FlagPrism)
- **FlagTree**：[flagos-ai/FlagTree](https://github.com/flagos-ai/FlagTree)
- **许可证**：MIT License

```{toctree}
:maxdepth: 2
:hidden:

overview/overview
getting_started/install
user_guide/debugger
user_guide/profiler
user_guide/vendor-adaptation
references/reference
release_notes/release-notes
```

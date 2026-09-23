# FlagTree 0.7.0 发布

- **新增特性**
  - 3.6.x 分支：
    - TLE-Lite：
      - 新增 `tle.shard_id` 操作，用于查询当前 program 在 device mesh 指定轴上的坐标。在 NVIDIA 上支持。
      - 新增以下分布式操作：`tle.signal` 和 `tle.signal_wait`。在 NVIDIA 上支持。
      - 为 `tle.remote` 扩展 `space`（cluster / device / node）、`dtype`、`offset`、`coopkind` 和 `netidx` 参数，覆盖线程块 cluster 内（DSMEM）、节点内 GPU 之间（NVLink P2P）以及跨节点（FlagCX/RDMA）的远程访问。在 NVIDIA 上支持。
      - 为 `tle.distributed_barrier` 扩展 `space`、`group_kind`、`barrier_kind` 和 `order` 参数。在 NVIDIA 上支持。
    - TLE-Struct：
      - 通过 `tle.gpu.alloc(..., alias=...)` 新增 GPU 缓冲区别名（buffer aliasing），提供带类型的共享内存视图，并对别名视图进行静态校验。（FEP-0065）
      - 新增 `tle.gpu.set_layout` 操作，用于显式分布式布局赋值，并提供 `BlockEncoding`、`MmaEncoding`、`DotOperandEncoding` 和 `SlicedEncoding` 布局对象。（FEP-0065）
      - 新增以下 barrier 操作：`tle.gpu.alloc_barrier`、`tle.gpu.alloc_barriers`、`tle.gpu.barrier_wait` 和 `tle.gpu.barrier_arrive`；为 `tle.gpu.copy` 新增 `barrier` 和 `mask` 参数。在 NVIDIA 上支持。
      - 新增 `tle.gpu.wgmma` 和 `tle.gpu.wgmma_wait` 操作。在 NVIDIA 上支持。
      - 新增 `tle.gpu.buffered_tensor.slot` 和 `tle.gpu.buffered_tensor.reshape` 操作。在 NVIDIA 上支持。
      - 为 `tle.gpu.alloc` 新增 `init_value` 和 `alias_offset_bytes` 参数。在 NVIDIA 上支持。
    - TLE-Raw：
      - 新增 `library` 与 `compiler` 参数，支持通过 `@dialect(..., library="nvshmem", compiler="clang")` 将 NVSHMEM 设备端接口内联进 TLE-Raw kernel。在 NVIDIA 上支持。

- **DevTools（调试器与性能分析器）**
  - **FlagTree DevTools** —— 由 FEP-0068 提出（目标 FlagOS 2.2）。专用仓库为 [flagos-ai/FlagPrism](https://github.com/flagos-ai/FlagPrism)（2026-08-04 建仓，MIT），集中维护 `flagtree.debugger` 与 `flagtree.profiler`，由 FlagTree 作为 `third_party/FlagPrism` 子模块消费。FlagPrism 先支持部分后端：华为昇腾、天数智芯、摩尔线程。

- **打包**
  - Wave 1 统一打包集成（FEP-0019）：Debian `.deb` 与 RPM `.rpm` 包发布至 FlagOS Nexus 仓库。**已在 FlagTree#607 合入**。

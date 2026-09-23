# FlagTree 0.7.0 Release

```{note}
This release targets FlagOS 2.2 (GA scheduled for 2026-09-28). The items below reflect the FEP scope accepted for 2.2. Features whose implementation has not yet landed are marked _In progress_ and will be updated as the corresponding PRs merge before the Feature Freeze (2026-08-31).
```

- **Added Features**
  - 3.6.x branch:
    - TLE-Lite:
      - Added the `tle.shard_id` op for querying the coordinate of the current program along a device-mesh axis. Supported on NVIDIA.
      - Added the following distributed ops: `tle.signal` and `tle.signal_wait`. Supported on NVIDIA.
      - Extended `tle.remote` with the `space` (cluster / device / node), `dtype`, `offset`, `coopkind`, and `netidx` parameters, covering remote access within a thread-block cluster (DSMEM), between GPUs in a node (NVLink P2P), and across nodes (FlagCX/RDMA). Supported on NVIDIA.
      - Extended `tle.distributed_barrier` with the `space`, `group_kind`, `barrier_kind`, and `order` parameters. Supported on NVIDIA.
    - TLE-Struct:
      - Added GPU buffer aliasing through `tle.gpu.alloc(..., alias=...)`, providing typed shared-memory views with static validation of aliased views. (FEP-0065)
      - Added the `tle.gpu.set_layout` op for explicit distributed-layout assignment, together with the `BlockEncoding`, `MmaEncoding`, `DotOperandEncoding`, and `SlicedEncoding` layout objects. (FEP-0065)
      - Added the following barrier ops: `tle.gpu.alloc_barrier`, `tle.gpu.alloc_barriers`, `tle.gpu.barrier_wait`, and `tle.gpu.barrier_arrive`; added the `barrier` and `mask` parameters to `tle.gpu.copy`. Supported on NVIDIA.
      - Added the `tle.gpu.wgmma` and `tle.gpu.wgmma_wait` ops. Supported on NVIDIA.
      - Added the `tle.gpu.buffered_tensor.slot` and `tle.gpu.buffered_tensor.reshape` ops. Supported on NVIDIA.
      - Added the `init_value` and `alias_offset_bytes` parameters to `tle.gpu.alloc`. Supported on NVIDIA.
    - TLE-Raw:
      - Added the `library` and `compiler` parameters, enabling NVSHMEM device-side interfaces to be inlined into TLE-Raw kernels via `@dialect(..., library="nvshmem", compiler="clang")`. Supported on NVIDIA.

- **DevTools (Debugger & Profiler) — in progress**
  - **FlagTree DevTools** — proposed in FEP-0068 (target FlagOS 2.2). The dedicated repository now exists as [flagos-ai/FlagPrism](https://github.com/flagos-ai/FlagPrism) (created 2026-08-04, MIT), which centrally maintains `flagtree.debugger` and `flagtree.profiler` and is consumed by FlagTree as the `third_party/FlagPrism` submodule. The FEP tracking issue (community#76) still lists the Owner assignment and FlagTree-side prerequisites (`triton.debugger`/`triton.profiler` facades, optional-component registration, compiler/runtime hooks) as open items. FlagPrism is under active development with no tagged release yet; see the [FlagPrism repository](https://github.com/flagos-ai/FlagPrism) for the current state.

- **Packaging**
  - Wave 1 unified package integration (FEP-0019): Debian `.deb` and RPM `.rpm` packages published to the FlagOS Nexus repository. _Merged in FlagTree#607._

# FlagTree 0.7.0 Release

```{note}
This release targets FlagOS 2.2 (GA scheduled for 2026-09-28). The items below reflect the FEP scope accepted for 2.2. Features whose implementation has not yet landed are marked _In progress_ and will be updated as the corresponding PRs merge before the Feature Freeze (2026-08-31).
```

- **Added Features**
  - TLE-Struct:
    - **GPU buffer aliasing** — added typed shared-memory views through `tle.gpu.alloc(..., alias=...)`, with static validation of aliased views. Targeted for FlagOS 2.2 (FEP-0065). _In progress — implementation tracked in the FlagTree repository._
    - **Layout control** — added `tle.gpu.set_layout` for explicit distributed-layout assignment. Targeted for FlagOS 2.2 (FEP-0065). _In progress._

- **DevTools (Debugger & Profiler) — in progress**
  - **FlagTree DevTools** — proposed in FEP-0068 (target FlagOS 2.2). The dedicated repository now exists as [flagos-ai/FlagPrism](https://github.com/flagos-ai/FlagPrism) (created 2026-08-04, MIT), which centrally maintains `flagtree.debugger` and `flagtree.profiler` and is consumed by FlagTree as the `third_party/FlagPrism` submodule. The FEP tracking issue (community#76) still lists the Owner assignment and FlagTree-side prerequisites (`triton.debugger`/`triton.profiler` facades, optional-component registration, compiler/runtime hooks) as open items. FlagPrism is under active development with no tagged release yet; see the [FlagPrism repository](https://github.com/flagos-ai/FlagPrism) for the current state.

- **Packaging**
  - Wave 1 unified package integration (FEP-0019): Debian `.deb` and RPM `.rpm` packages published to the FlagOS Nexus repository. _Merged in FlagTree#607._

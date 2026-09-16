# FlagAudio 发布说明

## 未发布（FlagOS 2.2 开发中）

- **打包（FEP-0019，Wave 1）** —— Debian `.deb` 与 RPM `.rpm` 打包正在 FlagAudio#2 中进行（等待 first-contributor CI 批准）。Python wheel 将发布至 PyPI，二进制包发布至 FlagOS Nexus 仓库。
- 所有源文件新增 Apache-2.0 版权头。

## v0.2.0


- **新增功能**

  - **音频效果** — add_noise, dcshift, mu_law_encoding。
  - **频谱分析** — amplitude_to_DB, spectral_centroid。
  - 支持多后端的音频信号处理算子。
  - 从原始音频到模型输入的完整处理链路。

- **增强功能**

  - 算子经过深度性能调优。
  - Triton 内核调用优化，减少启动开销。

## v0.1.0

FlagAudio 初始版本。

- **新增功能**

  - Audio 标准接口库，支持多后端。
  - 灵活的多后端支持机制。

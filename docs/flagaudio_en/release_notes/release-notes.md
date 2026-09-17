# FlagAudio Release Notes

## Unreleased (FlagOS 2.2 in development)

- **Packaging (FEP-0019, Wave 1)** — Debian `.deb` and RPM `.rpm` packaging is in progress in FlagAudio#2 (awaiting first-contributor CI approval). Python wheels will be published to PyPI and binary packages to the FlagOS Nexus repository.
- Added Apache-2.0 copyright headers across all source files.

## v0.2.0


- **Added Features**

  - **Audio Effects** — add_noise, dcshift, mu_law_encoding.
  - **Spectral Analysis** — amplitude_to_DB, spectral_centroid.
  - Audio signal processing operators with multi-backend support.
  - Complete processing chain from raw audio to model input.

- **Enhanced Features**

  - Operators underwent deep performance tuning.
  - Triton kernel call optimization for reduced launch overhead.

## v0.1.0

Initial release of FlagAudio.

- **Added Features**

  - Audio-standard interface library with multi-backend support.
  - Flexible multi-backend support mechanism.
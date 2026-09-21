# vllm-plugin-FL Overview

vllm-plugin-FL is a plugin for the [vLLM](https://github.com/vllm-project/vllm) inference/serving framework, built on top of [FlagOS](https://github.com/flagos-ai), a unified open-source AI system software stack. vllm-plugin-FL extends vLLM's capabilities and performance across diverse hardware environments. Without changing vLLM's original interfaces or usage patterns, the same command can run model inference/serving on different chips. vllm-plugin-FL can work with other FlagOS's components including the unified operator library [FlagGems](https://github.com/flagos-ai/FlagGems)，the unified communication library [FlagCX](https://github.com/flagos-ai/FlagCX) and the unified compiler [FlagTree] (https://github.com/flagos-ai/FlagTree) .


```{toctree}
:maxdepth: 2

features.md
operator-dispatch-mechanism.md

```
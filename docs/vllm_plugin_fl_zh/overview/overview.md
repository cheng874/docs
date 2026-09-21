# vllm-plugin-FL 概览

vllm-plugin-FL 是 [vLLM](https://github.com/vllm-project/vllm) 推理/服务框架的插件，构建在 [FlagOS](https://flagos.io) 这一统一的开源 AI 系统软件栈之上。vllm-plugin-FL 扩展了 vLLM 在多种硬件环境下的能力与性能。在不改变 vLLM 原有接口和使用方式的前提下，同一条命令即可在不同芯片上运行模型推理/服务。vllm-plugin-FL 可与 FlagOS 的其他组件配合使用，包括统一算子库 [FlagGems](https://github.com/flagos-ai/FlagGems)、统一通信库 [FlagCX](https://github.com/flagos-ai/FlagCX) 和统一编译器 [FlagTree](https://github.com/flagos-ai/FlagTree)。


```{toctree}
:maxdepth: 2

features.md
operator-dispatch-mechanism.md

```

---
orphan: true
---

# dropout_backward

**Kind:** NeuralNetwork | **Stage:** stable | **Since:** 3.0

## Description

The backward case of `dropout()`.

## ATen Mapping

- `native_dropout_backward`

## Labels

`aten`, `nn.functional`

## Source Code

- [src/flag_gems/ops/dropout_backward.py](https://github.com/flagos-ai/FlagGems/blob/master/src/flag_gems/ops/dropout_backward.py)

## Tests

- **Accuracy:** [https://github.com/flagos-ai/FlagGems/blob/master/tests/test_dropout_backward.py](https://github.com/flagos-ai/FlagGems/blob/master/tests/test_dropout_backward.py)
- **Performance:** [https://github.com/flagos-ai/FlagGems/blob/master/benchmark/test_dropout_backward.py](https://github.com/flagos-ai/FlagGems/blob/master/benchmark/test_dropout_backward.py)

# Install FlagGems-sglang

For a fresh installation of FlagGems-sglang, follow the steps below.

1. Install build dependencies.

   ```{code-block} bash
   pip install -U 'scikit-build-core>=0.11' pybind11 ninja cmake
   ```

2. Clone and install FlagGems-sglang.

   ```{code-block} bash
   git clone https://github.com/flagos-ai/FlagGems-sglang.git
   cd FlagGems-sglang
   pip install .
   ```

   For development, use editable installation:

   ```{code-block} bash
   pip install --no-build-isolation -e .
   ```

   To run the test suites, install the test dependencies as well:

   ```{code-block} bash
   pip install -e '.[test]'
   ```

3. Optionally select the backend explicitly. The runtime detects the device on import; set `DNN_VENDOR` to force a specific backend instead:

   ```{code-block} bash
   export DNN_VENDOR=nvidia
   ```

## Verify the installation

```{code-block} bash
python -c "import flaggems_sglang; print(flaggems_sglang.device, flaggems_sglang.vendor_name); print(len(flaggems_sglang.all_registered_ops()), 'operators')"
```

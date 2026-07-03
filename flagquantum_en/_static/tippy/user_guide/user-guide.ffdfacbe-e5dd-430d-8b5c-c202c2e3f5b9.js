selector_to_html = {"a[href=\"export-to-real-quantum-hardware.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Export to real quantum hardware<a class=\"headerlink\" href=\"#export-to-real-quantum-hardware\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum circuits can be exported to OpenQASM 3.0 and run on all major quantum computing platforms:</p>", "a[href=\"custom-gates.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Register custom gates<a class=\"headerlink\" href=\"#register-custom-gates\" title=\"Link to this heading\">#</a></h1><p>Extend FlagQuantum with your own gate definitions:</p>", "a[href=\"#user-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Guide<a class=\"headerlink\" href=\"#user-guide\" title=\"Link to this heading\">#</a></h1><p>This guide covers how to use FlagQuantum for quantum circuit simulation, including basic usage, parameterized gates with trainable parameters, quantum encoding, register custom gates, distributed multi-GPU execution, and memory invertible mode.</p>", "a[href=\"basic-usage.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Basic usage<a class=\"headerlink\" href=\"#basic-usage\" title=\"Link to this heading\">#</a></h1><p>Create a distributed quantum device and apply gates using the functional API:</p>", "a[href=\"parameterized-gates.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Parameterized gates<a class=\"headerlink\" href=\"#parameterized-gates\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum supports trainable quantum circuits with gradient computation:</p>", "a[href=\"distributed-execution.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Distributed multi-GPU execution<a class=\"headerlink\" href=\"#distributed-multi-gpu-execution\" title=\"Link to this heading\">#</a></h1><p>Run quantum simulations across multiple GPUs:</p>", "a[href=\"invertible-mode.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Invertible mode<a class=\"headerlink\" href=\"#invertible-mode\" title=\"Link to this heading\">#</a></h1><p>For large circuits requiring gradient computation, use invertible mode to reduce memory usage:</p>", "a[href=\"tutorials.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">#</a></h1><p>You can explore our tutorial series in terms of Jupyter Note (<code class=\"docutils literal notranslate\"><span class=\"pre\">.jpynb</span></code>) in <code class=\"docutils literal notranslate\"><span class=\"pre\">examples/tutorials</span></code> to learn how to use FlagQuantum effectively:</p>", "a[href=\"run-tests.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Run tests<a class=\"headerlink\" href=\"#run-tests\" title=\"Link to this heading\">#</a></h1><p>You can use the following code block to run tests.</p>", "a[href=\"quantum-encoding.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Quantum encoding<a class=\"headerlink\" href=\"#quantum-encoding\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum provides multiple encoding schemes for embedding classical data into quantum states:</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};

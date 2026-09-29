selector_to_html = {"a[href=\"#custom-matrix-operations-in-a-circuit\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Custom matrix operations in a circuit<a class=\"headerlink\" href=\"#custom-matrix-operations-in-a-circuit\" title=\"Link to this heading\">#</a></h2><p>A custom operation applies a caller-supplied unitary matrix to one or more wires:</p>", "a[href=\"#custom-operations\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Custom Operations<a class=\"headerlink\" href=\"#custom-operations\" title=\"Link to this heading\">#</a></h1><h2>Custom matrix operations in a circuit<a class=\"headerlink\" href=\"#custom-matrix-operations-in-a-circuit\" title=\"Link to this heading\">#</a></h2><p>A custom operation applies a caller-supplied unitary matrix to one or more wires:</p>", "a[href=\"#discover-the-registered-operators\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Discover the registered operators<a class=\"headerlink\" href=\"#discover-the-registered-operators\" title=\"Link to this heading\">#</a></h2><p>Every gate and lowering available to the runtime comes from one typed operator registry, and the generated capability table reports which execution paths have an executable lowering:</p>", "a[href=\"compile-and-target.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Compile and Target<a class=\"headerlink\" href=\"#compile-and-target\" title=\"Link to this heading\">#</a></h1><h2>Target-independent optimisation<a class=\"headerlink\" href=\"#target-independent-optimisation\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">optimize</span></code> returns a new <code class=\"docutils literal notranslate\"><span class=\"pre\">CircuitIR</span></code>, leaves the input unchanged, and applies canonical rewrites to a fixed point. It never selects or invokes an execution backend. A runnable example is <code class=\"docutils literal notranslate\"><span class=\"pre\">python</span> <span class=\"pre\">-m</span> <span class=\"pre\">examples.compiler_optimize</span></code>.</p>", "a[href=\"#compiler-plugins\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Compiler plugins<a class=\"headerlink\" href=\"#compiler-plugins\" title=\"Link to this heading\">#</a></h2><p>Circuit compilers are a specific extension kind that accepts and returns FlagQuantum <code class=\"docutils literal notranslate\"><span class=\"pre\">CircuitIR</span></code>. See <a class=\"reference internal\" href=\"compile-and-target.html\"><span class=\"std std-doc\">Compile and Target</span></a> for the plugin lifecycle and a working QSteed journey.</p>", "a[href=\"#extend-flagquantum-with-an-extension\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Extend FlagQuantum with an extension<a class=\"headerlink\" href=\"#extend-flagquantum-with-an-extension\" title=\"Link to this heading\">#</a></h2><p>Backends, kernels, operators, compilers, compiler passes, devices, providers, measurement collectors, and planners are extension kinds. An extension is an independently installed Python package that declares a versioned manifest and negotiates capabilities before activation:</p>"}
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

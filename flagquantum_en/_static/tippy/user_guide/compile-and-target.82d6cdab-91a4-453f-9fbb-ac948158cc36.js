selector_to_html = {"a[href=\"#export\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Export<a class=\"headerlink\" href=\"#export\" title=\"Link to this heading\">#</a></h2><p>FlagQuantum programs can leave the framework for other toolchains:</p>", "a[href=\"#target-aware-compilation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Target-aware compilation<a class=\"headerlink\" href=\"#target-aware-compilation\" title=\"Link to this heading\">#</a></h2><p>The compiler emits only topology-valid two-qubit operations and records its routing decision in the metadata. Logical wire numbers are preserved. A runnable example is <code class=\"docutils literal notranslate\"><span class=\"pre\">python</span> <span class=\"pre\">-m</span> <span class=\"pre\">examples.target_aware_compilation</span></code>.</p>", "a[href=\"#compile-and-target\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Compile and Target<a class=\"headerlink\" href=\"#compile-and-target\" title=\"Link to this heading\">#</a></h1><h2>Target-independent optimisation<a class=\"headerlink\" href=\"#target-independent-optimisation\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">optimize</span></code> returns a new <code class=\"docutils literal notranslate\"><span class=\"pre\">CircuitIR</span></code>, leaves the input unchanged, and applies canonical rewrites to a fixed point. It never selects or invokes an execution backend. A runnable example is <code class=\"docutils literal notranslate\"><span class=\"pre\">python</span> <span class=\"pre\">-m</span> <span class=\"pre\">examples.compiler_optimize</span></code>.</p>", "a[href=\"#select-a-compiler-for-a-hardware-target\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Select a compiler for a hardware target<a class=\"headerlink\" href=\"#select-a-compiler-for-a-hardware-target\" title=\"Link to this heading\">#</a></h2><p>The named compiler receives the current chip snapshot, selects a physical subgraph, and returns logical IR with an ordered physical mapping that FlagQuantum carries through packaging and submission. When <code class=\"docutils literal notranslate\"><span class=\"pre\">target_qubits</span></code> is provided, its order maps logical wires to physical qubits and compilation fails unless the target snapshot proves the selection is valid and connected; an explicit mapping is never silently replaced.</p>", "a[href=\"#compiler-plugins\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Compiler plugins<a class=\"headerlink\" href=\"#compiler-plugins\" title=\"Link to this heading\">#</a></h2><p>A compiler plugin registers one zero-argument factory in the <code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.extensions</span></code> entry-point group and returns a manifest with the matching identity:</p>", "a[href=\"#target-independent-optimisation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Target-independent optimisation<a class=\"headerlink\" href=\"#target-independent-optimisation\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">optimize</span></code> returns a new <code class=\"docutils literal notranslate\"><span class=\"pre\">CircuitIR</span></code>, leaves the input unchanged, and applies canonical rewrites to a fixed point. It never selects or invokes an execution backend. A runnable example is <code class=\"docutils literal notranslate\"><span class=\"pre\">python</span> <span class=\"pre\">-m</span> <span class=\"pre\">examples.compiler_optimize</span></code>.</p>"}
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

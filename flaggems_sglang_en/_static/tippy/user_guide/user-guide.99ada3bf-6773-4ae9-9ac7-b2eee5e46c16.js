selector_to_html = {"a[href=\"run-tests-and-benchmark.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Run tests and benchmark<a class=\"headerlink\" href=\"#run-tests-and-benchmark\" title=\"Link to this heading\">#</a></h1><p>This section covers how to run tests and benchmarks for FlagGems-sglang to validate correctness and measure operator performance.</p><p>The following commands are verified in the FlagGems-sglang repository and can be used for quick validation after installation.</p>", "a[href=\"#user-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Guide<a class=\"headerlink\" href=\"#user-guide\" title=\"Link to this heading\">#</a></h1><p>This section guides you on how to use FlagGems-sglang operators in your SGLang inference workflows and how to run tests and benchmarks.</p>", "a[href=\"run-tests-and-benchmark.html#run-tests\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Run tests<a class=\"headerlink\" href=\"#run-tests\" title=\"Link to this heading\">#</a></h2><p>To check an operator against the CPU reference instead of the device reference:</p>", "a[href=\"run-tests-and-benchmark.html#run-benchmark\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Run benchmark<a class=\"headerlink\" href=\"#run-benchmark\" title=\"Link to this heading\">#</a></h2><p>The benchmark suite records accuracy alongside performance. Passing <code class=\"docutils literal notranslate\"><span class=\"pre\">--record</span> <span class=\"pre\">log</span></code> writes a per-run log, and <code class=\"docutils literal notranslate\"><span class=\"pre\">--record</span> <span class=\"pre\">json</span></code> writes <code class=\"docutils literal notranslate\"><span class=\"pre\">accuracy_result.json</span></code> instead.</p>", "a[href=\"usage.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Use operators<a class=\"headerlink\" href=\"#use-operators\" title=\"Link to this heading\">#</a></h1><p>After installing FlagGems-sglang, import the package and call the operators directly. Every operator resolved for the current device is attached to the package namespace, so the call site stays the same regardless of the underlying hardware.</p><p>The example below uses two exported operators, <code class=\"docutils literal notranslate\"><span class=\"pre\">silu_and_mul</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">fused_rmsnorm</span></code>:</p>"}
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

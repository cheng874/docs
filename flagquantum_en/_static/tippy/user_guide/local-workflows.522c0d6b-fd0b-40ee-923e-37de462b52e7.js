selector_to_html = {"a[href=\"#local-workflows\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Local Workflows<a class=\"headerlink\" href=\"#local-workflows\" title=\"Link to this heading\">#</a></h1><p>Local execution is the zero-configuration path. It needs no provider account, compiler plugin, task scheduler, or network connection.</p>", "a[href=\"#precision\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Precision<a class=\"headerlink\" href=\"#precision\" title=\"Link to this heading\">#</a></h2><p>Precision is resolved once per execution. <code class=\"docutils literal notranslate\"><span class=\"pre\">complex64</span></code> implies float32 parameters, and <code class=\"docutils literal notranslate\"><span class=\"pre\">complex128</span></code> implies float64. Use an explicit runtime configuration for long-lived or distributed work so that circuits, plans, and workers agree:</p>", "a[href=\"#draw-a-circuit\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Draw a circuit<a class=\"headerlink\" href=\"#draw-a-circuit\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#run-the-maintained-local-paths\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Run the maintained local paths<a class=\"headerlink\" href=\"#run-the-maintained-local-paths\" title=\"Link to this heading\">#</a></h2><p>Continue with the single-machine examples for explicit simulator selection, larger models, and configurable CPU/GPU runs.</p>", "a[href=\"#choose-a-simulation-representation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Choose a simulation representation<a class=\"headerlink\" href=\"#choose-a-simulation-representation\" title=\"Link to this heading\">#</a></h2><p>The same program can run under different representations without being rewritten:</p>", "a[href=\"#measure\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Measure<a class=\"headerlink\" href=\"#measure\" title=\"Link to this heading\">#</a></h2><p>Request the scientific result you need instead of manually inspecting the statevector:</p>", "a[href=\"#simulate\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Simulate<a class=\"headerlink\" href=\"#simulate\" title=\"Link to this heading\">#</a></h2><p>CPU statevector execution is the default. Select one locally controlled GPU explicitly when needed:</p>"}
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

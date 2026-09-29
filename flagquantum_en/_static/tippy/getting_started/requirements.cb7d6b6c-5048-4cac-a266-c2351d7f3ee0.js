selector_to_html = {"a[href=\"../reference/capabilities.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Capabilities<a class=\"headerlink\" href=\"#capabilities\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum separates what a pathway <em>is</em> from how strongly it is supported.\nMaturity applies only to the scope stated for each capability, and a local,\nreplicated, sliced, or planned execution path is never distributed scalability\nevidence.</p>", "a[href=\"#software-requirements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software requirements<a class=\"headerlink\" href=\"#software-requirements\" title=\"Link to this heading\">#</a></h2><p>Only PyTorch is required for the local PyTorch path. Every integration is an\noptional extra, so the minimal installation stays small and imports lazily.</p>", "a[href=\"#execution-targets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Execution targets<a class=\"headerlink\" href=\"#execution-targets\" title=\"Link to this heading\">#</a></h2><p>CUDA is the only accelerator selected automatically. The FlagOS logical device\nis never chosen implicitly, and no domestic accelerator is certified by\nFlagQuantum alone: the current CUDA-backed reference records the joint\nintegration path, not vendor hardware quality. See\n<a class=\"reference internal\" href=\"../reference/capabilities.html\"><span class=\"std std-doc\">Capabilities</span></a> for the exact scope of every path.</p>", "a[href=\"#optional-extras\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Optional extras<a class=\"headerlink\" href=\"#optional-extras\" title=\"Link to this heading\">#</a></h2><p>On Python 3.10 the <code class=\"docutils literal notranslate\"><span class=\"pre\">cirq</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">braket</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">cudaq</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">pennylane</span></code>, and <code class=\"docutils literal notranslate\"><span class=\"pre\">quafu</span></code> extras\nare unavailable because the upstream packages require a newer interpreter.</p>", "a[href=\"#requirements\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><h2>Software requirements<a class=\"headerlink\" href=\"#software-requirements\" title=\"Link to this heading\">#</a></h2><p>Only PyTorch is required for the local PyTorch path. Every integration is an\noptional extra, so the minimal installation stays small and imports lazily.</p>"}
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

selector_to_html = {"a[href=\"#assertion-policy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Assertion Policy<a class=\"headerlink\" href=\"#assertion-policy\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#shape-policy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Shape Policy<a class=\"headerlink\" href=\"#shape-policy\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#source-of-truth\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Source of Truth<a class=\"headerlink\" href=\"#source-of-truth\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#scope\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Scope<a class=\"headerlink\" href=\"#scope\" title=\"Link to this heading\">#</a></h2><p>This document defines the acceptance-facing accuracy policy for FlagTensor correctness validation.</p>", "a[href=\"#default-tolerances\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Default Tolerances<a class=\"headerlink\" href=\"#default-tolerances\" title=\"Link to this heading\">#</a></h2><p>Complex tolerances are not defined: Triton does not natively support complex dtypes. The only operator with complex support is <code class=\"docutils literal notranslate\"><span class=\"pre\">conj</span></code>, which handles complex via a dedicated kernel that decomposes real/imag parts at the Python level before launching Triton.</p>", "a[href=\"#dtype-coverage-policy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Dtype Coverage Policy<a class=\"headerlink\" href=\"#dtype-coverage-policy\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#reference-policy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reference Policy<a class=\"headerlink\" href=\"#reference-policy\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#flagtensor-accuracy-policy\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Accuracy Policy<a class=\"headerlink\" href=\"#flagtensor-accuracy-policy\" title=\"Link to this heading\">#</a></h1><h2>Scope<a class=\"headerlink\" href=\"#scope\" title=\"Link to this heading\">#</a></h2><p>This document defines the acceptance-facing accuracy policy for FlagTensor correctness validation.</p>", "a[href=\"#skip-block-policy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Skip / Block Policy<a class=\"headerlink\" href=\"#skip-block-policy\" title=\"Link to this heading\">#</a></h2>"}
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

selector_to_html = {"a[href=\"#experimental-operators\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Experimental Operators<a class=\"headerlink\" href=\"#experimental-operators\" title=\"Link to this heading\">#</a></h2><h3>block_sparse_contraction<a class=\"headerlink\" href=\"#block-sparse-contraction\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#operator-specific-numerical-issues\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Operator-Specific Numerical Issues<a class=\"headerlink\" href=\"#operator-specific-numerical-issues\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#flagtensor-known-issues\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Known Issues<a class=\"headerlink\" href=\"#flagtensor-known-issues\" title=\"Link to this heading\">#</a></h1><p>This document tracks known issues and limitations in the current FlagTensor implementation.</p>", "a[href=\"#known-limitations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Known Limitations<a class=\"headerlink\" href=\"#known-limitations\" title=\"Link to this heading\">#</a></h2><h3>Operator-Specific Numerical Issues<a class=\"headerlink\" href=\"#operator-specific-numerical-issues\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#directory-structure-transition\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Directory Structure Transition<a class=\"headerlink\" href=\"#directory-structure-transition\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#benchmark-mode-coverage\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Benchmark Mode Coverage<a class=\"headerlink\" href=\"#benchmark-mode-coverage\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#performance-notes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Performance Notes<a class=\"headerlink\" href=\"#performance-notes\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#shape-coverage\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Shape Coverage<a class=\"headerlink\" href=\"#shape-coverage\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#future-work\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Future Work<a class=\"headerlink\" href=\"#future-work\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#dtype-coverage\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Dtype Coverage<a class=\"headerlink\" href=\"#dtype-coverage\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#ci-environment\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">CI Environment<a class=\"headerlink\" href=\"#ci-environment\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#registry-transition\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Registry Transition<a class=\"headerlink\" href=\"#registry-transition\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#block-sparse-contraction\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">block_sparse_contraction<a class=\"headerlink\" href=\"#block-sparse-contraction\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#migration-notes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Migration Notes<a class=\"headerlink\" href=\"#migration-notes\" title=\"Link to this heading\">#</a></h2><h3>Directory Structure Transition<a class=\"headerlink\" href=\"#directory-structure-transition\" title=\"Link to this heading\">#</a></h3>"}
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

selector_to_html = {"a[href=\"#category-benchmark-entry-points-acceptance-interface\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Category Benchmark Entry Points (Acceptance Interface)<a class=\"headerlink\" href=\"#category-benchmark-entry-points-acceptance-interface\" title=\"Link to this heading\">#</a></h2><p>Benchmark execution uses category-level files as the formal acceptance interface.\nIndividual operators are selected via <code class=\"docutils literal notranslate\"><span class=\"pre\">pytest</span> <span class=\"pre\">-m</span> <span class=\"pre\">&lt;op&gt;</span></code> markers.</p><p>Current category entry points (all four complete):</p>", "a[href=\"#shape-and-dtype-policy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Shape and Dtype Policy<a class=\"headerlink\" href=\"#shape-and-dtype-policy\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#benchmark-goals\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Benchmark Goals<a class=\"headerlink\" href=\"#benchmark-goals\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#reporting-policy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reporting Policy<a class=\"headerlink\" href=\"#reporting-policy\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#timing-policy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Timing Policy<a class=\"headerlink\" href=\"#timing-policy\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#weekly-benchmark\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Weekly Benchmark<a class=\"headerlink\" href=\"#weekly-benchmark\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#smoke-benchmark\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Smoke Benchmark<a class=\"headerlink\" href=\"#smoke-benchmark\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#flagtensor-benchmark-policy\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Benchmark Policy<a class=\"headerlink\" href=\"#flagtensor-benchmark-policy\" title=\"Link to this heading\">#</a></h1><h2>Scope<a class=\"headerlink\" href=\"#scope\" title=\"Link to this heading\">#</a></h2><p>This document defines the acceptance-facing benchmark policy for FlagTensor performance validation.</p>", "a[href=\"#scope\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Scope<a class=\"headerlink\" href=\"#scope\" title=\"Link to this heading\">#</a></h2><p>This document defines the acceptance-facing benchmark policy for FlagTensor performance validation.</p>", "a[href=\"#benchmark-modes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Benchmark Modes<a class=\"headerlink\" href=\"#benchmark-modes\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#acceptance-benchmark\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Acceptance Benchmark<a class=\"headerlink\" href=\"#acceptance-benchmark\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#source-of-truth\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Source of Truth<a class=\"headerlink\" href=\"#source-of-truth\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#execution-levels\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Execution Levels<a class=\"headerlink\" href=\"#execution-levels\" title=\"Link to this heading\">#</a></h2><h3>Smoke Benchmark<a class=\"headerlink\" href=\"#smoke-benchmark\" title=\"Link to this heading\">#</a></h3>"}
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

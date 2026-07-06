selector_to_html = {"a[href=\"#flagtensor-overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Overview<a class=\"headerlink\" href=\"#flagtensor-overview\" title=\"Link to this heading\">#</a></h1><p>FlagTensor is part of <a class=\"reference external\" href=\"https://flagos.io/\">FlagOS</a>, a fully open-source system software stack designed to unify the model\u2013system\u2013chip layers and foster an open and collaborative ecosystem. It enables a \u201cdevelop once, run anywhere\u201d workflow across diverse AI accelerators, unlocking hardware performance, eliminating fragmentation among AI chipset-specific software stacks, and substantially lowering the cost of porting and maintaining AI workloads.</p><p>FlagTensor is a high-performance tensor-primitive library implemented in <a class=\"reference external\" href=\"https://github.com/openai/triton\">Triton</a> language. It provides optimized implementations of common tensor primitives (unary, binary, and tensor contraction operations) benchmarked against <a class=\"reference external\" href=\"https://developer.nvidia.com/cutensor\">cuTensor</a> baselines, delivering reference-level correctness with competitive performance across diverse GPU architectures.</p>", "a[href=\"#features\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Features<a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#project-structure\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Project Structure<a class=\"headerlink\" href=\"#project-structure\" title=\"Link to this heading\">#</a></h2>"}
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

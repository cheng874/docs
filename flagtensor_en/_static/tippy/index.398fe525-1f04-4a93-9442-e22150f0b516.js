selector_to_html = {"a[href=\"user_guide/user-guide.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor User Guide<a class=\"headerlink\" href=\"#flagtensor-user-guide\" title=\"Link to this heading\">#</a></h1><h2>Use FlagTensor<a class=\"headerlink\" href=\"#use-flagtensor\" title=\"Link to this heading\">#</a></h2><p>FlagTensor integrates directly with PyTorch. Import the package and call operators on CUDA tensors:</p>", "a[href=\"reference/reference.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Reference<a class=\"headerlink\" href=\"#reference\" title=\"Link to this heading\">#</a></h1><p>This section contains the FlagTensor acceptance documentation, covering policies, CI/CD workflows, operator coverage, and standard commands.</p>", "a[href=\"#flagtensor-documentation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Documentation<a class=\"headerlink\" href=\"#flagtensor-documentation\" title=\"Link to this heading\">#</a></h1><p><a class=\"sd-sphinx-override sd-btn sd-text-wrap sd-btn-primary sd-btn-lg sd-px-4 sd-py-2 sd-fw-bold reference internal\" href=\"getting_started/getting-started.html\"><span class=\"doc std std-doc\">Getting Started</span></a></p>", "a[href=\"getting_started/getting-started.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started with FlagTensor<a class=\"headerlink\" href=\"#getting-started-with-flagtensor\" title=\"Link to this heading\">#</a></h1>", "a[href=\"overview/overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Overview<a class=\"headerlink\" href=\"#flagtensor-overview\" title=\"Link to this heading\">#</a></h1><p>FlagTensor is part of <a class=\"reference external\" href=\"https://flagos.io/\">FlagOS</a>, a fully open-source system software stack designed to unify the model\u2013system\u2013chip layers and foster an open and collaborative ecosystem. It enables a \u201cdevelop once, run anywhere\u201d workflow across diverse AI accelerators, unlocking hardware performance, eliminating fragmentation among AI chipset-specific software stacks, and substantially lowering the cost of porting and maintaining AI workloads.</p><p>FlagTensor is a high-performance tensor-primitive library implemented in <a class=\"reference external\" href=\"https://github.com/openai/triton\">Triton</a> language. It provides optimized implementations of common tensor primitives (unary, binary, and tensor contraction operations) benchmarked against <a class=\"reference external\" href=\"https://developer.nvidia.com/cutensor\">cuTensor</a> baselines, delivering reference-level correctness with competitive performance across diverse GPU architectures.</p>"}
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

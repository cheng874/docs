selector_to_html = {"a[href=\"overview/overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Overview<a class=\"headerlink\" href=\"#overview\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum is a distributed, differentiable quantum computing framework built on PyTorch. It turns quantum circuits into trainable models: the same program is trained with ordinary PyTorch optimizers, simulated with different representations, scaled across ranks when a workload needs it, and evaluated on remote compute or quantum hardware. It is part of the FlagOS ecosystem \u2014 a unified, open-source AI system software stack that integrates diverse models, systems, and chips.</p>", "a[href=\"reference/reference.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Reference<a class=\"headerlink\" href=\"#reference\" title=\"Link to this heading\">#</a></h1><p>Stable interfaces, capability maturity, runtime contracts, and current support boundaries.</p>", "a[href=\"getting_started/getting-started.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started with FlagQuantum<a class=\"headerlink\" href=\"#getting-started-with-flagquantum\" title=\"Link to this heading\">#</a></h1><p>This section covers the requirements for installing FlagQuantum, the installation\nitself, and a first trainable quantum model.</p>", "a[href=\"#flagquantum-documentation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagQuantum Documentation<a class=\"headerlink\" href=\"#flagquantum-documentation\" title=\"Link to this heading\">#</a></h1><p><a class=\"sd-sphinx-override sd-btn sd-text-wrap sd-btn-primary sd-btn-lg sd-px-4 sd-py-2 sd-fw-bold reference internal\" href=\"getting_started/getting-started.html\"><span class=\"doc std std-doc\">Getting Started</span></a></p>", "a[href=\"user_guide/user-guide.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Guide<a class=\"headerlink\" href=\"#user-guide\" title=\"Link to this heading\">#</a></h1><p>This guide covers how to build and run quantum programs with FlagQuantum: circuit\nconstruction, PyTorch training, simulation representations, measurement, noise,\ncompilation, deployment, hardware evidence, distributed execution, and remote\ntargets.</p>"}
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

selector_to_html = {"a[href=\"reference/api.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">API Reference<a class=\"headerlink\" href=\"#api-reference\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum exposes one curated Python interface: <code class=\"docutils literal notranslate\"><span class=\"pre\">import</span> <span class=\"pre\">flagquantum</span> <span class=\"pre\">as</span> <span class=\"pre\">fq</span></code>.\nBuild a circuit, inspect its runtime plan, execute it through a stable result\ncontract, and train parameterized programs with PyTorch.</p><p>Exact stable names are defined by the repository\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">public_api_v1.json</span></code>, verified\nby executable contract tests, and rendered in the stable API inventory below.</p>", "a[href=\"user_guide/user-guide.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Guide<a class=\"headerlink\" href=\"#user-guide\" title=\"Link to this heading\">#</a></h1><p>This guide covers how to build and execute quantum programs with FlagQuantum,\ntrain them with PyTorch, choose a simulation representation, scale across ranks,\nmodel noise, compile for a target, deploy to hardware, and extend the framework.</p>", "a[href=\"getting_started/getting-started.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h1><p>This section covers the requirements for running FlagQuantum and walks through\ninstallation, verification, and a first execution.</p>", "a[href=\"#flagquantum-documentation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagQuantum Documentation<a class=\"headerlink\" href=\"#flagquantum-documentation\" title=\"Link to this heading\">#</a></h1><p><a class=\"sd-sphinx-override sd-btn sd-text-wrap sd-btn-primary sd-btn-lg sd-px-4 sd-py-2 sd-fw-bold reference internal\" href=\"getting_started/getting-started.html\"><span class=\"doc std std-doc\">Getting Started</span></a></p>", "a[href=\"FlagQuantum_overview/FlagQuantum-overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagQuantum Overview<a class=\"headerlink\" href=\"#flagquantum-overview\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum is sharded, differentiable quantum simulation and training in\nPyTorch, reaching domestic accelerators through FlagOS. It is a PyTorch-first\nframework for differentiable quantum computing and quantum AI: circuits become\ntrainable models, and the same program can be executed locally, sharded across\nranks, or evaluated on quantum hardware.</p><p>FlagQuantum is part of the FlagOS ecosystem, an open-source AI system software\nstack that integrates models, systems, and chips behind one software layer.</p>"}
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

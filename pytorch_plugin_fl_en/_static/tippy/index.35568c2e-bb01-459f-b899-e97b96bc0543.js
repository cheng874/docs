selector_to_html = {"a[href=\"#pytorch-plugin-fl-documentation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">PyTorch-Plugin-FL Documentation<a class=\"headerlink\" href=\"#pytorch-plugin-fl-documentation\" title=\"Link to this heading\">#</a></h1><p><a class=\"sd-sphinx-override sd-btn sd-text-wrap sd-btn-primary sd-btn-lg sd-px-4 sd-py-2 sd-fw-bold reference internal\" href=\"getting_started/getting-started.html\"><span class=\"doc std std-doc\">Getting Started</span></a></p>", "a[href=\"user_guide/user-guide.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Guide<a class=\"headerlink\" href=\"#user-guide\" title=\"Link to this heading\">#</a></h1><p>This guide covers the usage of PyTorch-Plugin-FL, including basic operations, device management, backend configuration, and debugging.</p>", "a[href=\"getting_started/getting-started.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h1><p>This section covers the requirements for installing PyTorch-Plugin-FL and guides you through building and using the plugin on different hardware platforms.</p>", "a[href=\"user_guide/testing.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Run tests<a class=\"headerlink\" href=\"#run-tests\" title=\"Link to this heading\">#</a></h1><p>Tests in <code class=\"docutils literal notranslate\"><span class=\"pre\">tests/integration/ops/</span></code> are marked with <code class=\"docutils literal notranslate\"><span class=\"pre\">@pytest.mark</span></code> to indicate platform scope.</p>", "a[href=\"overview/overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">PyTorch-Plugin-FL Overview<a class=\"headerlink\" href=\"#pytorch-plugin-fl-overview\" title=\"Link to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">torch_fl</span></code> is a custom PyTorch device plugin based on the PrivateUse1 extension mechanism, registering <a class=\"reference external\" href=\"https://github.com/flagos-ai/FlagGems\">FlagGems</a> high-performance Triton operators as the <code class=\"docutils literal notranslate\"><span class=\"pre\">flagos</span></code> device backend for unified multi-chip support.</p>"}
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

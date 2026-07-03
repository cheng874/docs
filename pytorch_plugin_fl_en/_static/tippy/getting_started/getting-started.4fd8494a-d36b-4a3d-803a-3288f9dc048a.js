selector_to_html = {"a[href=\"#getting-started\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h1><p>This section covers the requirements for installing PyTorch-Plugin-FL and guides you through building and using the plugin on different hardware platforms.</p>", "a[href=\"requirements.html#hardware-runtime-dependencies\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Hardware Runtime Dependencies<a class=\"headerlink\" href=\"#hardware-runtime-dependencies\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html#flaggems\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">FlagGems<a class=\"headerlink\" href=\"#flaggems\" title=\"Link to this heading\">#</a></h2><p>FlagGems (version 5.0.2 or higher) is required with <code class=\"docutils literal notranslate\"><span class=\"pre\">DFLAGGEMS_BUILD_C_EXTENSIONS</span></code> enabled. For source installation, refer to the <a class=\"reference external\" href=\"https://flagos-ai.github.io/FlagGems/getting-started/install/\">FlagGems Installation Guide</a>.</p>", "a[href=\"install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Installation<a class=\"headerlink\" href=\"#installation\" title=\"Link to this heading\">#</a></h1><h2>Docker Images (Recommended)<a class=\"headerlink\" href=\"#docker-images-recommended\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html#docker-images-recommended\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker Images (Recommended)<a class=\"headerlink\" href=\"#docker-images-recommended\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><p>The following software versions are required for PyTorch-Plugin-FL.</p>", "a[href=\"install.html#build-environment-variables\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Build Environment Variables<a class=\"headerlink\" href=\"#build-environment-variables\" title=\"Link to this heading\">#</a></h2><h3>Runtime Environment Variables<a class=\"headerlink\" href=\"#runtime-environment-variables\" title=\"Link to this heading\">#</a></h3>", "a[href=\"install.html#build-from-source\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Build from Source<a class=\"headerlink\" href=\"#build-from-source\" title=\"Link to this heading\">#</a></h2><h3>CUDA platform<a class=\"headerlink\" href=\"#cuda-platform\" title=\"Link to this heading\">#</a></h3>", "a[href=\"requirements.html#software-dependencies\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software Dependencies<a class=\"headerlink\" href=\"#software-dependencies\" title=\"Link to this heading\">#</a></h2>"}
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

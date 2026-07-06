selector_to_html = {"a[href=\"#getting-started-with-transformerengine-fl\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started with TransformerEngine-FL<a class=\"headerlink\" href=\"#getting-started-with-transformerengine-fl\" title=\"Link to this heading\">#</a></h1><p>This section covers the requirements for installing TransformerEngine-FL and guides you through installing TransformerEngine-FL on different hardware platforms.</p>", "a[href=\"requirements.html#operating-system\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Operating system<a class=\"headerlink\" href=\"#operating-system\" title=\"Link to this heading\">#</a></h2><p>Linux (official), WSL2 (limited support)</p>", "a[href=\"requirements.html#source-build-requirements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Source Build Requirements<a class=\"headerlink\" href=\"#source-build-requirements\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html#docker-images-recommended\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker Images (Recommended)<a class=\"headerlink\" href=\"#docker-images-recommended\" title=\"Link to this heading\">#</a></h2><p>TransformerEngine-FL shares the same Docker image with Megatron-LM-FL:</p>", "a[href=\"requirements.html#software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software<a class=\"headerlink\" href=\"#software\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html#supported-hardwares\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Supported hardwares<a class=\"headerlink\" href=\"#supported-hardwares\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><h2>Supported hardwares<a class=\"headerlink\" href=\"#supported-hardwares\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install TransformerEngine-FL<a class=\"headerlink\" href=\"#install-transformerengine-fl\" title=\"Link to this heading\">#</a></h1><h2>Docker Images (Recommended)<a class=\"headerlink\" href=\"#docker-images-recommended\" title=\"Link to this heading\">#</a></h2><p>TransformerEngine-FL shares the same Docker image with Megatron-LM-FL:</p>", "a[href=\"install.html#direct-install-from-flagos-repository\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Direct install from FlagOS Repository<a class=\"headerlink\" href=\"#direct-install-from-flagos-repository\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html#install-from-source\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Install from source<a class=\"headerlink\" href=\"#install-from-source\" title=\"Link to this heading\">#</a></h2><p>For an end-to-end training workflow using TransformerEngine-FL, Megatron-LM-FL, and FlagScale, see <a class=\"reference internal\" href=\"#/e2e-use-case.md\"><span class=\"xref myst\">End-to-End Use Case: TransformerEngine-FL + Megatron-LM-FL + FlagScale</span></a>.</p>"}
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

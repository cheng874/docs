selector_to_html = {"a[href=\"requirements.html#source-build-requirements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Source Build Requirements<a class=\"headerlink\" href=\"#source-build-requirements\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><h2>Supported Hardwares<a class=\"headerlink\" href=\"#supported-hardwares\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html#software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software<a class=\"headerlink\" href=\"#software\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install Megatron-LM-FL<a class=\"headerlink\" href=\"#install-megatron-lm-fl\" title=\"Link to this heading\">#</a></h1><p>You can install Megatron-LM-FL through one of the following methods:</p>", "a[href=\"requirements.html#operating-system\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Operating system<a class=\"headerlink\" href=\"#operating-system\" title=\"Link to this heading\">#</a></h2><p>Linux (official), WSL2 (limited support)</p>", "a[href=\"requirements.html#supported-hardwares\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Supported Hardwares<a class=\"headerlink\" href=\"#supported-hardwares\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html#install-from-source\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Install from source<a class=\"headerlink\" href=\"#install-from-source\" title=\"Link to this heading\">#</a></h2><p>For an end-to-end training workflow using Megatron-LM-FL, TransformerEngine-FL, and FlagScale, see <a class=\"reference internal\" href=\"#../user_guide/e2e-use-case.md\"><span class=\"xref myst\">End-to-End Use Case</span></a>.</p>", "a[href=\"install.html#docker-recommended\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker (Recommended)<a class=\"headerlink\" href=\"#docker-recommended\" title=\"Link to this heading\">#</a></h2><h3>FlagOS Release Image (v0.2.0-rc2)<a class=\"headerlink\" href=\"#flagos-release-image-v0-2-0-rc2\" title=\"Link to this heading\">#</a></h3><p>Includes: torch 2.4.0a0, triton 3.0.0, trans-engine 2.14.0. Suitable for 100B+ parameter model pre-training.</p>", "a[href=\"#getting-started-with-megatron-lm-fl\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started with Megatron-LM-FL<a class=\"headerlink\" href=\"#getting-started-with-megatron-lm-fl\" title=\"Link to this heading\">#</a></h1><p>This section covers the requirements for installing Megatron-LM-FL and guides you through installing Megatron-LM-FL on different hardware platforms.</p>"}
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

selector_to_html = {"a[href=\"requirements.html#verified-models\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Verified models<a class=\"headerlink\" href=\"#verified-models\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html#docker-images-recommended\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker Images (Recommended)<a class=\"headerlink\" href=\"#docker-images-recommended\" title=\"Link to this heading\">#</a></h2><p>Pre-built Docker images for v0.1.0-rc2:</p>", "a[href=\"requirements.html#software-requirements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software requirements<a class=\"headerlink\" href=\"#software-requirements\" title=\"Link to this heading\">#</a></h2><p>The following software versions are required for sglang-plugin-FL.</p>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><h2>Software requirements<a class=\"headerlink\" href=\"#software-requirements\" title=\"Link to this heading\">#</a></h2><p>The following software versions are required for sglang-plugin-FL.</p>", "a[href=\"#getting-started\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h1><p>This section covers the requirements for installing sglang-plugin-FL and guides you through the installation process and running an inference task.</p>", "a[href=\"install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install sglang-plugin-FL<a class=\"headerlink\" href=\"#install-sglang-plugin-fl\" title=\"Link to this heading\">#</a></h1><h2>Docker Images (Recommended)<a class=\"headerlink\" href=\"#docker-images-recommended\" title=\"Link to this heading\">#</a></h2><p>Pre-built Docker images for v0.1.0-rc2:</p>", "a[href=\"requirements.html#hardware-requirements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Hardware requirements<a class=\"headerlink\" href=\"#hardware-requirements\" title=\"Link to this heading\">#</a></h2>"}
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

selector_to_html = {"a[href=\"install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install FlagTensor<a class=\"headerlink\" href=\"#install-flagtensor\" title=\"Link to this heading\">#</a></h1><h2>Quick Start (NVIDIA A100)<a class=\"headerlink\" href=\"#quick-start-nvidia-a100\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><h2>Hardware<a class=\"headerlink\" href=\"#hardware\" title=\"Link to this heading\">#</a></h2><p>NVIDIA GPU with CUDA support (for Triton execution and cuTensor baseline comparison).</p>", "a[href=\"requirements.html#hardware\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Hardware<a class=\"headerlink\" href=\"#hardware\" title=\"Link to this heading\">#</a></h2><p>NVIDIA GPU with CUDA support (for Triton execution and cuTensor baseline comparison).</p>", "a[href=\"#getting-started-with-flagtensor\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started with FlagTensor<a class=\"headerlink\" href=\"#getting-started-with-flagtensor\" title=\"Link to this heading\">#</a></h1>", "a[href=\"requirements.html#software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software<a class=\"headerlink\" href=\"#software\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html#quick-start-nvidia-a100\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Quick Start (NVIDIA A100)<a class=\"headerlink\" href=\"#quick-start-nvidia-a100\" title=\"Link to this heading\">#</a></h2>"}
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

selector_to_html = {"a[href=\"#install-flagtensor\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install FlagTensor<a class=\"headerlink\" href=\"#install-flagtensor\" title=\"Link to this heading\">#</a></h1><h2>Quick Start (NVIDIA A100)<a class=\"headerlink\" href=\"#quick-start-nvidia-a100\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#quick-start-nvidia-a100\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Quick Start (NVIDIA A100)<a class=\"headerlink\" href=\"#quick-start-nvidia-a100\" title=\"Link to this heading\">#</a></h2>"}
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

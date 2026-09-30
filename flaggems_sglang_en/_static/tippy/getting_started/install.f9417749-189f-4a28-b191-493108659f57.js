selector_to_html = {"a[href=\"#install-flaggems-sglang\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install FlagGems-sglang<a class=\"headerlink\" href=\"#install-flaggems-sglang\" title=\"Link to this heading\">#</a></h1><p>For a fresh installation of FlagGems-sglang, follow the steps below.</p>", "a[href=\"#verify-the-installation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Verify the installation<a class=\"headerlink\" href=\"#verify-the-installation\" title=\"Link to this heading\">#</a></h2>"}
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

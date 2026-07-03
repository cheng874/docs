selector_to_html = {"a[href=\"#build-dependencies\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Build dependencies<a class=\"headerlink\" href=\"#build-dependencies\" title=\"Link to this heading\">#</a></h2><p>The following packages are required to build FlagGems-sglang from source:</p>", "a[href=\"#hardware-requirements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Hardware requirements<a class=\"headerlink\" href=\"#hardware-requirements\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#requirements\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><p>Before installing FlagGems-sglang, ensure your environment meets the following requirements.</p>", "a[href=\"#software-requirements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software requirements<a class=\"headerlink\" href=\"#software-requirements\" title=\"Link to this heading\">#</a></h2>"}
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

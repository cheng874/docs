selector_to_html = {"a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u9a8c\u8bc1\u5b89\u88c5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#flaggems-sglang\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5 FlagGems-sglang<a class=\"headerlink\" href=\"#flaggems-sglang\" title=\"Link to this heading\">#</a></h1><p>\u5982\u9700\u5168\u65b0\u5b89\u88c5 FlagGems-sglang\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\u3002</p>"}
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

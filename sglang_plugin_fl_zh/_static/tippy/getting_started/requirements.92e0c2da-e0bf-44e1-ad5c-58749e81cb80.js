selector_to_html = {"a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5df2\u9a8c\u8bc1\u7684\u6a21\u578b<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>\u8f6f\u4ef6\u8981\u6c42<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>sglang-plugin-FL \u9700\u8981\u4ee5\u4e0b\u8f6f\u4ef6\u7248\u672c\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8f6f\u4ef6\u8981\u6c42<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>sglang-plugin-FL \u9700\u8981\u4ee5\u4e0b\u8f6f\u4ef6\u7248\u672c\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u786c\u4ef6\u8981\u6c42<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>"}
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

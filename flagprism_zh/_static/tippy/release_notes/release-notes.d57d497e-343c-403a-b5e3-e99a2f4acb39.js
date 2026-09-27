selector_to_html = {"a[href=\"#flagos-2-2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u672a\u53d1\u5e03\uff08FlagOS 2.2 \u5f00\u53d1\u4e2d\uff09<a class=\"headerlink\" href=\"#flagos-2-2\" title=\"Link to this heading\">#</a></h2><p>FlagPrism \u4f5c\u4e3a FlagTree \u9762\u5411 Triton \u7a0b\u5e8f\u7684\u53ef\u9009\u8c03\u8bd5\u4e0e\u6027\u80fd\u5206\u6790\u5de5\u5177\u5957\u4ef6\u9996\u6b21\u63a8\u51fa\u3002\u76ee\u524d\u5904\u4e8e\u6d3b\u8dc3\u5f00\u53d1\u4e2d\uff0c\u5c1a\u65e0\u6b63\u5f0f\u7248\u672c\u53d1\u5e03\uff0c\u901a\u8fc7 <code class=\"docutils literal notranslate\"><span class=\"pre\">third_party/FlagPrism</span></code> \u5b50\u6a21\u5757\u968f FlagTree wheel \u4e00\u8d77\u4ea4\u4ed8\uff0c\u4e0d\u518d\u5355\u72ec\u53d1\u5e03\u8c03\u8bd5\u5668/\u6027\u80fd\u5206\u6790\u5668 wheel\u3002</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u53d1\u5e03\u8bf4\u660e<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>\u672a\u53d1\u5e03\uff08FlagOS 2.2 \u5f00\u53d1\u4e2d\uff09<a class=\"headerlink\" href=\"#flagos-2-2\" title=\"Link to this heading\">#</a></h2><p>FlagPrism \u4f5c\u4e3a FlagTree \u9762\u5411 Triton \u7a0b\u5e8f\u7684\u53ef\u9009\u8c03\u8bd5\u4e0e\u6027\u80fd\u5206\u6790\u5de5\u5177\u5957\u4ef6\u9996\u6b21\u63a8\u51fa\u3002\u76ee\u524d\u5904\u4e8e\u6d3b\u8dc3\u5f00\u53d1\u4e2d\uff0c\u5c1a\u65e0\u6b63\u5f0f\u7248\u672c\u53d1\u5e03\uff0c\u901a\u8fc7 <code class=\"docutils literal notranslate\"><span class=\"pre\">third_party/FlagPrism</span></code> \u5b50\u6a21\u5757\u968f FlagTree wheel \u4e00\u8d77\u4ea4\u4ed8\uff0c\u4e0d\u518d\u5355\u72ec\u53d1\u5e03\u8c03\u8bd5\u5668/\u6027\u80fd\u5206\u6790\u5668 wheel\u3002</p>"}
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

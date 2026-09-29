selector_to_html = {"a[href=\"#v0-1-0\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">v0.1.0<a class=\"headerlink\" href=\"#v0-1-0\" title=\"Link to this heading\">#</a></h2><p><strong>\u53d1\u5e03\u65e5\u671f</strong>\uff1a2026-06-24</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u53d1\u5e03\u8bf4\u660e<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u53d1\u5e03\u8bf4\u660e\u8bb0\u5f55\u7528\u6237\u53ef\u89c1\u7684\u884c\u4e3a\u53d8\u5316\u4e0e\u652f\u6301\u8fb9\u754c\u53d8\u5316\u3002\u6027\u80fd\u6570\u5b57\u5fc5\u987b\u6709\u5ba1\u8ba1\u4ea7\u7269\u4f5c\u4e3a\u4f9d\u636e\uff0c\n\u4e0d\u80fd\u7531\u672c\u9875\u63a8\u65ad\u3002</p>", "a[href=\"#v0-2-0\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">v0.2.0<a class=\"headerlink\" href=\"#v0-2-0\" title=\"Link to this heading\">#</a></h2><p><strong>\u53d1\u5e03\u65e5\u671f</strong>\uff1a2026-09-11</p>"}
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

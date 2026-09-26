selector_to_html = {"a[href=\"#flagscale\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5 FlagScale<a class=\"headerlink\" href=\"#flagscale\" title=\"Link to this heading\">#</a></h1><p>\u5b89\u88c5\u524d\u8bf7\u5148\u9605\u8bfb<a class=\"reference internal\" href=\"requirements.html\"><span class=\"std std-doc\">\u8981\u6c42</span></a>\u3002</p>", "a[href=\"#id6\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">2. \u5b89\u88c5 FlagScale<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h3><p><strong>\u65b9\u5f0f\u4e00\uff1a\u901a\u8fc7 pip \u5b89\u88c5</strong></p>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u5305\u542b\u786c\u4ef6\u5e73\u53f0\u548c\u6a21\u578b\u7684\u76f8\u5173\u4fe1\u606f\u3002</p>", "a[href=\"#id3\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">\u63a8\u7406 / \u670d\u52a1\u540e\u7aef<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h4><p>\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684 flagscale-inference \u955c\u50cf\u3002</p>", "a[href=\"#id2\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">1. \u5b89\u88c5\u540e\u7aef<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h3><h4>\u63a8\u7406 / \u670d\u52a1\u540e\u7aef<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h4><p>\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684 flagscale-inference \u955c\u50cf\u3002</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u73af\u5883\u642d\u5efa<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><h3>1. \u5b89\u88c5\u540e\u7aef<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h3><h4>\u63a8\u7406 / \u670d\u52a1\u540e\u7aef<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h4><p>\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684 flagscale-inference \u955c\u50cf\u3002</p>", "a[href=\"#id4\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">\u8bad\u7ec3\u540e\u7aef<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h4><p>\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684 flagscale-train \u955c\u50cf\u3002</p>", "a[href=\"#id5\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">\u5f3a\u5316\u5b66\u4e60\u540e\u7aef<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h4><p>\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684 flagscale-train \u955c\u50cf\u3002</p>"}
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

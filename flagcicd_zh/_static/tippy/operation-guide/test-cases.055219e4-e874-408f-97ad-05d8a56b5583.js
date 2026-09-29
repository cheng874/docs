selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u6d4b\u8bd5\u7528\u4f8b<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u6d4b\u8bd5\u7528\u4f8b\u9875\u9762\u5c55\u793a\u5e73\u53f0\u7ba1\u7406\u7684\u6d4b\u8bd5\u7528\u4f8b\u5217\u8868\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5217\u8868\u5b57\u6bb5<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8bbf\u95ee\u8def\u5f84<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u5de6\u4fa7\u5bfc\u822a\u680f \u2192 <strong>\u6d4b\u8bd5\u7528\u4f8b</strong></p><p><a data-lightbox=\"image-set\" href=\"../_images/15-test-cases.png\">\n<img alt=\"\u6d4b\u8bd5\u7528\u4f8b\u5217\u8868\" src=\"../_images/15-test-cases.png\"/></a>\n</p>"}
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

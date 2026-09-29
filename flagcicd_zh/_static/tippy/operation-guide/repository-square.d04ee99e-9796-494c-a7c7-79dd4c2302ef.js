selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8bbf\u95ee\u8def\u5f84<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u5de6\u4fa7\u5bfc\u822a\u680f \u2192 <strong>\u4ed3\u5e93\u5e7f\u573a</strong></p><p><a data-lightbox=\"image-set\" href=\"../_images/04-repository-square-list.png\">\n<img alt=\"\u4ed3\u5e93\u5e7f\u573a\u5217\u8868\" src=\"../_images/04-repository-square-list.png\"/></a>\n</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u64cd\u4f5c\u8bf4\u660e<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>\u70b9\u51fb\u4ed3\u5e93\u5361\u7247\u8fdb\u5165\u4ed3\u5e93\u8be6\u60c5\u9875\uff0c\u67e5\u770b\u5de5\u4f5c\u6d41\u8fd0\u884c\u5b9e\u4f8b\u3001\u4ed3\u5e93\u8d28\u91cf\u3001\u5236\u54c1\u7b49\u4fe1\u606f\u3002</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ed3\u5e93\u5e7f\u573a<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u4ed3\u5e93\u5e7f\u573a\u5c55\u793a\u5e73\u53f0\u4e2d\u6240\u6709\u5df2\u6ce8\u518c\u7684\u4ed3\u5e93\uff0c\u7528\u6237\u53ef\u4ee5\u67e5\u770b\u4ed3\u5e93\u7684\u57fa\u672c\u4fe1\u606f\u548c\u8fd0\u884c\u72b6\u6001\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5217\u8868\u5b57\u6bb5<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>"}
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

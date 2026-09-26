selector_to_html = {"a[href=\"#github\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">GitHub \u4ed3\u5e93<a class=\"headerlink\" href=\"#github\" title=\"Link to this heading\">#</a></h3><p><a data-lightbox=\"image-set\" href=\"../_images/03-register-repository-github.png\">\n<img alt=\"\u6ce8\u518c GitHub \u4ed3\u5e93\" src=\"../_images/03-register-repository-github.png\"/></a>\n</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6ce8\u518c\u4ed3\u5e93<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u70b9\u51fb <strong>\u6ce8\u518c\u4ed3\u5e93</strong> \u6309\u94ae\uff0c\u9009\u62e9\u4ee3\u7801\u6258\u7ba1\u5e73\u53f0\u7c7b\u578b\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6ce8\u518c\u8868\u5355\u5b57\u6bb5<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#gitlink\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">GitLink \u4ed3\u5e93<a class=\"headerlink\" href=\"#gitlink\" title=\"Link to this heading\">#</a></h3><p><a data-lightbox=\"image-set\" href=\"../_images/02-register-repository-gitlink.png\">\n<img alt=\"\u6ce8\u518c GitLink \u4ed3\u5e93\" src=\"../_images/02-register-repository-gitlink.png\"/></a>\n</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8bbf\u95ee\u8def\u5f84<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u5de6\u4fa7\u5bfc\u822a\u680f \u2192 <strong>\u6211\u7684\u4ed3\u5e93</strong></p><p><a data-lightbox=\"image-set\" href=\"../_images/01-my-repository.png\">\n<img alt=\"\u6211\u7684\u4ed3\u5e93\u5217\u8868\" src=\"../_images/01-my-repository.png\"/></a>\n</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u6211\u7684\u4ed3\u5e93<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u6211\u7684\u4ed3\u5e93\u5c55\u793a\u5f53\u524d\u7528\u6237\u6ce8\u518c\u7684\u6240\u6709\u4ed3\u5e93\uff0c\u652f\u6301\u6ce8\u518c\u65b0\u4ed3\u5e93\u3002</p>"}
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

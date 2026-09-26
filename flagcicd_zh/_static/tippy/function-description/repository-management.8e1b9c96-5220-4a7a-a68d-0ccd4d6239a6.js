selector_to_html = {"a[href=\"../glossary/index.html#term-4\"]": "<dt id=\"term-4\">\u5e73\u53f0\u7ba1\u7406\u5458</dt><dd><p>\u62e5\u6709\u5e73\u53f0\u5168\u90e8\u6743\u9650\u7684\u7ba1\u7406\u89d2\u8272\uff0c\u5305\u542b\u7279\u6743\u7528\u6237\u6743\u9650\u3002</p></dd>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6210\u5458\u7ba1\u7406\u89c4\u5219<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6a21\u5757\u8bf4\u660e<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#gitlink\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">GitLink \u652f\u6301\u8bf4\u660e<a class=\"headerlink\" href=\"#gitlink\" title=\"Link to this heading\">#</a></h2><p>FlagCICD \u652f\u6301\u56fd\u4ea7\u4ee3\u7801\u4ed3\u5e93 GitLink\uff0c\u4f46\u5b58\u5728\u4ee5\u4e0b\u9650\u5236\uff1a</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6982\u8ff0<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u4ed3\u5e93\u7ba1\u7406\u662f FlagCICD \u7684\u6838\u5fc3\u529f\u80fd\u4e4b\u4e00\uff0c\u7528\u6237\u53ef\u4ee5\u6ce8\u518c GitHub \u6216 GitLink \u4ed3\u5e93\uff0c\u7ba1\u7406\u4ed3\u5e93\u6210\u5458\u534f\u4f5c\uff0c\u67e5\u770b\u5de5\u4f5c\u6d41\u8fd0\u884c\u72b6\u6001\u3002</p>", "a[href=\"../glossary/index.html#term-Workflow\"]": "<dt id=\"term-Workflow\">Workflow</dt><dd><p>\u5de5\u4f5c\u6d41\uff0c\u5b9a\u4e49 CI/CD \u4efb\u52a1\u6d41\u7a0b\u3002</p></dd>", "a[href=\"../glossary/index.html#term-7\"]": "<dt id=\"term-7\">\u4ed3\u5e93\u7ba1\u7406\u5458</dt><dd><p>\u7ba1\u7406\u7279\u5b9a\u4ed3\u5e93\u7684\u7528\u6237\u3002</p></dd>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ed3\u5e93\u7ba1\u7406<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u4ed3\u5e93\u7ba1\u7406\u529f\u80fd\u652f\u6301\u5e73\u53f0\u6ce8\u518c\u548c\u7ba1\u7406\u4ee3\u7801\u4ed3\u5e93\uff0c\u63d0\u4f9b\u4ed3\u5e93\u5e7f\u573a\u3001\u6211\u7684\u4ed3\u5e93\u548c\u6210\u5458\u7ba1\u7406\u4e09\u5927\u6a21\u5757\uff0c\u652f\u6301 GitHub \u548c GitLink \u4e24\u79cd\u4ee3\u7801\u6258\u7ba1\u5e73\u53f0\u3002</p>"}
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

selector_to_html = {"a[href=\"repository-management.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ed3\u5e93\u7ba1\u7406<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u4ed3\u5e93\u7ba1\u7406\u529f\u80fd\u652f\u6301\u5e73\u53f0\u6ce8\u518c\u548c\u7ba1\u7406\u4ee3\u7801\u4ed3\u5e93\uff0c\u63d0\u4f9b\u4ed3\u5e93\u5e7f\u573a\u3001\u6211\u7684\u4ed3\u5e93\u548c\u6210\u5458\u7ba1\u7406\u4e09\u5927\u6a21\u5757\uff0c\u652f\u6301 GitHub \u548c GitLink \u4e24\u79cd\u4ee3\u7801\u6258\u7ba1\u5e73\u53f0\u3002</p>", "a[href=\"test-matrix.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Test Matrix \u6d4b\u8bd5\u77e9\u9635<a class=\"headerlink\" href=\"#test-matrix\" title=\"Link to this heading\">#</a></h1><p>Test Matrix \u662f FlagCICD \u57fa\u7840\u5c42\u7684\u6838\u5fc3\u6d4b\u8bd5\u7ec4\u4ef6\uff0c\u91c7\u7528\u6f0f\u6597\u5f0f\u5206\u5c42\u89e6\u53d1\u673a\u5236\uff0c\u5b9e\u73b0\u4ece\u5feb\u901f\u53cd\u9988\u5230\u5927\u89c4\u6a21\u6027\u80fd\u6d4b\u8bd5\u7684\u5b8c\u6574\u6d4b\u8bd5\u4f53\u7cfb\u3002</p>", "a[href=\"artifact-management.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5236\u54c1\u7ba1\u7406<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u5236\u54c1\u7ba1\u7406\u529f\u80fd\u7528\u4e8e\u7ba1\u7406\u5e73\u53f0\u6784\u5efa\u4ea7\u7269\uff0c\u5305\u62ec Docker \u5bb9\u5668\u955c\u50cf\u548c Python Wheel \u5305\uff0c\u63d0\u4f9b\u641c\u7d22\u3001\u7b5b\u9009\u548c\u6392\u5e8f\u529f\u80fd\u3002</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u529f\u80fd\u8bf4\u660e<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u7ae0\u8282\u4ecb\u7ecd FlagCICD \u5e73\u53f0\u7684\u6838\u5fc3\u529f\u80fd\u6a21\u5757\u3002</p>", "a[href=\"runner-scale-set.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Runner Scale Set<a class=\"headerlink\" href=\"#runner-scale-set\" title=\"Link to this heading\">#</a></h1><p>Runner Scale Set \u662f FlagCICD \u7684\u8d44\u6e90\u6c60\u7ba1\u7406\u673a\u5236\uff0c\u901a\u8fc7 AutoscalingRunnerSet \u5b9e\u73b0 Runner \u7684\u81ea\u52a8\u6269\u7f29\u5bb9\uff0c\u914d\u5408 Volcano \u8c03\u5ea6\u5668\u4e3a\u9879\u76ee\u5212\u5206\u8d44\u6e90\u914d\u989d\u3002</p>"}
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

selector_to_html = {"a[href=\"test-cases.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u6d4b\u8bd5\u7528\u4f8b<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u6d4b\u8bd5\u7528\u4f8b\u9875\u9762\u5c55\u793a\u5e73\u53f0\u7ba1\u7406\u7684\u6d4b\u8bd5\u7528\u4f8b\u5217\u8868\u3002</p>", "a[href=\"model-center.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u6a21\u578b\u4e2d\u5fc3<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u6a21\u578b\u4e2d\u5fc3\u5c55\u793a\u5e73\u53f0\u6258\u7ba1\u7684\u6a21\u578b\u5217\u8868\uff0c\u4ec5\u663e\u793a\u72b6\u6001\u4e3a\u6210\u529f\u7684\u6a21\u578b\u3002</p>", "a[href=\"repository-square.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ed3\u5e93\u5e7f\u573a<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u4ed3\u5e93\u5e7f\u573a\u5c55\u793a\u5e73\u53f0\u4e2d\u6240\u6709\u5df2\u6ce8\u518c\u7684\u4ed3\u5e93\uff0c\u7528\u6237\u53ef\u4ee5\u67e5\u770b\u4ed3\u5e93\u7684\u57fa\u672c\u4fe1\u606f\u548c\u8fd0\u884c\u72b6\u6001\u3002</p>", "a[href=\"repository-detail.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ed3\u5e93\u8be6\u60c5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u4ed3\u5e93\u8be6\u60c5\u9875\u5c55\u793a\u5355\u4e2a\u4ed3\u5e93\u7684\u5b8c\u6574\u4fe1\u606f\uff0c\u5305\u62ec\u5de5\u4f5c\u6d41\u8fd0\u884c\u5b9e\u4f8b\u3001\u4ed3\u5e93\u8d28\u91cf\u3001\u6d41\u6c34\u7ebf\u6548\u7387\u3001Benchmark \u5bf9\u6bd4\u3001\u5236\u54c1\u548c\u8bbe\u7f6e\u3002</p>", "a[href=\"artifacts.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5236\u54c1\u7ba1\u7406<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u5236\u54c1\u7ba1\u7406\u6a21\u5757\u7528\u4e8e\u7ba1\u7406\u5e73\u53f0\u4e2d\u7684\u6784\u5efa\u4ea7\u7269\uff0c\u5305\u62ec\u5bb9\u5668 <a class=\"reference internal\" href=\"../glossary/index.html#term-0\"><span class=\"xref std std-term\">\u955c\u50cf</span></a> \u548c Python <a class=\"reference internal\" href=\"../glossary/index.html#term-Wheel\"><span class=\"xref std std-term\">Wheel</span></a> \u5305\u3002</p>", "a[href=\"resource-specs.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8d44\u6e90\u89c4\u683c<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u8d44\u6e90\u89c4\u683c\u9875\u9762\u5c55\u793a\u5e73\u53f0\u652f\u6301\u7684\u6240\u6709\u8ba1\u7b97\u8d44\u6e90\u89c4\u683c\uff0c\u7528\u6237\u53ef\u4ee5\u67e5\u770b\u4e0d\u540c\u82af\u7247\u7c7b\u578b\u548c\u914d\u7f6e\u7684\u8d44\u6e90\u8be6\u60c5\u3002</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u64cd\u4f5c\u6307\u5357<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u7ae0\u8282\u4ecb\u7ecd FlagCICD \u5e73\u53f0\u5404\u6a21\u5757\u7684\u8be6\u7ec6\u64cd\u4f5c\u6b65\u9aa4\u3002</p>", "a[href=\"my-repository.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u6211\u7684\u4ed3\u5e93<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u6211\u7684\u4ed3\u5e93\u5c55\u793a\u5f53\u524d\u7528\u6237\u6ce8\u518c\u7684\u6240\u6709\u4ed3\u5e93\uff0c\u652f\u6301\u6ce8\u518c\u65b0\u4ed3\u5e93\u3002</p>"}
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

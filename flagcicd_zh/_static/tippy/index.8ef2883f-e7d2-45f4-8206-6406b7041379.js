selector_to_html = {"a[href=\"faq/index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5e38\u89c1\u95ee\u9898<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>Q1: \u8bbf\u95ee\u4ee4\u724c\u9700\u8981\u4ec0\u4e48\u6743\u9650\uff1f<a class=\"headerlink\" href=\"#q1\" title=\"Link to this heading\">#</a></h2><p>\u8bbf\u95ee\u4ee4\u724c\u9700\u8981 Admin \u7684\u5199\u6743\u9650\uff0c\u7528\u4e8e runner \u7684\u521b\u5efa\u3002</p>", "a[href=\"operation-guide/index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u64cd\u4f5c\u6307\u5357<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u7ae0\u8282\u4ecb\u7ecd FlagCICD \u5e73\u53f0\u5404\u6a21\u5757\u7684\u8be6\u7ec6\u64cd\u4f5c\u6b65\u9aa4\u3002</p>", "a[href=\"getting-started/index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5feb\u901f\u5165\u95e8<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6307\u5357\u5e2e\u52a9\u60a8\u5feb\u901f\u5f00\u59cb\u4f7f\u7528 FlagCICD \u5e73\u53f0\u3002</p>", "a[href=\"function-description/index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u529f\u80fd\u8bf4\u660e<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u7ae0\u8282\u4ecb\u7ecd FlagCICD \u5e73\u53f0\u7684\u6838\u5fc3\u529f\u80fd\u6a21\u5757\u3002</p>", "a[href=\"glossary/index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u672f\u8bed\u8868<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6587\u6863\u5b9a\u4e49\u4e86 FlagCICD \u5e73\u53f0\u4e2d\u4f7f\u7528\u7684\u672f\u8bed\u3002</p>", "a[href=\"overview/index.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5e73\u53f0\u6982\u8ff0<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagCICD \u662f\u4e00\u4e2a\u9762\u5411\u591a\u82af\u7247\u5f00\u6e90\u9879\u76ee\u7684\u7edf\u4e00 <a class=\"reference internal\" href=\"glossary/index.html#term-CI-CD\"><span class=\"xref std std-term\">CI/CD</span></a> \u5e73\u53f0\uff0c\u6838\u5fc3\u76ee\u6807\u662f\u89e3\u51b3 AI \u57fa\u7840\u8bbe\u65bd\u201d\u788e\u7247\u5316\u201d\u6311\u6218\uff0c\u5b9e\u73b0\u5927\u6a21\u578b\u8f6f\u4ef6\u6808\u4ece CUDA \u5411\u56fd\u4ea7\u82af\u7247\u7684\u9ad8\u6548\u8fc1\u79fb\u4e0e\u9002\u914d\u3002</p>", "a[href=\"#flagcicd\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagCICD \u6587\u6863\u4e2d\u5fc3<a class=\"headerlink\" href=\"#flagcicd\" title=\"Link to this heading\">#</a></h1><p><a class=\"sd-sphinx-override sd-btn sd-text-wrap sd-btn-primary sd-btn-lg sd-px-4 sd-py-2 sd-fw-bold reference internal\" href=\"getting-started/index.html\"><span class=\"doc\">\u5feb\u901f\u5165\u95e8</span></a></p>"}
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

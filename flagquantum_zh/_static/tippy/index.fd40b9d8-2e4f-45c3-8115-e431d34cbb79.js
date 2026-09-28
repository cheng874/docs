selector_to_html = {"a[href=\"user_guide/user-guide.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7528\u6237\u6307\u5357<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6307\u5357\u6db5\u76d6\u5982\u4f55\u4f7f\u7528 FlagQuantum \u8fdb\u884c\u91cf\u5b50\u7535\u8def\u6a21\u62df\uff0c\u5305\u62ec\u57fa\u672c\u4f7f\u7528\u3001\u5e26\u53ef\u8bad\u7ec3\u53c2\u6570\u7684\u53c2\u6570\u5316\u95e8\u3001\u91cf\u5b50\u7f16\u7801\u3001\u6ce8\u518c\u81ea\u5b9a\u4e49\u95e8\u3001\u5206\u5e03\u5f0f\u591a GPU \u6267\u884c\u4ee5\u53ca\u5185\u5b58\u53ef\u9006\u6a21\u5f0f\u3002</p>", "a[href=\"#flagquantum\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagQuantum \u6587\u6863<a class=\"headerlink\" href=\"#flagquantum\" title=\"Link to this heading\">#</a></h1><p><a class=\"sd-sphinx-override sd-btn sd-text-wrap sd-btn-primary sd-btn-lg sd-px-4 sd-py-2 sd-fw-bold reference internal\" href=\"getting_started/getting-started.html\"><span class=\"doc std std-doc\">\u5feb\u901f\u5165\u95e8</span></a></p>", "a[href=\"getting_started/getting-started.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5feb\u901f\u5165\u95e8<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u4ecb\u7ecd\u5b89\u88c5 FlagQuantum \u7684\u8981\u6c42\uff0c\u5e76\u6307\u5bfc\u60a8\u5b8c\u6210\u5b89\u88c5\u8fc7\u7a0b\u3002</p>", "a[href=\"FlagQuantum_overview/FlagQuantum-overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagQuantum \u6982\u89c8<a class=\"headerlink\" href=\"#flagquantum\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u662f\u4e00\u4e2a\u57fa\u4e8e PyTorch \u6784\u5efa\u7684\u9ad8\u6027\u80fd\u5206\u5e03\u5f0f\u91cf\u5b50\u72b6\u6001\u5411\u91cf\u6a21\u62df\u5668\uff0c\u652f\u6301\u8de8\u591a\u4e2a GPU \u7684\u91cf\u5b50\u7535\u8def\u6a21\u62df\uff0c\u5177\u5907\u81ea\u52a8\u5206\u7247\u548c\u91cd\u65b0\u5206\u7247\u529f\u80fd\uff0c\u540c\u65f6\u4e5f\u80fd\u65e0\u7f1d\u652f\u6301\u771f\u5b9e\u91cf\u5b50\u786c\u4ef6\u6267\u884c\u3002\u5b83\u662f FlagOS \u751f\u6001\u7cfb\u7edf\u7684\u4e00\u90e8\u5206\u2014\u2014\u4e00\u4e2a\u7edf\u4e00\u7684\u3001\u5f00\u6e90\u7684 AI \u7cfb\u7edf\u8f6f\u4ef6\u6808\uff0c\u901a\u8fc7\u65e0\u7f1d\u96c6\u6210\u5404\u79cd\u6a21\u578b\u3001\u7cfb\u7edf\u548c\u82af\u7247\uff0c\u4fc3\u8fdb\u5f00\u653e\u6280\u672f\u751f\u6001\u7684\u53d1\u5c55\u3002</p>"}
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

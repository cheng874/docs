selector_to_html = {"a[href=\"user_guide/user-guide.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7528\u6237\u6307\u5357<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6307\u5357\u4ecb\u7ecd\u5982\u4f55\u7528 FlagQuantum \u6784\u5efa\u3001\u89c4\u5212\u3001\u8bad\u7ec3\u5e76\u8fd0\u884c\u91cf\u5b50\u7a0b\u5e8f\u3002</p>", "a[href=\"#flagquantum\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagQuantum \u6587\u6863<a class=\"headerlink\" href=\"#flagquantum\" title=\"Link to this heading\">#</a></h1><p><a class=\"sd-sphinx-override sd-btn sd-text-wrap sd-btn-primary sd-btn-lg sd-px-4 sd-py-2 sd-fw-bold reference internal\" href=\"getting_started/getting-started.html\"><span class=\"doc std std-doc\">\u5feb\u901f\u5165\u95e8</span></a></p>", "a[href=\"getting_started/getting-started.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagQuantum \u5feb\u901f\u5165\u95e8<a class=\"headerlink\" href=\"#flagquantum\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u4ecb\u7ecd FlagQuantum \u7684\u5b89\u88c5\u8981\u6c42\u3001\u5b89\u88c5\u8fc7\u7a0b\uff0c\u4ee5\u53ca\u7b2c\u4e00\u4e2a\u53ef\u8bad\u7ec3\u7684\u91cf\u5b50\u6a21\u578b\u3002</p>", "a[href=\"overview/overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u6982\u89c8<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u662f\u4e00\u4e2a\u57fa\u4e8e PyTorch \u6784\u5efa\u7684\u5206\u5e03\u5f0f\u3001\u53ef\u5fae\u91cf\u5b50\u8ba1\u7b97\u6846\u67b6\u3002\u5b83\u628a\u91cf\u5b50\u7ebf\u8def\u53d8\u6210\u53ef\u8bad\u7ec3\u6a21\u578b\uff1a\u540c\u4e00\u4e2a\u7a0b\u5e8f\u65e2\u53ef\u4ee5\u7528 PyTorch \u5e38\u89c4\u4f18\u5316\u5668\u8bad\u7ec3\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e0d\u540c\u8868\u793a\u5f62\u5f0f\u6a21\u62df\uff0c\u5728\u8d1f\u8f7d\u9700\u8981\u65f6\u8de8\u5361\u5207\u5206\uff0c\u5e76\u5728\u8fdc\u7a0b\u7b97\u529b\u6216\u91cf\u5b50\u786c\u4ef6\u4e0a\u6c42\u503c\u3002\u5b83\u5c5e\u4e8e FlagOS \u751f\u6001\u2014\u2014\u4e00\u4e2a\u7edf\u4e00\u7684\u5f00\u6e90 AI \u7cfb\u7edf\u8f6f\u4ef6\u6808\uff0c\u7528\u6765\u6574\u5408\u591a\u6837\u5316\u7684\u6a21\u578b\u3001\u7cfb\u7edf\u4e0e\u82af\u7247\u3002</p>", "a[href=\"reference/reference.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u53c2\u8003\u8d44\u6599<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u7a33\u5b9a\u63a5\u53e3\u3001\u80fd\u529b\u6210\u719f\u5ea6\u3001\u8fd0\u884c\u65f6\u5951\u7ea6\u4e0e\u5f53\u524d\u652f\u6301\u8fb9\u754c\u3002</p>"}
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

selector_to_html = {"a[href=\"reference/reference.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u53c2\u8003<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u5305\u542b FlagTensor \u9a8c\u6536\u6587\u6863\uff0c\u6db5\u76d6\u7b56\u7565\u3001CI/CD \u5de5\u4f5c\u6d41\u3001\u7b97\u5b50\u8986\u76d6\u7387\u548c\u6807\u51c6\u547d\u4ee4\u3002</p>", "a[href=\"user_guide/user-guide.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u7528\u6237\u6307\u5357<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><h2>\u4f7f\u7528 FlagTensor<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>FlagTensor \u76f4\u63a5\u4e0e PyTorch \u96c6\u6210\u3002\u5bfc\u5165\u5305\u5e76\u5bf9 CUDA \u5f20\u91cf\u8c03\u7528\u7b97\u5b50\uff1a</p>", "a[href=\"getting_started/getting-started.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u5feb\u901f\u5165\u95e8<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#flagtensor\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u6587\u6863<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><p><a class=\"sd-sphinx-override sd-btn sd-text-wrap sd-btn-primary sd-btn-lg sd-px-4 sd-py-2 sd-fw-bold reference internal\" href=\"getting_started/getting-started.html\"><span class=\"doc std std-doc\">\u5feb\u901f\u5165\u95e8</span></a></p>", "a[href=\"overview/overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u6982\u89c8<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><p>FlagTensor \u662f <a class=\"reference external\" href=\"https://flagos.io/\">FlagOS</a> \u7684\u7ec4\u6210\u90e8\u5206\u3002FlagOS \u662f\u4e00\u4e2a\u5b8c\u5168\u5f00\u6e90\u7684\u7cfb\u7edf\u8f6f\u4ef6\u6808\uff0c\u65e8\u5728\u7edf\u4e00\u6a21\u578b-\u7cfb\u7edf-\u82af\u7247\u5404\u5c42\uff0c\u8425\u9020\u5f00\u653e\u534f\u4f5c\u7684\u751f\u6001\u7cfb\u7edf\u3002\u5b83\u652f\u6301\u8de8\u591a\u79cd AI \u52a0\u901f\u5668\u7684\u201d\u4e00\u6b21\u5f00\u53d1\uff0c\u5904\u5904\u8fd0\u884c\u201d\u5de5\u4f5c\u6d41\uff0c\u91ca\u653e\u786c\u4ef6\u6027\u80fd\uff0c\u6d88\u9664 AI \u82af\u7247\u7279\u5b9a\u8f6f\u4ef6\u6808\u4e4b\u95f4\u7684\u788e\u7247\u5316\uff0c\u5e76\u5927\u5e45\u964d\u4f4e\u79fb\u690d\u548c\u7ef4\u62a4 AI \u5de5\u4f5c\u8d1f\u8f7d\u7684\u6210\u672c\u3002</p><p>FlagTensor \u662f\u4e00\u4e2a\u4f7f\u7528 <a class=\"reference external\" href=\"https://github.com/openai/triton\">Triton</a> \u8bed\u8a00\u5b9e\u73b0\u7684\u9ad8\u6027\u80fd\u5f20\u91cf\u539f\u8bed\u5e93\u3002\u5b83\u63d0\u4f9b\u5e38\u89c1\u5f20\u91cf\u539f\u8bed\uff08\u4e00\u5143\u3001\u4e8c\u5143\u548c\u5f20\u91cf\u6536\u7f29\u64cd\u4f5c\uff09\u7684\u4f18\u5316\u5b9e\u73b0\uff0c\u4ee5 <a class=\"reference external\" href=\"https://developer.nvidia.com/cutensor\">cuTensor</a> \u57fa\u7ebf\u4e3a\u57fa\u51c6\uff0c\u5728\u4e0d\u540c GPU \u67b6\u6784\u4e0a\u63d0\u4f9b\u53c2\u8003\u7ea7\u6b63\u786e\u6027\u548c\u5177\u6709\u7ade\u4e89\u529b\u7684\u6027\u80fd\u3002</p>"}
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

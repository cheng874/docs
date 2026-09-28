selector_to_html = {"a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e3a\u4ec0\u4e48\u9009\u62e9 FlagQuantum\uff1f<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>\u968f\u7740\u91cf\u5b50\u7535\u8def\u7684\u91cf\u5b50\u6bd4\u7279\u6570\u91cf\u548c\u6df1\u5ea6\u4e0d\u65ad\u589e\u52a0\uff0c\u7ecf\u5178\u6a21\u62df\u7684\u6210\u672c\u53d8\u5f97\u6781\u5176\u9ad8\u6602\u3002FlagQuantum \u901a\u8fc7\u5206\u5e03\u5f0f GPU \u52a0\u901f\u6765\u89e3\u51b3\u8fd9\u4e00\u6311\u6218\uff0c\u540c\u65f6\u4fdd\u6301\u7075\u6d3b\u3001\u53ef\u6269\u5c55\u7684\u67b6\u6784\u3002\u5b83\u5f25\u5408\u4e86\u6a21\u62df\u4e0e\u771f\u5b9e\u786c\u4ef6\u4e4b\u95f4\u7684\u9e3f\u6c9f\uff0c\u5b9e\u73b0\u4e86\u4ece\u5f00\u53d1\u5230\u90e8\u7f72\u7684\u65e0\u7f1d\u8fc7\u6e21\u3002</p>", "a[href=\"#flagquantum\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagQuantum \u6982\u89c8<a class=\"headerlink\" href=\"#flagquantum\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u662f\u4e00\u4e2a\u57fa\u4e8e PyTorch \u6784\u5efa\u7684\u9ad8\u6027\u80fd\u5206\u5e03\u5f0f\u91cf\u5b50\u72b6\u6001\u5411\u91cf\u6a21\u62df\u5668\uff0c\u652f\u6301\u8de8\u591a\u4e2a GPU \u7684\u91cf\u5b50\u7535\u8def\u6a21\u62df\uff0c\u5177\u5907\u81ea\u52a8\u5206\u7247\u548c\u91cd\u65b0\u5206\u7247\u529f\u80fd\uff0c\u540c\u65f6\u4e5f\u80fd\u65e0\u7f1d\u652f\u6301\u771f\u5b9e\u91cf\u5b50\u786c\u4ef6\u6267\u884c\u3002\u5b83\u662f FlagOS \u751f\u6001\u7cfb\u7edf\u7684\u4e00\u90e8\u5206\u2014\u2014\u4e00\u4e2a\u7edf\u4e00\u7684\u3001\u5f00\u6e90\u7684 AI \u7cfb\u7edf\u8f6f\u4ef6\u6808\uff0c\u901a\u8fc7\u65e0\u7f1d\u96c6\u6210\u5404\u79cd\u6a21\u578b\u3001\u7cfb\u7edf\u548c\u82af\u7247\uff0c\u4fc3\u8fdb\u5f00\u653e\u6280\u672f\u751f\u6001\u7684\u53d1\u5c55\u3002</p>"}
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

selector_to_html = {"a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u90e8\u7f72\u4e0e\u786c\u4ef6\u6267\u884c<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e00\u4e2a\u7a0b\u5e8f\uff0c\u591a\u79cd\u8868\u793a<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id6\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6570\u5b57\u5b6a\u751f\u4e0e\u7ea0\u9519<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7279\u6027<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u9875\u6982\u8ff0 FlagQuantum \u63d0\u4f9b\u7684\u80fd\u529b\uff0c\u6bcf\u9879\u80fd\u529b\u90fd\u6307\u5411\u4ecb\u7ecd\u5176\u63a5\u53e3\u4e0e\u8bc1\u636e\u8fb9\u754c\u7684\u6307\u5357\u9875\u9762\u3002</p>", "a[href=\"#id8\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8bc1\u636e\u7eaa\u5f8b<a class=\"headerlink\" href=\"#id8\" title=\"Link to this heading\">#</a></h2><p>\u5df2\u5b9e\u73b0\u7684 API\u3001\u901a\u8fc7\u7684\u7b97\u4f8b\u6b63\u786e\u6027\u68c0\u67e5\u3001\u5386\u53f2\u6d4b\u91cf\u7ed3\u679c\u4e0e\u7814\u7a76\u76ee\u6807\uff0c\u662f\u4e09\u4ef6\u4e0d\u540c\u7684\u4e8b\u3002\u6bcf\u9879\u80fd\u529b\u90fd\u6709\u7b49\u7ea7\uff08\u53d1\u5e03\u8ba4\u8bc1\uff0f\u751f\u4ea7\u53ef\u7528\uff0f\u5f00\u53d1\u8bc1\u636e\uff0f\u5b9e\u9a8c\u6027\uff09\uff0c\u4e14\u7b49\u7ea7\u7ed1\u5b9a\u5230\u5b9e\u9645\u9a8c\u8bc1\u8fc7\u7684\u8d1f\u8f7d\u4e0e\u73af\u5883\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6d4b\u91cf\u3001\u566a\u58f0\u4e0e\u7cbe\u5ea6<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7ebf\u8def\u3001\u7f16\u8bd1\u4e0e\u89c4\u5212<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#pytorch\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">PyTorch \u539f\u751f\u7684\u91cf\u5b50\u8bad\u7ec3<a class=\"headerlink\" href=\"#pytorch\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id7\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u751f\u6001\u4e0e\u6269\u5c55<a class=\"headerlink\" href=\"#id7\" title=\"Link to this heading\">#</a></h2>"}
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

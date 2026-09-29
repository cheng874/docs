selector_to_html = {"a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fb9\u754c<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ece\u5b58\u50a8\u5b9e\u9a8c\u5f00\u59cb<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u4e09\u6570\u636e\u6bd4\u7279\u91cd\u590d\u7801\u5b58\u50a8\u5b9e\u9a8c\u4f1a\u6ce8\u5165\u4e00\u4e2a\u9519\u8bef\uff0c\u5e76\u8ddf\u8e2a\u5b83\u7ecf\u8fc7\u75c7\u72b6\u63d0\u53d6\u3001\u8bd1\u7801\u4e0e\u7ea0\u6b63\u7684\u5168\u8fc7\u7a0b\uff1a</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u91cf\u5b50\u7ea0\u9519<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u91cf\u5b50\u7ea0\u9519\u628a\u75c7\u72b6\u63d0\u53d6\u3001\u8bd1\u7801\u3001\u7ea0\u6b63\u4e0e\u903b\u8f91\u7ed3\u679c\u5206\u6790\u8fde\u6210\u4e00\u6761\u6d41\u7a0b\u3002\u957f\u671f\u76ee\u6807\u662f\u9762\u5411\u5bb9\u9519\u91cf\u5b50\u8ba1\u7b97\u7814\u7a76\u7684\u5b8c\u6574\u5de5\u4f5c\u6d41\uff0c\u5305\u62ec\u903b\u8f91\u64cd\u4f5c\u4e0e\u786c\u4ef6\u53cd\u9988\u3002</p><p>QEC \u9886\u57df\u6301\u6709\u7801\u3001\u8bd1\u7801\u8bed\u4e49\u3001\u63a2\u6d4b\u4e8b\u4ef6\u4e0e Pauli \u5e27\u3002\u5b83\u7ec4\u5408\u7f16\u8bd1\u5668\u7684\u63a7\u5236\u6d41\u3001\u8fd0\u884c\u65f6\u53cd\u9988\u3001\u6a21\u62df\u5185\u6838\u3001\u566a\u58f0\u6a21\u578b\u4e0e\u8fdc\u7a0b\u786c\u4ef6\u63a5\u53e3\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u4e0e\u6821\u9a8c<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>\u9488\u5bf9\u5df2\u77e5\u6ce8\u5165\u9519\u8bef\uff0c\u68c0\u67e5\u75c7\u72b6\u5386\u53f2\u3001\u7ea0\u6b63\u52a8\u4f5c\u4e0e\u6700\u7ec8\u903b\u8f91\u7ed3\u679c\u3002\u4fee\u6539\u8bd1\u7801\u5668\u65f6\u8fd8\u5fc5\u987b\u8986\u76d6\u8bfb\u51fa\u6545\u969c\u4e0e\u672b\u8f6e\u9644\u8fd1\u7684\u9519\u8bef\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u53c2\u8003\u5b9e\u73b0\u8986\u76d6\u7684\u5185\u5bb9<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>"}
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

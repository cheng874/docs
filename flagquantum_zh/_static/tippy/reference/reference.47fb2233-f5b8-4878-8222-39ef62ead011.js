selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u53c2\u8003\u8d44\u6599<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u7a33\u5b9a\u63a5\u53e3\u3001\u80fd\u529b\u6210\u719f\u5ea6\u3001\u8fd0\u884c\u65f6\u5951\u7ea6\u4e0e\u5f53\u524d\u652f\u6301\u8fb9\u754c\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5951\u7ea6\u4e0e\u7b56\u7565<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7ed3\u8bba\u8fb9\u754c<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u672c\u5730\u6267\u884c\u3001\u5df2\u6ce8\u518c\u7684\u4e0b\u6c89\u652f\u6301\u3001\u5206\u5e03\u5f0f\u5f00\u53d1\u63a2\u9488\u4e0e\u53d1\u5e03\u7ea7\u53ef\u6269\u5c55\u6027\u662f\u5f7c\u6b64\u72ec\u7acb\u7684\u7ed3\u8bba\u3002\u6ce8\u518c\u4e86\u4e0b\u6c89\u53ea\u8bc1\u660e\u67d0\u7b97\u5b50\u53ef\u5728\u67d0\u8def\u5f84\u4e0a\u6267\u884c\uff0c\u5e76\u4e0d\u8bc1\u660e\u8be5\u8def\u5f84\u5728\u751f\u4ea7\u89c4\u6a21\u4e0a\u53ef\u7528\u3002\u5206\u5e03\u5f0f\u4e0e\u52a0\u901f\u5361\u7ed3\u8bba\u8fd8\u989d\u5916\u8981\u6c42\u7531\u8fd0\u884c\u65f6\u751f\u6210\u7684\u8bc1\u636e\uff0c\u5e76\u901a\u8fc7\u4ed3\u5e93\u7684\u57fa\u51c6\u5ba1\u8ba1\u4e0e\u53d1\u5e03\u7b56\u7565\u3002</p><p>\u89c4\u5212\u4e2d\u7684\u80fd\u529b\u5c5e\u4e8e\u8def\u7ebf\u56fe\u6587\u6863\uff1b\u5728\u53ef\u6267\u884c\u6e05\u5355\u4e0e\u6d4b\u8bd5\u51fa\u73b0\u4e4b\u524d\uff0c\u4e0d\u4f1a\u5217\u4e3a\u53d7\u652f\u6301\u3002</p>", "a[href=\"api.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u63a5\u53e3\u53c2\u8003<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u5bf9\u5916\u53ea\u66b4\u9732\u4e00\u5957\u7ecf\u8fc7\u6574\u7406\u7684 Python \u63a5\u53e3\uff1a<code class=\"docutils literal notranslate\"><span class=\"pre\">import</span> <span class=\"pre\">flagquantum</span> <span class=\"pre\">as</span> <span class=\"pre\">fq</span></code>\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e0a\u6e38\u53c2\u8003<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>FlagQuantum \u4ed3\u5e93\u4fdd\u6709\u5b8c\u6574\u7684\u53c2\u8003\u96c6\uff1a\u63a5\u53e3\u53c2\u8003\u3001\u8fd0\u884c\u65f6\u67b6\u6784\u4e0e\u914d\u7f6e\u53c2\u8003\u3001\u5df2\u77e5\u9650\u5236\u76ee\u5f55\u3001\u6d4b\u8bd5\u624b\u518c\u4e0e\u8def\u7ebf\u56fe\u3002\u672c\u9875\u53d1\u5e03\u7684\u53d6\u503c\u6765\u81ea\u8be5\u6743\u5a01\u6765\u6e90\uff1b\u5f53\u652f\u6301\u8fb9\u754c\u53d8\u5316\u65f6\uff0c\u4e0a\u6e38\u53c2\u8003\u4e0e\u672c\u6587\u6863\u96c6\u540c\u6b65\u66f4\u65b0\u3002</p>", "a[href=\"#api\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7a33\u5b9a API \u4e0e\u63a5\u53e3<a class=\"headerlink\" href=\"#api\" title=\"Link to this heading\">#</a></h2>"}
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

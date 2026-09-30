selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7528\u6237\u6307\u5357<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u6307\u5bfc\u60a8\u5982\u4f55\u5728 SGLang \u63a8\u7406\u5de5\u4f5c\u6d41\u4e2d\u4f7f\u7528 FlagGems-sglang \u7b97\u5b50\uff0c\u4ee5\u53ca\u5982\u4f55\u8fd0\u884c\u6d4b\u8bd5\u4e0e\u57fa\u51c6\u3002</p>", "a[href=\"run-tests-and-benchmark.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u6d4b\u8bd5\u4e0e\u57fa\u51c6<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u8fd0\u884c FlagGems-sglang \u7684\u6d4b\u8bd5\u4e0e\u57fa\u51c6\uff0c\u4ee5\u9a8c\u8bc1\u6b63\u786e\u6027\u5e76\u8861\u91cf\u7b97\u5b50\u6027\u80fd\u3002</p><p>\u4ee5\u4e0b\u547d\u4ee4\u5df2\u5728 FlagGems-sglang \u4ed3\u5e93\u4e2d\u9a8c\u8bc1\uff0c\u53ef\u7528\u4e8e\u5b89\u88c5\u540e\u7684\u5feb\u901f\u68c0\u67e5\u3002</p>", "a[href=\"run-tests-and-benchmark.html#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u57fa\u51c6<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u57fa\u51c6\u5957\u4ef6\u5728\u8bb0\u5f55\u6027\u80fd\u7684\u540c\u65f6\u4e5f\u4f1a\u8bb0\u5f55\u7cbe\u5ea6\u3002\u4f20\u5165 <code class=\"docutils literal notranslate\"><span class=\"pre\">--record</span> <span class=\"pre\">log</span></code> \u4f1a\u5199\u51fa\u6bcf\u6b21\u8fd0\u884c\u7684\u65e5\u5fd7\uff0c\u4f20\u5165 <code class=\"docutils literal notranslate\"><span class=\"pre\">--record</span> <span class=\"pre\">json</span></code> \u5219\u5199\u51fa <code class=\"docutils literal notranslate\"><span class=\"pre\">accuracy_result.json</span></code>\u3002</p>", "a[href=\"usage.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u4f7f\u7528\u7b97\u5b50<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u5b89\u88c5 FlagGems-sglang \u540e\uff0c\u76f4\u63a5\u5bfc\u5165\u8be5\u5305\u5e76\u8c03\u7528\u7b97\u5b50\u5373\u53ef\u3002\u9488\u5bf9\u5f53\u524d\u8bbe\u5907\u89e3\u6790\u51fa\u7684\u6bcf\u4e2a\u7b97\u5b50\u90fd\u6302\u8f7d\u5728\u5305\u547d\u540d\u7a7a\u95f4\u4e0a\uff0c\u56e0\u6b64\u65e0\u8bba\u5e95\u5c42\u786c\u4ef6\u662f\u4ec0\u4e48\uff0c\u8c03\u7528\u65b9\u5f0f\u90fd\u4fdd\u6301\u4e00\u81f4\u3002</p><p>\u4e0b\u4f8b\u4f7f\u7528\u4e24\u4e2a\u5df2\u5bfc\u51fa\u7684\u7b97\u5b50 <code class=\"docutils literal notranslate\"><span class=\"pre\">silu_and_mul</span></code> \u4e0e <code class=\"docutils literal notranslate\"><span class=\"pre\">fused_rmsnorm</span></code>\uff1a</p>", "a[href=\"run-tests-and-benchmark.html#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u5982\u9700\u4e0e CPU \u53c2\u8003\u5b9e\u73b0\u5bf9\u6bd4\uff0c\u800c\u4e0d\u662f\u4e0e\u8bbe\u5907\u4e0a\u7684\u53c2\u8003\u5b9e\u73b0\u5bf9\u6bd4\uff1a</p>"}
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

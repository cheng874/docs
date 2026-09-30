selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u4f7f\u7528\u7b97\u5b50<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u5b89\u88c5 FlagGems-sglang \u540e\uff0c\u76f4\u63a5\u5bfc\u5165\u8be5\u5305\u5e76\u8c03\u7528\u7b97\u5b50\u5373\u53ef\u3002\u9488\u5bf9\u5f53\u524d\u8bbe\u5907\u89e3\u6790\u51fa\u7684\u6bcf\u4e2a\u7b97\u5b50\u90fd\u6302\u8f7d\u5728\u5305\u547d\u540d\u7a7a\u95f4\u4e0a\uff0c\u56e0\u6b64\u65e0\u8bba\u5e95\u5c42\u786c\u4ef6\u662f\u4ec0\u4e48\uff0c\u8c03\u7528\u65b9\u5f0f\u90fd\u4fdd\u6301\u4e00\u81f4\u3002</p><p>\u4e0b\u4f8b\u4f7f\u7528\u4e24\u4e2a\u5df2\u5bfc\u51fa\u7684\u7b97\u5b50 <code class=\"docutils literal notranslate\"><span class=\"pre\">silu_and_mul</span></code> \u4e0e <code class=\"docutils literal notranslate\"><span class=\"pre\">fused_rmsnorm</span></code>\uff1a</p>", "a[href=\"../reference/operator_list.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7b97\u5b50\u5217\u8868<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u9875\u5217\u51fa FlagGems-sglang \u5bfc\u51fa\u7684\u7b97\u5b50\uff0c\u6765\u6e90\u4e8e <code class=\"docutils literal notranslate\"><span class=\"pre\">conf/operators.yaml</span></code> \u4ee5\u53ca <code class=\"docutils literal notranslate\"><span class=\"pre\">src/flaggems_sglang/ops/*.py</span></code> \u7684 <code class=\"docutils literal notranslate\"><span class=\"pre\">__all__</span></code>\u3002</p><p>\u901a\u7528\u7b97\u5b50\u96c6\u5171 40 \u4e2a\uff0c\u4e24\u4e2a\u6765\u6e90\u7684\u7b97\u5b50\u540d\u5b8c\u5168\u4e00\u81f4\u3002\u6bcf\u4e2a\u7b97\u5b50\u5747\u4ee5 Triton \u5b9e\u73b0\uff0c\u5e76\u901a\u8fc7\u6982\u89c8\u4e2d\u6240\u8ff0\u7684\u4e09\u7ea7\u6ce8\u518c\u5668\u6309\u5f53\u524d\u8bbe\u5907\u89e3\u6790\u3002</p>"}
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

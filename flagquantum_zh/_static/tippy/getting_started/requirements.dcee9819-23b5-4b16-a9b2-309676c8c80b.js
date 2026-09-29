selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8f6f\u4ef6\u8981\u6c42<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u53ef\u9009\u6269\u5c55\u5728 <code class=\"docutils literal notranslate\"><span class=\"pre\">pyproject.toml</span></code> \u4e2d\u58f0\u660e\uff0c\u7528 <code class=\"docutils literal notranslate\"><span class=\"pre\">pip</span> <span class=\"pre\">install</span> <span class=\"pre\">\"flagquantum[&lt;extra&gt;]\"</span></code> \u5b89\u88c5\uff1a</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u73af\u5883\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u652f\u6301 Python 3.10 \u81f3 3.12\uff0c\u5e76\u8981\u6c42 PyTorch 2.5 \u6216\u66f4\u9ad8\u7248\u672c\u3002\u6b63\u5f0f\u53d1\u5e03\u7684\n\u5305\u53ea\u4f9d\u8d56 PyTorch\uff0c\u5176\u4f59\u80fd\u529b\u90fd\u662f\u53ef\u9009\u6269\u5c55\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u786c\u4ef6\u5e73\u53f0<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>FlagQuantum \u4e0d\u505a\u5382\u5546\u63a2\u6d4b\uff0c\u4e5f\u4e0d\u542b\u5382\u5546\u5206\u652f\u3002\u7269\u7406\u8bbe\u5907\u63a2\u6d4b\u3001\u5382\u5546\u8fd0\u884c\u65f6\u4ee5\u53ca\n<code class=\"docutils literal notranslate\"><span class=\"pre\">flagos:0</span></code> \u5230\u7269\u7406\u5361\u7684\u6620\u5c04\uff0c\u90fd\u5c5e\u4e8e FlagOS \u5382\u5546\u96c6\u6210\uff1bFlagQuantum \u53ea\u8bb0\u5f55\u5b83\u62ff\u5230\n\u7684\u8fd0\u884c\u65f6\u6807\u8bc6\u4e0e\u8def\u7531\u8bc1\u636e\u3002\u56e0\u6b64\uff0c\u4ec5\u5b58\u5728\u4e00\u6761\u96c6\u6210\u8def\u5f84\u5e76\u4e0d\u7b49\u4e8e\u67d0\u6b3e\u56fd\u4ea7\u52a0\u901f\u5668\u5df2\u83b7\u5f97\u8ba4\u8bc1\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u591a\u673a\u73af\u5883\u9884\u671f<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>\u5206\u5e03\u5f0f\u652f\u6301\u4f9d\u8d56\u5177\u4f53\u73af\u5883\u3002\u5728\u5df2\u590d\u6838\u7684\u914d\u7f6e\u4e2d\uff0c\u53cc\u673a A800\u3001\u6bcf\u673a\u4e00\u5f20\u5361\u7684\u90e8\u7f72\u53ef\u4ee5\u57fa\u4e8e\nNCCL \u4e0e TCP \u8fd0\u884c\u524d\u5411\u3001\u68af\u5ea6\u4e0e\u8bad\u7ec3\uff0f\u6062\u590d\u8d1f\u8f7d\uff1b\u591a\u673a\u7684\u53d1\u5e03\u8ba4\u8bc1\u662f\u53e6\u4e00\u4e2a\u9700\u8981\u8bc1\u636e\u652f\u6491\u7684\n\u72ec\u7acb\u6b65\u9aa4\u3002</p>"}
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

selector_to_html = {"a[href=\"user_guide/user-guide.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7528\u6237\u6307\u5357<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6307\u5357\u6db5\u76d6 PyTorch-Plugin-FL \u7684\u4f7f\u7528\uff0c\u5305\u62ec\u57fa\u672c\u64cd\u4f5c\u3001\u8bbe\u5907\u7ba1\u7406\u3001\u540e\u7aef\u914d\u7f6e\u548c\u8c03\u8bd5\u3002</p>", "a[href=\"user_guide/testing.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">tests/integration/ops/</span></code> \u4e2d\u7684\u6d4b\u8bd5\u4f7f\u7528 <code class=\"docutils literal notranslate\"><span class=\"pre\">@pytest.mark</span></code> \u6807\u8bb0\u6765\u6307\u793a\u5e73\u53f0\u8303\u56f4\u3002</p>", "a[href=\"#pytorch-plugin-fl\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">PyTorch-Plugin-FL \u6587\u6863<a class=\"headerlink\" href=\"#pytorch-plugin-fl\" title=\"Link to this heading\">#</a></h1><p><a class=\"sd-sphinx-override sd-btn sd-text-wrap sd-btn-primary sd-btn-lg sd-px-4 sd-py-2 sd-fw-bold reference internal\" href=\"getting_started/getting-started.html\"><span class=\"doc std std-doc\">\u5feb\u901f\u5165\u95e8</span></a></p>", "a[href=\"overview/overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">PyTorch-Plugin-FL \u6982\u89c8<a class=\"headerlink\" href=\"#pytorch-plugin-fl\" title=\"Link to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">torch_fl</span></code> \u662f\u4e00\u4e2a\u57fa\u4e8e PrivateUse1 \u6269\u5c55\u673a\u5236\u7684\u81ea\u5b9a\u4e49 PyTorch \u8bbe\u5907\u63d2\u4ef6\uff0c\u5c06 <a class=\"reference external\" href=\"https://github.com/flagos-ai/FlagGems\">FlagGems</a> \u9ad8\u6027\u80fd Triton \u7b97\u5b50\u6ce8\u518c\u4e3a <code class=\"docutils literal notranslate\"><span class=\"pre\">flagos</span></code> \u8bbe\u5907\u540e\u7aef\uff0c\u4ee5\u5b9e\u73b0\u7edf\u4e00\u7684\u591a\u82af\u7247\u652f\u6301\u3002</p>", "a[href=\"getting_started/getting-started.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5feb\u901f\u5165\u95e8<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u4ecb\u7ecd\u5b89\u88c5 PyTorch-Plugin-FL \u7684\u8981\u6c42\uff0c\u5e76\u6307\u5bfc\u60a8\u5728\u4e0d\u540c\u786c\u4ef6\u5e73\u53f0\u4e0a\u6784\u5efa\u548c\u4f7f\u7528\u8be5\u63d2\u4ef6\u3002</p>"}
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

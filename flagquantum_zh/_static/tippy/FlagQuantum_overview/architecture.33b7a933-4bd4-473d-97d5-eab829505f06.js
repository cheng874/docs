selector_to_html = {"a[href=\"#measurement\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u6d4b\u91cf (Measurement)<a class=\"headerlink\" href=\"#measurement\" title=\"Link to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">measure</span></code> \u6a21\u5757\u63d0\u4f9b\u6d4b\u91cf\u5de5\u5177\uff0c\u5305\u62ec\uff1a</p>", "a[href=\"#drawer\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u7ed8\u56fe\u5668 (Drawer)<a class=\"headerlink\" href=\"#drawer\" title=\"Link to this heading\">#</a></h3><p>\u7ed8\u56fe\u5668\u6a21\u5757\u652f\u6301\u4e24\u79cd\u6a21\u5f0f\u7684\u7535\u8def\u53ef\u89c6\u5316\uff1a</p>", "a[href=\"#devices\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u8bbe\u5907 (Devices)<a class=\"headerlink\" href=\"#devices\" title=\"Link to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">devices</span></code> \u6a21\u5757\u63d0\u4f9b\u91cf\u5b50\u8bbe\u5907\u5b9e\u73b0\uff0c\u5305\u62ec <code class=\"docutils literal notranslate\"><span class=\"pre\">DistributedQuantumDevice</span></code> \u7c7b\uff0c\u8be5\u7c7b\u4f7f\u7528 PyTorch \u7684\u5206\u5e03\u5f0f\u5f20\u91cf (<code class=\"docutils literal notranslate\"><span class=\"pre\">DTensor</span></code>) \u8de8\u591a\u4e2a GPU \u7ba1\u7406\u91cf\u5b50\u6001\u3002</p>", "a[href=\"#operations\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u64cd\u4f5c (Operations)<a class=\"headerlink\" href=\"#operations\" title=\"Link to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">ops</span></code> \u6a21\u5757\u5305\u542b\u6240\u6709\u91cf\u5b50\u95e8\u5b9e\u73b0\uff1a</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6838\u5fc3\u7ec4\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><h3>\u8bbe\u5907 (Devices)<a class=\"headerlink\" href=\"#devices\" title=\"Link to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">devices</span></code> \u6a21\u5757\u63d0\u4f9b\u91cf\u5b50\u8bbe\u5907\u5b9e\u73b0\uff0c\u5305\u62ec <code class=\"docutils literal notranslate\"><span class=\"pre\">DistributedQuantumDevice</span></code> \u7c7b\uff0c\u8be5\u7c7b\u4f7f\u7528 PyTorch \u7684\u5206\u5e03\u5f0f\u5f20\u91cf (<code class=\"docutils literal notranslate\"><span class=\"pre\">DTensor</span></code>) \u8de8\u591a\u4e2a GPU \u7ba1\u7406\u91cf\u5b50\u6001\u3002</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u67b6\u6784<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u7531\u4ee5\u4e0b\u6a21\u5757\u7ec4\u6210\uff1a</p>", "a[href=\"#utilities\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u5de5\u5177 (Utilities)<a class=\"headerlink\" href=\"#utilities\" title=\"Link to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">utils</span></code> \u6a21\u5757\u5305\u542b\u4ee5\u4e0b\u8f85\u52a9\u51fd\u6570\uff1a</p>", "a[href=\"#encoding\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u7f16\u7801 (Encoding)<a class=\"headerlink\" href=\"#encoding\" title=\"Link to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">encoding</span></code> \u6a21\u5757\u63d0\u4f9b\u4e86\u5c06\u7ecf\u5178\u6570\u636e\u5d4c\u5165\u91cf\u5b50\u6001\u7684\u65b9\u6cd5\uff1a</p>"}
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

selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u529f\u80fd\u7279\u6027<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>PyTorch-Plugin-FL \u63d0\u4f9b\u4ee5\u4e0b\u80fd\u529b\uff1a</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u81ea\u52a8\u8bbe\u5907\u6ce8\u518c<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u81ea\u52a8\u5c06 FlagGems Triton \u7b97\u5b50\u6ce8\u518c\u4e3a <code class=\"docutils literal notranslate\"><span class=\"pre\">flagos</span></code> \u8bbe\u5907\u7684\u8c03\u5ea6\u5b9e\u73b0\u3002\u4e00\u65e6\u5bfc\u5165\uff0c\u6240\u6709\u5728 <code class=\"docutils literal notranslate\"><span class=\"pre\">device=\"flagos\"</span></code> \u4e0a\u7684\u5f20\u91cf\u64cd\u4f5c\u5c06\u81ea\u52a8\u4f7f\u7528 FlagGems Triton \u5185\u6838\uff0c\u65e0\u9700\u4fee\u6539\u4ee3\u7801\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u591a\u5e73\u53f0\u652f\u6301<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>\u652f\u6301\u4e09\u79cd\u786c\u4ef6\u5e73\u53f0\uff1a</p>", "a[href=\"#api\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b8c\u6574\u7684\u8bbe\u5907\u7ba1\u7406 API<a class=\"headerlink\" href=\"#api\" title=\"Link to this heading\">#</a></h2><p>\u63d0\u4f9b\u5b8c\u6574\u7684 PyTorch \u517c\u5bb9\u8bbe\u5907\u63a5\u53e3\uff1a</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u53ef\u914d\u7f6e\u7684\u540e\u7aef\u8def\u7531<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u4ee5\u9010\u7b97\u5b50\u7c92\u5ea6\u9009\u62e9 FlagGems \u6216\u539f\u751f\u5382\u5546\u540e\u7aef\uff08CUDA/MACA/Ascend\uff09\u3002<code class=\"docutils literal notranslate\"><span class=\"pre\">backends.conf</span></code> \u914d\u7f6e\u6587\u4ef6\u63a7\u5236\u54ea\u4e9b\u7b97\u5b50\u4f7f\u7528\u54ea\u4e2a\u540e\u7aef\uff0c\u5e76\u652f\u6301\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u8986\u76d6\u5355\u4e2a\u7b97\u5b50\u3002</p>"}
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

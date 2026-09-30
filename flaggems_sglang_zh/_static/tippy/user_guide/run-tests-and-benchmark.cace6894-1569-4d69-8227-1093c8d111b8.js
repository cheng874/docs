selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u6d4b\u8bd5\u4e0e\u57fa\u51c6<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u8fd0\u884c FlagGems-sglang \u7684\u6d4b\u8bd5\u4e0e\u57fa\u51c6\uff0c\u4ee5\u9a8c\u8bc1\u6b63\u786e\u6027\u5e76\u8861\u91cf\u7b97\u5b50\u6027\u80fd\u3002</p><p>\u4ee5\u4e0b\u547d\u4ee4\u5df2\u5728 FlagGems-sglang \u4ed3\u5e93\u4e2d\u9a8c\u8bc1\uff0c\u53ef\u7528\u4e8e\u5b89\u88c5\u540e\u7684\u5feb\u901f\u68c0\u67e5\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u57fa\u51c6<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u57fa\u51c6\u5957\u4ef6\u5728\u8bb0\u5f55\u6027\u80fd\u7684\u540c\u65f6\u4e5f\u4f1a\u8bb0\u5f55\u7cbe\u5ea6\u3002\u4f20\u5165 <code class=\"docutils literal notranslate\"><span class=\"pre\">--record</span> <span class=\"pre\">log</span></code> \u4f1a\u5199\u51fa\u6bcf\u6b21\u8fd0\u884c\u7684\u65e5\u5fd7\uff0c\u4f20\u5165 <code class=\"docutils literal notranslate\"><span class=\"pre\">--record</span> <span class=\"pre\">json</span></code> \u5219\u5199\u51fa <code class=\"docutils literal notranslate\"><span class=\"pre\">accuracy_result.json</span></code>\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u5982\u9700\u4e0e CPU \u53c2\u8003\u5b9e\u73b0\u5bf9\u6bd4\uff0c\u800c\u4e0d\u662f\u4e0e\u8bbe\u5907\u4e0a\u7684\u53c2\u8003\u5b9e\u73b0\u5bf9\u6bd4\uff1a</p>"}
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

selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u73af\u5883\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u5b89\u88c5 FlagGems-sglang \u4e4b\u524d\uff0c\u8bf7\u786e\u8ba4\u73af\u5883\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6784\u5efa\u4f9d\u8d56<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u4ece\u6e90\u7801\u6784\u5efa FlagGems-sglang \u9700\u8981\u4ee5\u4e0b\u8f6f\u4ef6\u5305\uff1a</p>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u786c\u4ef6\u8981\u6c42<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2><p>\u8fd0\u884c\u5927\u591a\u6570\u7b97\u5b50\u9700\u8981\u53d7\u652f\u6301\u7684\u52a0\u901f\u5361\u3002\u6d4b\u8bd5\u5957\u4ef6\u53ef\u5bf9\u652f\u6301\u7684\u7b97\u5b50\u4f7f\u7528 <code class=\"docutils literal notranslate\"><span class=\"pre\">--ref</span> <span class=\"pre\">cpu</span></code> \u4e0e CPU \u53c2\u8003\u5b9e\u73b0\u505a\u5bf9\u6bd4\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8f6f\u4ef6\u8981\u6c42<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6d4b\u8bd5\u4f9d\u8d56<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">test</span></code> extra \u4f1a\u5b89\u88c5\u6d4b\u8bd5\u4e0e\u57fa\u51c6\u5957\u4ef6\u6240\u9700\u7684\u8f6f\u4ef6\u5305\uff1a</p>"}
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

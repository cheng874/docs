selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7279\u6027<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagGems-sglang \u63d0\u4f9b\u4ee5\u4e0b\u5173\u952e\u7279\u6027\uff1a</p>", "a[href=\"#flaggemssglang-plugin-fl\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e0e FlagGems\u3001sglang-plugin-FL \u7684\u5173\u7cfb<a class=\"headerlink\" href=\"#flaggemssglang-plugin-fl\" title=\"Link to this heading\">#</a></h2><p>\u5382\u5546\u63a5\u5165\u65b0\u540e\u7aef\u65f6\uff0c\u53ef\u4ece\u4e0a\u6e38\u4ed3\u5e93\u7684 <code class=\"docutils literal notranslate\"><span class=\"pre\">src/flaggems_sglang/runtime/backend/README.md</span></code> \u5f00\u59cb\uff0c\u5176\u4e2d\u8bf4\u660e\u4e86\u76ee\u5f55\u7ed3\u6784\u4e0e <code class=\"docutils literal notranslate\"><span class=\"pre\">VendorDescriptor</span></code> \u5b57\u6bb5\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u652f\u6301\u7684\u540e\u7aef<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u5404\u5382\u5546\u7684\u7279\u5316\u5b9e\u73b0\u4f4d\u4e8e <code class=\"docutils literal notranslate\"><span class=\"pre\">src/flaggems_sglang/runtime/backend/_&lt;vendor&gt;/</span></code>\u3002\u6bcf\u4e2a\u5382\u5546\u76ee\u5f55\u90fd\u58f0\u660e\u4e86\u81ea\u5df1\u670d\u52a1\u7684\u8bbe\u5907\uff1a</p>"}
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

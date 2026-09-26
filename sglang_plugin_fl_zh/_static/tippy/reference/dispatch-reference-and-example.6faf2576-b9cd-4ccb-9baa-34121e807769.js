selector_to_html = {"a[href=\"#id4\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u7b2c\u4e09\u5c42 \u2014 \u901a\u4fe1<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u73af\u5883\u53d8\u91cf\u53c2\u8003\u4e0e\u793a\u4f8b<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u9875\u8bb0\u5f55\u4e86 sglang-plugin-FL \u7684\u73af\u5883\u53d8\u91cf\u53c2\u8003\u548c\u793a\u4f8b\u3002</p>", "a[href=\"#aten-flaggems\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u7b2c\u4e00\u5c42 \u2014 ATen \u66ff\u6362\uff08FlagGems\uff09<a class=\"headerlink\" href=\"#aten-flaggems\" title=\"Link to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">FLAGOS_WHITELIST</span></code> \u548c <code class=\"docutils literal notranslate\"><span class=\"pre\">FLAGOS_BLACKLIST</span></code> \u4e92\u65a5\u3002<code class=\"docutils literal notranslate\"><span class=\"pre\">FLAGOS_WHITELIST</span></code> \u4f18\u5148\u7ea7\u9ad8\u4e8e YAML <code class=\"docutils literal notranslate\"><span class=\"pre\">flagos_blacklist</span></code>\u3002</p>", "a[href=\"#id3\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u7b2c\u4e8c\u5c42 \u2014 \u878d\u5408\u7b97\u5b50\u8c03\u5ea6<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u73af\u5883\u53d8\u91cf \u2014 \u5b8c\u6574\u53c2\u8003<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><h3>\u7b2c\u4e8c\u5c42 \u2014 \u878d\u5408\u7b97\u5b50\u8c03\u5ea6<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id6\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u793a\u4f8b<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id5\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u7cfb\u7edf / \u8c03\u8bd5<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h3>"}
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

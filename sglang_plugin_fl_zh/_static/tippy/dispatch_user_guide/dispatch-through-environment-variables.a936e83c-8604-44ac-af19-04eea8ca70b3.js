selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7b2c\u4e8c\u5c42 \u2014 \u878d\u5408\u7b97\u5b50\u8c03\u5ea6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u793a\u4f8b<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7cfb\u7edf / \u8c03\u8bd5<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7b2c\u4e09\u5c42 \u2014 \u5206\u5e03\u5f0f\u901a\u4fe1<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u8c03\u5ea6<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u6240\u6709\u63d2\u4ef6\u884c\u4e3a\u7531\u5e26\u6709 <code class=\"docutils literal notranslate\"><span class=\"pre\">SGLANG_FL_*</span></code> \u524d\u7f00\u7684\u73af\u5883\u53d8\u91cf\u63a7\u5236\u3002</p>", "a[href=\"#aten-flaggems\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7b2c\u4e00\u5c42 \u2014 ATen \u66ff\u6362\uff08FlagGems\uff09<a class=\"headerlink\" href=\"#aten-flaggems\" title=\"Link to this heading\">#</a></h2>"}
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

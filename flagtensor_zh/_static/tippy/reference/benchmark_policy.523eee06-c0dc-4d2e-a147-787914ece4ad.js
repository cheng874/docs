selector_to_html = {"a[href=\"#id11\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6743\u5a01\u6765\u6e90<a class=\"headerlink\" href=\"#id11\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u57fa\u51c6\u6d4b\u8bd5\u76ee\u6807<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#flagtensor\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u57fa\u51c6\u6d4b\u8bd5\u7b56\u7565<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><h2>\u8303\u56f4<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>\u672c\u6587\u6863\u5b9a\u4e49 FlagTensor \u6027\u80fd\u9a8c\u8bc1\u7684\u9a8c\u6536\u7ea7\u57fa\u51c6\u6d4b\u8bd5\u7b56\u7565\u3002</p>", "a[href=\"#id7\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u6bcf\u5468\u57fa\u51c6\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id7\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id8\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8ba1\u65f6\u7b56\u7565<a class=\"headerlink\" href=\"#id8\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id5\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u5192\u70df\u57fa\u51c6\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id6\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u9a8c\u6536\u57fa\u51c6\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id9\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u62a5\u544a\u7b56\u7565<a class=\"headerlink\" href=\"#id9\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8303\u56f4<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>\u672c\u6587\u6863\u5b9a\u4e49 FlagTensor \u6027\u80fd\u9a8c\u8bc1\u7684\u9a8c\u6536\u7ea7\u57fa\u51c6\u6d4b\u8bd5\u7b56\u7565\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u57fa\u51c6\u6d4b\u8bd5\u6a21\u5f0f<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6267\u884c\u7ea7\u522b<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><h3>\u5192\u70df\u57fa\u51c6\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id10\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7c7b\u522b\u57fa\u51c6\u6d4b\u8bd5\u5165\u53e3\u70b9\uff08\u9a8c\u6536\u63a5\u53e3\uff09<a class=\"headerlink\" href=\"#id10\" title=\"Link to this heading\">#</a></h2><p>\u57fa\u51c6\u6d4b\u8bd5\u6267\u884c\u4f7f\u7528\u7c7b\u522b\u7ea7\u6587\u4ef6\u4f5c\u4e3a\u6b63\u5f0f\u9a8c\u6536\u63a5\u53e3\u3002\n\u5355\u4e2a\u7b97\u5b50\u901a\u8fc7 <code class=\"docutils literal notranslate\"><span class=\"pre\">pytest</span> <span class=\"pre\">-m</span> <span class=\"pre\">&lt;op&gt;</span></code> \u6807\u8bb0\u9009\u62e9\u3002</p><p>\u5f53\u524d\u7c7b\u522b\u5165\u53e3\u70b9\uff08\u5168\u90e8\u56db\u4e2a\u5df2\u5b8c\u6210\uff09\uff1a</p>", "a[href=\"#dtype\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5f62\u72b6\u548c Dtype \u7b56\u7565<a class=\"headerlink\" href=\"#dtype\" title=\"Link to this heading\">#</a></h2>"}
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

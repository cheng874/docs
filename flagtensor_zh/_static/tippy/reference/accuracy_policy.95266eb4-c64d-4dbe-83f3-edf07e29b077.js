selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u53c2\u8003\u7b56\u7565<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#flagtensor\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u7cbe\u5ea6\u7b56\u7565<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><h2>\u8303\u56f4<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>\u672c\u6587\u6863\u5b9a\u4e49 FlagTensor \u6b63\u786e\u6027\u9a8c\u8bc1\u7684\u9a8c\u6536\u7ea7\u7cbe\u5ea6\u7b56\u7565\u3002</p>", "a[href=\"#id7\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6743\u5a01\u6765\u6e90<a class=\"headerlink\" href=\"#id7\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5f62\u72b6\u7b56\u7565<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id6\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8df3\u8fc7 / \u963b\u6b62\u7b56\u7565<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8303\u56f4<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>\u672c\u6587\u6863\u5b9a\u4e49 FlagTensor \u6b63\u786e\u6027\u9a8c\u8bc1\u7684\u9a8c\u6536\u7ea7\u7cbe\u5ea6\u7b56\u7565\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u65ad\u8a00\u7b56\u7565<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u9ed8\u8ba4\u5bb9\u5dee<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>\u590d\u6570\u5bb9\u5dee\u672a\u5b9a\u4e49\uff1aTriton \u4e0d\u539f\u751f\u652f\u6301\u590d\u6570 dtype\u3002\u552f\u4e00\u652f\u6301\u590d\u6570\u7684\u7b97\u5b50\u662f <code class=\"docutils literal notranslate\"><span class=\"pre\">conj</span></code>\uff0c\u5b83\u901a\u8fc7\u4e00\u4e2a\u4e13\u7528\u5185\u6838\u5904\u7406\u590d\u6570\uff0c\u8be5\u5185\u6838\u5728 Python \u5c42\u9762\u5206\u89e3\u5b9e\u90e8/\u865a\u90e8\u540e\u518d\u542f\u52a8 Triton\u3002</p>", "a[href=\"#dtype\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Dtype \u8986\u76d6\u7387\u7b56\u7565<a class=\"headerlink\" href=\"#dtype\" title=\"Link to this heading\">#</a></h2>"}
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

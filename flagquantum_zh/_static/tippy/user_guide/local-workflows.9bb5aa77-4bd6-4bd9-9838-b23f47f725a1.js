selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u672c\u5730\u5de5\u4f5c\u6d41<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u5730\u6267\u884c\u662f\u96f6\u914d\u7f6e\u8def\u5f84\uff0c\u4e0d\u9700\u8981\u63d0\u4f9b\u65b9\u8d26\u53f7\u3001\u7f16\u8bd1\u5668\u63d2\u4ef6\u3001\u4efb\u52a1\u8c03\u5ea6\u5668\u6216\u7f51\u7edc\u8fde\u63a5\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6d4b\u91cf<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u76f4\u63a5\u8bf7\u6c42\u6240\u9700\u7684\u79d1\u5b66\u7ed3\u679c\uff0c\u800c\u4e0d\u662f\u624b\u5de5\u68c0\u67e5\u6001\u5411\u91cf\uff1a</p>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7cbe\u5ea6<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2><p>\u6bcf\u6b21\u6267\u884c\u53ea\u89e3\u6790\u4e00\u6b21\u7cbe\u5ea6\uff1a<code class=\"docutils literal notranslate\"><span class=\"pre\">complex64</span></code> \u9690\u542b float32 \u53c2\u6570\uff0c<code class=\"docutils literal notranslate\"><span class=\"pre\">complex128</span></code> \u9690\u542b float64\u3002\u957f\u65f6\u8fd0\u884c\u6216\u5206\u5e03\u5f0f\u4efb\u52a1\u8bf7\u4f7f\u7528\u663e\u5f0f\u7684\u8fd0\u884c\u65f6\u914d\u7f6e\uff0c\u4f7f\u7535\u8def\u3001\u8ba1\u5212\u4e0e\u5404\u5de5\u4f5c\u8fdb\u7a0b\u4fdd\u6301\u4e00\u81f4\uff1a</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6a21\u62df<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>CPU \u6001\u5411\u91cf\u6267\u884c\u662f\u9ed8\u8ba4\u8def\u5f84\u3002\u9700\u8981\u65f6\u53ef\u663e\u5f0f\u9009\u62e9\u672c\u673a\u53ef\u63a7\u7684\u4e00\u5757 GPU\uff1a</p>", "a[href=\"#id7\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u7ef4\u62a4\u4e2d\u7684\u672c\u5730\u793a\u4f8b<a class=\"headerlink\" href=\"#id7\" title=\"Link to this heading\">#</a></h2><p>\u63a5\u4e0b\u6765\u53ef\u67e5\u770b\u5355\u673a\u793a\u4f8b\uff0c\u4e86\u89e3\u663e\u5f0f\u6a21\u62df\u5668\u9009\u62e9\u3001\u66f4\u5927\u7684\u6a21\u578b\uff0c\u4ee5\u53ca\u53ef\u914d\u7f6e\u7684 CPU/GPU \u8fd0\u884c\u65b9\u5f0f\u3002</p>", "a[href=\"#id6\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7ed8\u5236\u7535\u8def<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u9009\u62e9\u6a21\u62df\u8868\u793a<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>\u540c\u4e00\u4efd\u7a0b\u5e8f\u4e0d\u5fc5\u6539\u5199\u5373\u53ef\u5728\u4e0d\u540c\u8868\u793a\u4e0b\u8fd0\u884c\uff1a</p>"}
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

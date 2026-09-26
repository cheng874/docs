selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6982\u8ff0<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u5236\u54c1\u7ba1\u7406\u6a21\u5757\u6258\u7ba1 CI/CD \u6d41\u7a0b\u4ea7\u751f\u7684\u6784\u5efa\u4ea7\u7269\uff0c\u7528\u6237\u53ef\u4ee5\u67e5\u770b\u548c\u4e0b\u8f7d Docker \u955c\u50cf\u4e0e Python \u5305\u3002</p>", "a[href=\"../glossary/index.html#term-Wheel\"]": "<dt id=\"term-Wheel\">Wheel</dt><dd><p>Python \u5305\u7684\u5206\u53d1\u683c\u5f0f\u3002</p></dd>", "a[href=\"#python\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Python \u5305<a class=\"headerlink\" href=\"#python\" title=\"Link to this heading\">#</a></h2><p>Python \u5305\u9875\u9762\u5c55\u793a\u5e73\u53f0\u6258\u7ba1\u7684 <a class=\"reference internal\" href=\"../glossary/index.html#term-Wheel\"><span class=\"xref std std-term\">Wheel</span></a> \u5305\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5bb9\u5668\u955c\u50cf<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u5bb9\u5668\u955c\u50cf\u9875\u9762\u5c55\u793a\u5e73\u53f0\u6258\u7ba1\u7684\u6240\u6709 Docker \u955c\u50cf\u3002</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5236\u54c1\u7ba1\u7406<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u5236\u54c1\u7ba1\u7406\u529f\u80fd\u7528\u4e8e\u7ba1\u7406\u5e73\u53f0\u6784\u5efa\u4ea7\u7269\uff0c\u5305\u62ec Docker \u5bb9\u5668\u955c\u50cf\u548c Python Wheel \u5305\uff0c\u63d0\u4f9b\u641c\u7d22\u3001\u7b5b\u9009\u548c\u6392\u5e8f\u529f\u80fd\u3002</p>"}
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

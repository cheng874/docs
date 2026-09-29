selector_to_html = {"a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u4e00\u4e2a\u672c\u5730\u793a\u4f8b<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>\u53d7\u7ef4\u62a4\u7684\u672c\u5730\u8def\u5f84\u4e0d\u9700\u8981\u51ed\u636e\u3001\u4e0d\u9700\u8981\u8fdc\u7a0b\u8d44\u6e90\uff0c\u4e5f\u4e0d\u9700\u8981\u53ef\u9009\u540e\u7aef\uff1a</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5\u6b63\u5f0f\u53d1\u5e03\u7684\u5305<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5\u5f00\u53d1\u7248\u672c<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#flagquantum\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5 FlagQuantum<a class=\"headerlink\" href=\"#flagquantum\" title=\"Link to this heading\">#</a></h1><p>\u5f00\u59cb\u524d\u8bf7\u5148\u9605\u8bfb<a class=\"reference internal\" href=\"requirements.html\"><span class=\"std std-doc\">\u73af\u5883\u8981\u6c42</span></a>\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u9a8c\u8bc1\u5b89\u88c5<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u5305\u901a\u8fc7 <code class=\"docutils literal notranslate\"><span class=\"pre\">import</span> <span class=\"pre\">flagquantum</span> <span class=\"pre\">as</span> <span class=\"pre\">fq</span></code> \u5f15\u5165\uff1b\u5bfc\u5165\u5b83\u4e0d\u4f1a\u5bfc\u5165\u53ef\u9009\u4f9d\u8d56\u3001\u4e0d\u4f1a\u53d1\u73b0\u6269\u5c55\uff0c\n\u4e5f\u4e0d\u4f1a\u6fc0\u6d3b\u5382\u5546\u9002\u914d\u5668\u3002</p>", "a[href=\"#id6\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e0b\u4e00\u6b65<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h2><p>\u7ee7\u7eed\u9605\u8bfb<a class=\"reference internal\" href=\"quick-start.html\"><span class=\"std std-doc\">\u5feb\u901f\u5f00\u59cb</span></a>\uff0c\u6216\u76f4\u63a5\u67e5\u770b<a class=\"reference internal\" href=\"#../user_guide/simulation-modes.md\"><span class=\"xref myst\">\u6a21\u62df\u6a21\u5f0f</span></a>\n\u4ee5\u9009\u62e9\u8868\u793a\u5f62\u5f0f\uff0c\u4ee5\u53ca<a class=\"reference internal\" href=\"#../user_guide/remote-execution.md\"><span class=\"xref myst\">\u8fdc\u7a0b\u6267\u884c</span></a>\u4e86\u89e3\u5382\u5546\u76ee\u6807\u3002</p>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u53ef\u9009\u4f9d\u8d56\u7ec4<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2><p>\u53ea\u5728\u9700\u8981\u65f6\u5b89\u88c5\u5bf9\u5e94\u80fd\u529b\uff1a</p>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u73af\u5883\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u652f\u6301 Python 3.10 \u81f3 3.12\uff0c\u5e76\u8981\u6c42 PyTorch 2.5 \u6216\u66f4\u9ad8\u7248\u672c\u3002\u6b63\u5f0f\u53d1\u5e03\u7684\n\u5305\u53ea\u4f9d\u8d56 PyTorch\uff0c\u5176\u4f59\u80fd\u529b\u90fd\u662f\u53ef\u9009\u6269\u5c55\u3002</p>", "a[href=\"quick-start.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5feb\u901f\u5f00\u59cb<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u9875\u8bad\u7ec3\u4e00\u4e2a\u53cc\u91cf\u5b50\u6bd4\u7279\u6a21\u578b\uff0c\u7136\u540e\u6f14\u793a\u5982\u4f55\u5728\u4e0d\u6539\u52a8\u6a21\u578b\u7684\u60c5\u51b5\u4e0b\u5207\u6362\u6a21\u62df\u8868\u793a\u3002</p>"}
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

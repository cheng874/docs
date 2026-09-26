selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8bbf\u95ee\u8def\u5f84<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u5de6\u4fa7\u5bfc\u822a\u680f \u2192 <strong>\u8d44\u6e90\u89c4\u683c</strong></p><p><a data-lightbox=\"image-set\" href=\"../_images/13-resource-specs.png\">\n<img alt=\"\u8d44\u6e90\u89c4\u683c\u5217\u8868\" src=\"../_images/13-resource-specs.png\"/></a>\n</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5217\u8868\u5b57\u6bb5<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../glossary/index.html#term-1\"]": "<dt id=\"term-1\">\u5730\u57df</dt><dd><p>\u8d44\u6e90\u90e8\u7f72\u7684\u5730\u7406\u533a\u57df\u3002</p></dd>", "a[href=\"../glossary/index.html#term-DCU\"]": "<dt id=\"term-DCU\">DCU</dt><dd><p>\u6df1\u5ea6\u8ba1\u7b97\u5355\u5143\uff0c\u5982\u6d77\u5149 DCU\u3002</p></dd>", "a[href=\"../glossary/index.html#term-NPU\"]": "<dt id=\"term-NPU\">NPU</dt><dd><p>\u795e\u7ecf\u7f51\u7edc\u5904\u7406\u5668\uff0c\u5982\u534e\u4e3a\u6607\u817e\u3002</p></dd>", "a[href=\"../glossary/index.html#term-3\"]": "<dt id=\"term-3\">\u8d44\u6e90\u89c4\u683c</dt><dd><p>\u8ba1\u7b97\u8d44\u6e90\u7684\u914d\u7f6e\u89c4\u683c\uff0c\u5305\u62ec CPU\u3001\u5185\u5b58\u3001\u52a0\u901f\u5361\u7b49\u3002</p></dd>", "a[href=\"../glossary/index.html#term-2\"]": "<dt id=\"term-2\">\u53ef\u7528\u533a</dt><dd><p>\u5730\u57df\u5185\u7684\u72ec\u7acb\u6545\u969c\u9694\u79bb\u533a\u57df\u3002</p></dd>", "a[href=\"../glossary/index.html#term-GPU\"]": "<dt id=\"term-GPU\">GPU</dt><dd><p>\u56fe\u5f62\u5904\u7406\u5668\uff0c\u5982 NVIDIA A100\u3002</p></dd>", "a[href=\"#id6\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5206\u9875<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7b5b\u9009\u6761\u4ef6<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u652f\u6301\u7684\u82af\u7247\u7c7b\u578b<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8d44\u6e90\u89c4\u683c<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u8d44\u6e90\u89c4\u683c\u9875\u9762\u5c55\u793a\u5e73\u53f0\u652f\u6301\u7684\u6240\u6709\u8ba1\u7b97\u8d44\u6e90\u89c4\u683c\uff0c\u7528\u6237\u53ef\u4ee5\u67e5\u770b\u4e0d\u540c\u82af\u7247\u7c7b\u578b\u548c\u914d\u7f6e\u7684\u8d44\u6e90\u8be6\u60c5\u3002</p>"}
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

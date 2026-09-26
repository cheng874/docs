selector_to_html = {"a[href=\"../glossary/index.html#term-Wheel\"]": "<dt id=\"term-Wheel\">Wheel</dt><dd><p>Python \u5305\u7684\u5206\u53d1\u683c\u5f0f\u3002</p></dd>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5e73\u53f0\u80fd\u529b<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../glossary/index.html#term-Coverage\"]": "<dt id=\"term-Coverage\">Coverage</dt><dd><p>\u4ee3\u7801\u8986\u76d6\u7387\uff0c\u8861\u91cf\u6d4b\u8bd5\u8986\u76d6\u7a0b\u5ea6\u7684\u6307\u6807\u3002</p></dd>", "a[href=\"../glossary/index.html#term-Benchmark\"]": "<dt id=\"term-Benchmark\">Benchmark</dt><dd><p>\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\uff0c\u7528\u4e8e\u8bc4\u4f30\u7cfb\u7edf\u6027\u80fd\u8868\u73b0\u3002</p></dd>", "a[href=\"../glossary/index.html#term-0\"]": "<dt id=\"term-0\">\u955c\u50cf</dt><dd><p>Docker \u5bb9\u5668\u955c\u50cf\u3002</p></dd>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6838\u5fc3\u4ef7\u503c<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u5c06\u8de8\u82af\u7247\u9002\u914d\u4ece\u4e00\u4e2a\u4f9d\u8d56\u4e2a\u4eba\u7ecf\u9a8c\u3001\u7ed3\u679c\u4e0d\u786e\u5b9a\u3001\u6210\u672c\u9ad8\u6602\u7684\u201d\u827a\u672f\u201d\uff0c\u8f6c\u53d8\u4e3a\u4e00\u4e2a<strong>\u6807\u51c6\u5316\u3001\u81ea\u52a8\u5316\u3001\u53ef\u91cf\u5316</strong>\u7684\u201d\u5de5\u7a0b\u8fc7\u7a0b\u201d\uff0c\u4e3a\u56fd\u4ea7\u7b97\u529b\u751f\u6001\u63d0\u4f9b\u53ef\u4fe1\u4efb\u3001\u53ef\u6301\u7eed\u7684\u53d1\u5c55\u57fa\u7840\u3002</p>", "a[href=\"../glossary/index.html#term-CI-CD\"]": "<dt id=\"term-CI-CD\">CI/CD</dt><dd><p>\u6301\u7eed\u96c6\u6210\u4e0e\u6301\u7eed\u90e8\u7f72\uff0c\u4e00\u79cd\u81ea\u52a8\u5316\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u53d1\u5e03\u7684\u8f6f\u4ef6\u5f00\u53d1\u5b9e\u8df5\u3002</p></dd>", "a[href=\"#id6\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5e73\u53f0\u5730\u5740<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u652f\u6301\u7684\u82af\u7247\u751f\u6001<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2><p>\u5e73\u53f0\u652f\u6301\u4ee5\u4e0b\u56fd\u4ea7\u82af\u7247\uff1a</p>", "a[href=\"../glossary/index.html#term-Runner\"]": "<dt id=\"term-Runner\">Runner</dt><dd><p>\u6267\u884c CI/CD \u5de5\u4f5c\u6d41\u7684\u4ee3\u7406\u7a0b\u5e8f\u3002</p></dd>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e09\u5c42\u67b6\u6784<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5e73\u53f0\u6982\u8ff0<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagCICD \u662f\u4e00\u4e2a\u9762\u5411\u591a\u82af\u7247\u5f00\u6e90\u9879\u76ee\u7684\u7edf\u4e00 <a class=\"reference internal\" href=\"../glossary/index.html#term-CI-CD\"><span class=\"xref std std-term\">CI/CD</span></a> \u5e73\u53f0\uff0c\u6838\u5fc3\u76ee\u6807\u662f\u89e3\u51b3 AI \u57fa\u7840\u8bbe\u65bd\u201d\u788e\u7247\u5316\u201d\u6311\u6218\uff0c\u5b9e\u73b0\u5927\u6a21\u578b\u8f6f\u4ef6\u6808\u4ece CUDA \u5411\u56fd\u4ea7\u82af\u7247\u7684\u9ad8\u6548\u8fc1\u79fb\u4e0e\u9002\u914d\u3002</p>"}
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

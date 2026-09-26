selector_to_html = {"a[href=\"#transformerengine-fl\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">TransformerEngine-FL \u5feb\u901f\u5165\u95e8<a class=\"headerlink\" href=\"#transformerengine-fl\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u4ecb\u7ecd\u5b89\u88c5 TransformerEngine-FL \u7684\u8981\u6c42\uff0c\u5e76\u6307\u5bfc\u60a8\u5728\u4e0d\u540c\u786c\u4ef6\u5e73\u53f0\u4e0a\u5b89\u88c5 TransformerEngine-FL\u3002</p>", "a[href=\"install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5 TransformerEngine-FL<a class=\"headerlink\" href=\"#transformerengine-fl\" title=\"Link to this heading\">#</a></h1><h2>Docker \u955c\u50cf\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2><p>TransformerEngine-FL \u4e0e Megatron-LM-FL \u5171\u7528\u540c\u4e00 Docker \u955c\u50cf\uff1a</p>", "a[href=\"requirements.html#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u652f\u6301\u7684\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6e90\u7801\u6784\u5efa\u8981\u6c42<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8f6f\u4ef6<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u64cd\u4f5c\u7cfb\u7edf<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>Linux\uff08\u5b98\u65b9\uff09\uff0cWSL2\uff08\u6709\u9650\u652f\u6301\uff09</p>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>\u652f\u6301\u7684\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ece\u6e90\u7801\u5b89\u88c5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>\u6709\u5173\u4f7f\u7528 TransformerEngine-FL\u3001Megatron-LM-FL \u548c FlagScale \u7684\u7aef\u5230\u7aef\u8bad\u7ec3\u5de5\u4f5c\u6d41\uff0c\u8bf7\u53c2\u89c1<a class=\"reference internal\" href=\"#/e2e-use-case.md\"><span class=\"xref myst\">\u7aef\u5230\u7aef\u7528\u4f8b\uff1aTransformerEngine-FL + Megatron-LM-FL + FlagScale</span></a>\u3002</p>", "a[href=\"install.html#flagos\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ece FlagOS \u4ed3\u5e93\u76f4\u63a5\u5b89\u88c5<a class=\"headerlink\" href=\"#flagos\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html#docker\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker \u955c\u50cf\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2><p>TransformerEngine-FL \u4e0e Megatron-LM-FL \u5171\u7528\u540c\u4e00 Docker \u955c\u50cf\uff1a</p>"}
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

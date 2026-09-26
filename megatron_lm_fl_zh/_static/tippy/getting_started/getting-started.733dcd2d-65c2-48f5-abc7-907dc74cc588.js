selector_to_html = {"a[href=\"requirements.html#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8f6f\u4ef6<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u652f\u6301\u7684\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html#docker\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2><h3>FlagOS \u53d1\u7248\u955c\u50cf\uff08v0.2.0-rc2\uff09<a class=\"headerlink\" href=\"#flagos-v0-2-0-rc2\" title=\"Link to this heading\">#</a></h3><p>\u5185\u542b\uff1atorch 2.4.0a0, triton 3.0.0, trans-engine 2.14.0\u3002\u9002\u7528\u4e8e\u5343\u4ebf\u53c2\u6570\u6a21\u578b\u9884\u8bad\u7ec3\u3002</p>", "a[href=\"requirements.html#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u64cd\u4f5c\u7cfb\u7edf<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>Linux\uff08\u5b98\u65b9\uff09\uff0cWSL2\uff08\u6709\u9650\u652f\u6301\uff09</p>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>\u652f\u6301\u7684\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#megatron-lm-fl\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Megatron-LM-FL \u5feb\u901f\u5165\u95e8<a class=\"headerlink\" href=\"#megatron-lm-fl\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u4ecb\u7ecd\u5b89\u88c5 Megatron-LM-FL \u7684\u8981\u6c42\uff0c\u5e76\u6307\u5bfc\u60a8\u5728\u4e0d\u540c\u786c\u4ef6\u5e73\u53f0\u4e0a\u5b89\u88c5 Megatron-LM-FL\u3002</p>", "a[href=\"install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5 Megatron-LM-FL<a class=\"headerlink\" href=\"#megatron-lm-fl\" title=\"Link to this heading\">#</a></h1><p>\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\u5b89\u88c5 Megatron-LM-FL\uff1a</p>", "a[href=\"requirements.html#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6e90\u7801\u6784\u5efa\u8981\u6c42<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ece\u6e90\u7801\u5b89\u88c5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>\u6709\u5173\u4f7f\u7528 Megatron-LM-FL\u3001TransformerEngine-FL \u548c FlagScale \u7684\u7aef\u5230\u7aef\u8bad\u7ec3\u5de5\u4f5c\u6d41\uff0c\u8bf7\u53c2\u89c1<a class=\"reference internal\" href=\"#../user_guide/e2e-use-case.md\"><span class=\"xref myst\">\u7aef\u5230\u7aef\u7528\u4f8b</span></a>\u3002</p>"}
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

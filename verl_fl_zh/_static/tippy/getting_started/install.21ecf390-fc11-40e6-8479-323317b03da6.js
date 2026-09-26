selector_to_html = {"a[href=\"#verl-fl\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">5. \u5b89\u88c5 verl-FL<a class=\"headerlink\" href=\"#verl-fl\" title=\"Link to this heading\">#</a></h3><p>\u7aef\u5230\u7aef GRPO \u8bad\u7ec3\u6d41\u7a0b\u8bf7\u53c2\u89c1<a class=\"reference internal\" href=\"#../user_guide/e2e-use-case.md\"><span class=\"xref myst\">\u7aef\u5230\u7aef\u7528\u4f8b</span></a>\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6e90\u7801\u5b89\u88c5<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><h3>\u524d\u7f6e\u6761\u4ef6<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h3><p>\u8bf7\u786e\u4fdd\u5df2\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6\u4f9d\u8d56\u3002\u8be6\u89c1<a class=\"reference internal\" href=\"requirements.html\"><span class=\"std std-doc\">\u73af\u5883\u8981\u6c42</span></a>\u3002</p>", "a[href=\"#id3\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u524d\u7f6e\u6761\u4ef6<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h3><p>\u8bf7\u786e\u4fdd\u5df2\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6\u4f9d\u8d56\u3002\u8be6\u89c1<a class=\"reference internal\" href=\"requirements.html\"><span class=\"std std-doc\">\u73af\u5883\u8981\u6c42</span></a>\u3002</p>", "a[href=\"#nvidia\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">NVIDIA<a class=\"headerlink\" href=\"#nvidia\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#docker\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker \u955c\u50cf\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2><p>\u5404\u5e73\u53f0\u63d0\u4f9b\u9884\u6784\u5efa\u7684 Docker \u955c\u50cf\uff1a</p>", "a[href=\"#vllm-plugin-fl\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">3. \u5b89\u88c5 vllm-plugin-FL\uff08\u53ef\u9009\uff09<a class=\"headerlink\" href=\"#vllm-plugin-fl\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#flagcx\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">1. \u5b89\u88c5 FlagCX\uff08\u5fc5\u9700\uff09<a class=\"headerlink\" href=\"#flagcx\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#flaggems\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">2. \u5b89\u88c5 FlagGems\uff08\u53ef\u9009\uff09<a class=\"headerlink\" href=\"#flaggems\" title=\"Link to this heading\">#</a></h3>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u73af\u5883\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>\u652f\u6301\u7684\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5feb\u901f\u5b89\u88c5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>Docker \u955c\u50cf\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2><p>\u5404\u5e73\u53f0\u63d0\u4f9b\u9884\u6784\u5efa\u7684 Docker \u955c\u50cf\uff1a</p>", "a[href=\"#transformerengine-fl-megatron-lm-fl\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">4. \u5b89\u88c5 TransformerEngine-FL / Megatron-LM-FL\uff08\u53ef\u9009\uff09<a class=\"headerlink\" href=\"#transformerengine-fl-megatron-lm-fl\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#metax\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">MetaX<a class=\"headerlink\" href=\"#metax\" title=\"Link to this heading\">#</a></h3>"}
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

selector_to_html = {"a[href=\"install.html#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ece\u6e90\u7801\u5b89\u88c5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u64cd\u4f5c\u7cfb\u7edf<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>Linux\uff08\u5b98\u65b9\uff09\uff0cWSL2\uff08\u6709\u9650\u652f\u6301\uff09</p>", "a[href=\"install.html#nvidia\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u975e NVIDIA \u5e73\u53f0<a class=\"headerlink\" href=\"#nvidia\" title=\"Link to this heading\">#</a></h2><p>Megatron-LM-FL v0.3.0 \u5df2\u5728\u6c90\u66e6\u3001\u6d77\u5149\u3001\u6607\u817e\u4e0e\u5e73\u5934\u54e5 PPU \u4e0a\u5b8c\u6210\u9a8c\u8bc1\u3002\u8bf7\u4ece <a class=\"reference external\" href=\"https://flagos.io/Home\">FlagOS \u4e3b\u9875\u9762</a>\u7684\u4e0b\u8f7d\u5217\u8868\u5b89\u88c5\u5bf9\u5e94\u5e73\u53f0\u7684\u955c\u50cf\uff0c\u518d\u6309\u5bf9\u5e94\u6807\u7b7e\u4ece\u6e90\u7801\u5b89\u88c5\uff1a</p>", "a[href=\"install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5 Megatron-LM-FL<a class=\"headerlink\" href=\"#megatron-lm-fl\" title=\"Link to this heading\">#</a></h1><p>\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\u5b89\u88c5 Megatron-LM-FL\uff1a</p>", "a[href=\"#megatron-lm-fl\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Megatron-LM-FL \u5feb\u901f\u5165\u95e8<a class=\"headerlink\" href=\"#megatron-lm-fl\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u4ecb\u7ecd\u5b89\u88c5 Megatron-LM-FL \u7684\u8981\u6c42\uff0c\u5e76\u6307\u5bfc\u60a8\u5728\u4e0d\u540c\u786c\u4ef6\u5e73\u53f0\u4e0a\u5b89\u88c5 Megatron-LM-FL\u3002</p>", "a[href=\"requirements.html#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8f6f\u4ef6<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>\u652f\u6301\u7684\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u8bad\u7ec3\u4e0e\u63a8\u7406\u8fd8\u5df2\u5728\u4ee5\u4e0b\u5e73\u53f0\u4e0a\u5b8c\u6210\u7aef\u5230\u7aef\u9a8c\u8bc1\uff1a</p>", "a[href=\"requirements.html#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u652f\u6301\u7684\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u8bad\u7ec3\u4e0e\u63a8\u7406\u8fd8\u5df2\u5728\u4ee5\u4e0b\u5e73\u53f0\u4e0a\u5b8c\u6210\u7aef\u5230\u7aef\u9a8c\u8bc1\uff1a</p>", "a[href=\"install.html#docker\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2><p>Megatron-LM-FL \u901a\u8fc7\u9884\u6784\u5efa\u7684 Docker \u955c\u50cf\u8fd0\u884c\u3002\u6253\u5f00 <a class=\"reference external\" href=\"https://flagos.io/Home\">FlagOS \u4e3b\u9875\u9762</a>\uff0c\u5728\u9875\u9762\u6b63\u4e2d\u95f4\u7684\u4e0b\u8f7d\u5217\u8868\u4e2d\u9009\u62e9\u4e0e\u4f60\u7684\u786c\u4ef6\u5bf9\u5e94\u7684\u955c\u50cf\uff0c\u6309\u9875\u9762\u4e0a\u7684\u8bf4\u660e\u62c9\u53d6\u955c\u50cf\u3001\u8fdb\u5165\u5bb9\u5668\u5e76\u542f\u52a8\u3002</p>", "a[href=\"requirements.html#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6e90\u7801\u6784\u5efa\u8981\u6c42<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>"}
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

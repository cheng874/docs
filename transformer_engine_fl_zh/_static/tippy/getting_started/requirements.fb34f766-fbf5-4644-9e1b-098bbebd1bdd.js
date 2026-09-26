selector_to_html = {"a[href=\"../user_guide/multi-platform-testing.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u591a\u5e73\u53f0\u6784\u5efa\u4e0e\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6307\u5357\u4ecb\u7ecd\u5982\u4f55\u5728\u56db\u7c7b\u975e NVIDIA \u5e73\u53f0\u4e0a\u6784\u5efa\u5e76\u9a8c\u8bc1 TransformerEngine-FL\uff1a\u6c90\u66e6\uff08MetaX\uff09\u3001\u6d77\u5149\uff08Hygon\uff09\u3001\u6607\u817e\uff08Ascend\uff09\u3001\u5e73\u5934\u54e5\uff08T-Head PPU\uff09\u3002\u91cd\u70b9\u653e\u5728\u672c\u7ec4\u4ef6\u7279\u6709\u7684\u90e8\u5206\u2014\u2014\u7b97\u5b50\u540e\u7aef\u5206\u5c42\u3001\u5382\u5546\u540e\u7aef\u4e0e\u6ce8\u610f\u529b\u540e\u7aef\u2014\u2014\u4ee5\u53ca\u5982\u4f55\u533a\u5206\u6784\u5efa\u6210\u529f\u4e0e\u5931\u8d25\u3002</p><p>\u5176\u5916\u5c42\u7684\u8bad\u7ec3\u7f16\u6392\u8bf7\u53c2\u89c1 <a class=\"reference external\" href=\"https://github.com/flagos-ai/Megatron-LM-FL\">Megatron-LM-FL</a> \u4e0e <a class=\"reference external\" href=\"https://github.com/flagos-ai/FlagScale\">FlagScale</a>\u3002</p>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6e90\u7801\u6784\u5efa\u8981\u6c42<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8f6f\u4ef6<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u652f\u6301\u7684\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>TransformerEngine-FL \u8bad\u7ec3\u5df2\u5728\u6c90\u66e6\u3001\u6d77\u5149\u3001\u6607\u817e\u4e0e\u5e73\u5934\u54e5 PPU \u4e0a\u5b8c\u6210\u7aef\u5230\u7aef\u9a8c\u8bc1\u3002\u6784\u5efa\u5f00\u5173\u4e0e\u64cd\u4f5c\u6b65\u9aa4\u8bf7\u53c2\u89c1<a class=\"reference internal\" href=\"../user_guide/multi-platform-testing.html\"><span class=\"std std-doc\">\u591a\u5e73\u53f0\u6784\u5efa\u4e0e\u6d4b\u8bd5</span></a>\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u64cd\u4f5c\u7cfb\u7edf<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>Linux\uff08\u5b98\u65b9\uff09\uff0cWSL2\uff08\u6709\u9650\u652f\u6301\uff09</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>\u652f\u6301\u7684\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>TransformerEngine-FL \u8bad\u7ec3\u5df2\u5728\u6c90\u66e6\u3001\u6d77\u5149\u3001\u6607\u817e\u4e0e\u5e73\u5934\u54e5 PPU \u4e0a\u5b8c\u6210\u7aef\u5230\u7aef\u9a8c\u8bc1\u3002\u6784\u5efa\u5f00\u5173\u4e0e\u64cd\u4f5c\u6b65\u9aa4\u8bf7\u53c2\u89c1<a class=\"reference internal\" href=\"../user_guide/multi-platform-testing.html\"><span class=\"std std-doc\">\u591a\u5e73\u53f0\u6784\u5efa\u4e0e\u6d4b\u8bd5</span></a>\u3002</p>"}
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

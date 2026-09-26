selector_to_html = {"a[href=\"../user_guide/multi-platform-training.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u591a\u5e73\u53f0\u8bad\u7ec3\u4e0e\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6307\u5357\u4ecb\u7ecd\u5982\u4f55\u5728\u56db\u7c7b\u975e NVIDIA \u5e73\u53f0\u4e0a\u5b89\u88c5 Megatron-LM-FL \u5e76\u8dd1\u901a\u4e00\u6b21 Qwen3 \u7aef\u5230\u7aef\u8bad\u7ec3\uff1a\u6c90\u66e6\uff08MetaX\uff09\u3001\u6d77\u5149\uff08Hygon\uff09\u3001\u6607\u817e\uff08Ascend\uff09\u3001\u5e73\u5934\u54e5\uff08T-Head PPU\uff09\u3002\u4e0b\u6587\u4e2d\u7684\u6bcf\u6761\u547d\u4ee4\u3001\u6bcf\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e0e\u6bcf\u6bb5\u65e5\u5fd7\u5747\u6765\u81ea\u5404\u5e73\u53f0\u7684\u5b9e\u9645\u9a8c\u8bc1\u8fd0\u884c\u3002</p><p>\u6574\u4e2a\u6d41\u7a0b\u628a\u4e09\u4e2a FlagOS \u7ec4\u4ef6\u7ec4\u5408\u5728\u4e00\u8d77\u4f7f\u7528\uff1a</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u652f\u6301\u7684\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u8bad\u7ec3\u4e0e\u63a8\u7406\u8fd8\u5df2\u5728\u4ee5\u4e0b\u5e73\u53f0\u4e0a\u5b8c\u6210\u7aef\u5230\u7aef\u9a8c\u8bc1\uff1a</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u64cd\u4f5c\u7cfb\u7edf<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>Linux\uff08\u5b98\u65b9\uff09\uff0cWSL2\uff08\u6709\u9650\u652f\u6301\uff09</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>\u652f\u6301\u7684\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u8bad\u7ec3\u4e0e\u63a8\u7406\u8fd8\u5df2\u5728\u4ee5\u4e0b\u5e73\u53f0\u4e0a\u5b8c\u6210\u7aef\u5230\u7aef\u9a8c\u8bc1\uff1a</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8f6f\u4ef6<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6e90\u7801\u6784\u5efa\u8981\u6c42<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>"}
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

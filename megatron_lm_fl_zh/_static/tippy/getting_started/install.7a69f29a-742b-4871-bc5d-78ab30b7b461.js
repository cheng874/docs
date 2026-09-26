selector_to_html = {"a[href=\"#docker\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2><p>Megatron-LM-FL \u901a\u8fc7\u9884\u6784\u5efa\u7684 Docker \u955c\u50cf\u8fd0\u884c\u3002\u6253\u5f00 <a class=\"reference external\" href=\"https://flagos.io/Home\">FlagOS \u4e3b\u9875\u9762</a>\uff0c\u5728\u9875\u9762\u6b63\u4e2d\u95f4\u7684\u4e0b\u8f7d\u5217\u8868\u4e2d\u9009\u62e9\u4e0e\u4f60\u7684\u786c\u4ef6\u5bf9\u5e94\u7684\u955c\u50cf\uff0c\u6309\u9875\u9762\u4e0a\u7684\u8bf4\u660e\u62c9\u53d6\u955c\u50cf\u3001\u8fdb\u5165\u5bb9\u5668\u5e76\u542f\u52a8\u3002</p>", "a[href=\"#megatron-lm-fl\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5 Megatron-LM-FL<a class=\"headerlink\" href=\"#megatron-lm-fl\" title=\"Link to this heading\">#</a></h1><p>\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\u5b89\u88c5 Megatron-LM-FL\uff1a</p>", "a[href=\"../user_guide/multi-platform-training.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u591a\u5e73\u53f0\u8bad\u7ec3\u4e0e\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6307\u5357\u4ecb\u7ecd\u5982\u4f55\u5728\u56db\u7c7b\u975e NVIDIA \u5e73\u53f0\u4e0a\u5b89\u88c5 Megatron-LM-FL \u5e76\u8dd1\u901a\u4e00\u6b21 Qwen3 \u7aef\u5230\u7aef\u8bad\u7ec3\uff1a\u6c90\u66e6\uff08MetaX\uff09\u3001\u6d77\u5149\uff08Hygon\uff09\u3001\u6607\u817e\uff08Ascend\uff09\u3001\u5e73\u5934\u54e5\uff08T-Head PPU\uff09\u3002\u4e0b\u6587\u4e2d\u7684\u6bcf\u6761\u547d\u4ee4\u3001\u6bcf\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e0e\u6bcf\u6bb5\u65e5\u5fd7\u5747\u6765\u81ea\u5404\u5e73\u53f0\u7684\u5b9e\u9645\u9a8c\u8bc1\u8fd0\u884c\u3002</p><p>\u6574\u4e2a\u6d41\u7a0b\u628a\u4e09\u4e2a FlagOS \u7ec4\u4ef6\u7ec4\u5408\u5728\u4e00\u8d77\u4f7f\u7528\uff1a</p>", "a[href=\"#cuda\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">CUDA<a class=\"headerlink\" href=\"#cuda\" title=\"Link to this heading\">#</a></h3><p>\u8fdb\u5165\u5bb9\u5668\u540e\uff0c\u6fc0\u6d3b\u73af\u5883\u5e76\u5b89\u88c5 FlashAttention\uff1a</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ece\u6e90\u7801\u5b89\u88c5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#nvidia\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u975e NVIDIA \u5e73\u53f0<a class=\"headerlink\" href=\"#nvidia\" title=\"Link to this heading\">#</a></h2><p>Megatron-LM-FL v0.3.0 \u5df2\u5728\u6c90\u66e6\u3001\u6d77\u5149\u3001\u6607\u817e\u4e0e\u5e73\u5934\u54e5 PPU \u4e0a\u5b8c\u6210\u9a8c\u8bc1\u3002\u8bf7\u4ece <a class=\"reference external\" href=\"https://flagos.io/Home\">FlagOS \u4e3b\u9875\u9762</a>\u7684\u4e0b\u8f7d\u5217\u8868\u5b89\u88c5\u5bf9\u5e94\u5e73\u53f0\u7684\u955c\u50cf\uff0c\u518d\u6309\u5bf9\u5e94\u6807\u7b7e\u4ece\u6e90\u7801\u5b89\u88c5\uff1a</p>"}
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

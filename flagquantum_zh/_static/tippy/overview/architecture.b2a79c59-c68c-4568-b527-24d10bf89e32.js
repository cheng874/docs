selector_to_html = {"a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6267\u884c\u4e0e\u8bad\u7ec3\u5951\u7ea6<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">fq.run</span></code> \u662f\u89c4\u8303\u7684\u6267\u884c\u5165\u53e3\uff0c\u5bf9\u53d7\u652f\u6301\u7684\u672c\u5730\u4e0e\u5206\u5e03\u5f0f\u6a21\u5f0f\u8fd4\u56de <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.ExecutionResult</span></code>\u3002\u4e13\u7528\u539f\u751f\u51fd\u6570\u5c5e\u4e8e\u8fdb\u9636\u63a5\u53e3\uff0c\u53ef\u80fd\u66b4\u9732\u540e\u7aef\u7279\u6709\u7684\u5bf9\u8c61\u3002</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">fq.train</span></code> \u627f\u62c5\u5e38\u89c4\u7684 PyTorch \u4f18\u5316\u5faa\u73af\u3002\u6309 rank \u62e5\u6709\u7684\u6001\u5411\u91cf\u4e0e MPS \u8bad\u7ec3\u6709\u5404\u81ea\u72ec\u7acb\u7684\u5b9e\u9a8c\u6027\u5206\u5e03\u5f0f\u5165\u53e3\uff0c\u8c03\u7528 <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.train</span></code> \u4e0d\u4f1a\u9690\u5f0f\u542f\u7528\u5b83\u4eec\u3002\u53ea\u6709\u5f53\u524d\u5411\u6267\u884c\u3001\u68af\u5ea6\u3001\u4f18\u5316\u5668\u66f4\u65b0\u4e0e\u68c0\u67e5\u70b9\u5f52\u5c5e\u90fd\u4fdd\u6301\u58f0\u660e\u7684\u5206\u5e03\u5f0f\u8bed\u4e49\u65f6\uff0c\u5206\u5e03\u5f0f\u8bad\u7ec3\u624d\u7b97\u5b8c\u6210\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4f9d\u8d56\u65b9\u5411<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>\u4f9d\u8d56\u671d\u5185\uff1a\u7528\u6237\u95e8\u9762\u8c03\u7528\u7f16\u8bd1\u5668\u3001\u8fd0\u884c\u65f6\u4e0e\u5e94\u7528\u5de5\u4f5c\u6d41\uff0c\u5b83\u4eec\u518d\u8c03\u7528 <code class=\"docutils literal notranslate\"><span class=\"pre\">core</span></code>\u3002\u6570\u503c\u65b9\u6cd5\u3001\u672c\u5730\u7b97\u529b\u9002\u914d\u5668\u4e0e\u8fdc\u7a0b\u9002\u914d\u5668\u5e76\u5217\u5176\u4fa7\uff0c<code class=\"docutils literal notranslate\"><span class=\"pre\">core</span></code> \u4e0d\u4f1a\u8c03\u7528\u5b83\u4eec\u3002</p>", "a[href=\"#id6\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u516c\u5f00\u4e0e\u5185\u90e8\u63a5\u53e3<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6e90\u7801\u7ed3\u6784<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6838\u5fc3\u5206\u5c42<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u8ba1\u5212\u63cf\u8ff0\u7684\u662f\u610f\u56fe\u4e0e\u4f30\u7b97\uff0c\u5b83\u6c38\u8fdc\u4e0d\u662f\u6267\u884c\u6216\u57fa\u51c6\u8bc1\u636e\uff1b\u8fd0\u884c\u65f6\u8bb0\u5f55\u63cf\u8ff0\u7684\u662f\u5b9e\u9645\u8fd0\u884c\u4e86\u4ec0\u4e48\u3002</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u67b6\u6784<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u4e3a\u91cf\u5b50 AI \u7a0b\u5e8f\u63d0\u4f9b\u7edf\u4e00\u6a21\u578b\uff0c\u8986\u76d6\u672c\u5730\u5f00\u53d1\u3001\u52a0\u901f\u5185\u6838\u3001\u5206\u5e03\u5f0f\u6a21\u62df\u4e0e\u90e8\u7f72\uff1a</p>"}
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

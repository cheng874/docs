selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5206\u5e03\u5f0f\u6267\u884c<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u5206\u5e03\u5f0f\u6267\u884c\u4fdd\u6301\u4e00\u4e2a\u903b\u8f91\u8d1f\u8f7d\uff0c\u5e76\u628a\u5b83\u5207\u5206\u5230\u591a\u4e2a rank \u4e0a\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8de8\u5361\u5207\u5206\u7684\u6001\u5411\u91cf<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u5df2\u521d\u59cb\u5316\u7684\u591a rank \u8fdb\u7a0b\u7ec4\u6539\u53d8\u7684\u662f\u8fd0\u884c\u65f6\uff0c\u800c\u4e0d\u662f\u7a0b\u5e8f\uff1a</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5206\u5e03\u5f0f\u8bad\u7ec3<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u6309 rank \u62e5\u6709\u7684\u6001\u5411\u91cf\u4e0e MPS \u8bad\u7ec3\uff0c\u53ef\u901a\u8fc7 <code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.experimental.distributed</span></code> \u4e0b\u663e\u5f0f\n\u7684\u5b9e\u9a8c\u6027\u5165\u53e3\u4f7f\u7528\uff0c\u5177\u5907\u6309 rank \u62e5\u6709\u7684\u4f18\u5316\u5668\u72b6\u6001\u3001\u68c0\u67e5\u70b9\uff0f\u6062\u590d\u3001\u53d6\u6d88\u4e0e\u8fdb\u5ea6\u4e0a\u62a5\u3002\u5b83\u4eec\n\u4e0d\u4f1a\u56e0\u8c03\u7528 <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.train</span></code> \u800c\u88ab\u9690\u5f0f\u542f\u7528\uff1b\u5e76\u4e14\u53ea\u6709\u5f53\u524d\u5411\u6267\u884c\u3001\u68af\u5ea6\u3001\u4f18\u5316\u5668\u66f4\u65b0\u4e0e\u68c0\u67e5\u70b9\n\u5f52\u5c5e\u90fd\u4fdd\u6301\u58f0\u660e\u7684\u5206\u5e03\u5f0f\u8bed\u4e49\u65f6\uff0c\u5206\u5e03\u5f0f\u8bad\u7ec3\u624d\u7b97\u5b8c\u6210\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5fc5\u987b\u8bf4\u660e\u7684\u8bed\u4e49<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#rank-mps\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6309 rank \u62e5\u6709\u7684 MPS<a class=\"headerlink\" href=\"#rank-mps\" title=\"Link to this heading\">#</a></h2><p>MPS \u6267\u884c\u540c\u6837\u53ef\u4ee5\u628a\u4e00\u4e2a\u6001\u5206\u5e03\u5230\u591a\u4e2a rank\uff1a</p>"}
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

selector_to_html = {"a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5404\u5c42\u7ea7\u8bc1\u660e\u4ec0\u4e48<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u7684\u6d4b\u8bd5\u6309\u5c42\u7ea7\u7ec4\u7ec7\u3002\u5148\u8fd0\u884c\u6700\u5c0f\u4e14\u6709\u610f\u4e49\u7684\u5c42\u7ea7\uff0c\u518d\u6839\u636e\u5f71\u54cd\u8303\u56f4\u9010\u6b65\u6269\u5927\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5\u6d4b\u8bd5\u4f9d\u8d56<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5feb\u901f\u5f00\u59cb<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u7a7a\u7684\u9009\u62e9\u4e0d\u662f\u9a8c\u8bc1\uff1a\u6ca1\u6709\u6536\u96c6\u5230\u4efb\u4f55\u7b97\u4f8b\u7684\u5c42\u7ea7\u4ec0\u4e48\u4e5f\u6ca1\u6709\u8bc1\u660e\u3002</p>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u53d1\u5e03\u8fb9\u754c<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2><p>\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u4efb\u52a1\u4f1a\u62a5\u544a\u9636\u6bb5\u3001\u6700\u540e\u64cd\u4f5c\u3001\u5df2\u5b8c\u6210\u5de5\u4f5c\u3001\u5185\u5b58\u3001\u96c6\u5408\u901a\u4fe1\u72b6\u6001\u4e0e rank\uff0c\n\u65e0\u8fdb\u5c55\u770b\u95e8\u72d7\u4f1a\u5bf9\u505c\u6ede\u8fdb\u884c\u5206\u7c7b\uff0c\u800c\u4e0d\u662f\u4efb\u5176\u9759\u9ed8\u6302\u8d77\u3002\u53d1\u5e03\u7ea7\u53ef\u6269\u5c55\u6027\u8bc1\u636e\u9700\u8981\u5df2\u63d0\u5347\u7684\n\u57fa\u51c6\u8f7d\u8377\u901a\u8fc7\u53d1\u5e03\u7b56\u7565\u4e0e\u5ba1\u8ba1\u547d\u4ee4\uff1b\u6b63\u786e\u6027\u5957\u4ef6\u3001\u8986\u76d6\u7387\u6570\u5b57\u4e0e\u8bbe\u5907\u5192\u70df\u8fd0\u884c\u90fd\u4e0d\u662f\u53d1\u5e03\u8bc1\u636e\u3002</p>"}
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

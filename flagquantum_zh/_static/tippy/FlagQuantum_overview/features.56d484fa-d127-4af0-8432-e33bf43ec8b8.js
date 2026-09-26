selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5206\u5e03\u5f0f\u6a21\u62df<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u95e8\u96c6\u5408\u4e0e\u53ef\u6269\u5c55\u6027<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7279\u6027<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u4e3a\u91cf\u5b50\u7535\u8def\u6a21\u62df\u63d0\u4f9b\u4e86\u4e00\u5957\u5168\u9762\u7684\u529f\u80fd\uff1a</p>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6570\u636e\u7f16\u7801<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id6\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u53ef\u89c6\u5316\u4e0e\u4e92\u64cd\u4f5c\u6027<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id7\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u751f\u6001\u7cfb\u7edf\u96c6\u6210<a class=\"headerlink\" href=\"#id7\" title=\"Link to this heading\">#</a></h2><p>FlagQuantum \u662f FlagOS \u7684\u6838\u5fc3\u7ec4\u4ef6\uff0cFlagOS \u662f\u4e00\u4e2a\u5f00\u6e90\u7684 AI \u7cfb\u7edf\u8f6f\u4ef6\u6808\uff0c\u65e8\u5728\u901a\u8fc7\u65e0\u7f1d\u96c6\u6210\u5404\u79cd\u6a21\u578b\u3001\u7cfb\u7edf\u548c\u82af\u7247\u6765\u4fc3\u8fdb\u5f00\u653e\u6280\u672f\u751f\u6001\u3002\u5728 FlagOS \u4e2d\uff0cFlagQuantum \u4e0e\u5176\u4ed6\u7ec4\u4ef6\u534f\u540c\u5de5\u4f5c\uff0c\u5b9e\u73b0\u7aef\u5230\u7aef\u7684\u91cf\u5b50-\u7ecf\u5178\u5de5\u4f5c\u6d41\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u9ad8\u7ea7\u529f\u80fd<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>"}
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

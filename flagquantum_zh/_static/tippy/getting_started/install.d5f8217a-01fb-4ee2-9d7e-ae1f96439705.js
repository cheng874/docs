selector_to_html = {"a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7cfb\u7edf\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u5305\u542b\u6709\u5173 FlagQuantum \u7684\u786c\u4ef6\u5e73\u53f0\u548c\u8f6f\u4ef6\u8981\u6c42\u7684\u4fe1\u606f\u3002</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6b65\u9aa4<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#flagquantum\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5 FlagQuantum<a class=\"headerlink\" href=\"#flagquantum\" title=\"Link to this heading\">#</a></h1><p>\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u8bf7\u5148\u9605\u8bfb<a class=\"reference internal\" href=\"requirements.html\"><span class=\"std std-doc\">\u7cfb\u7edf\u8981\u6c42</span></a>\u3002</p>"}
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

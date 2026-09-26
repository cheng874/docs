selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5bfc\u51fa\u5230\u771f\u5b9e\u91cf\u5b50\u786c\u4ef6<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u7535\u8def\u53ef\u4ee5\u5bfc\u51fa\u4e3a OpenQASM 3.0 \u683c\u5f0f\uff0c\u5e76\u5728\u6240\u6709\u4e3b\u6d41\u91cf\u5b50\u8ba1\u7b97\u5e73\u53f0\u4e0a\u8fd0\u884c\uff1a</p>"}
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

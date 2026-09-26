selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u53ef\u9006\u6a21\u5f0f<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u5bf9\u4e8e\u9700\u8981\u68af\u5ea6\u8ba1\u7b97\u7684\u5927\u578b\u7535\u8def\uff0c\u4f7f\u7528\u53ef\u9006\u6a21\u5f0f\u4ee5\u51cf\u5c11\u5185\u5b58\u4f7f\u7528\uff1a</p>"}
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

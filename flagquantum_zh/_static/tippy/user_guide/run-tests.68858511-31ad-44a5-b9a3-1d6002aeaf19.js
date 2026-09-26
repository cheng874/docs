selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\u5757\u6765\u8fd0\u884c\u6d4b\u8bd5\u3002</p>"}
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

selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u6559\u7a0b<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u60a8\u53ef\u4ee5\u5728 <code class=\"docutils literal notranslate\"><span class=\"pre\">examples/tutorials</span></code> \u4e2d\u63a2\u7d22\u6211\u4eec\u7684 Jupyter Notebook\uff08<code class=\"docutils literal notranslate\"><span class=\"pre\">.ipynb</span></code>\uff09\u6559\u7a0b\u7cfb\u5217\uff0c\u9ad8\u6548\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 FlagQuantum\uff1a</p>"}
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

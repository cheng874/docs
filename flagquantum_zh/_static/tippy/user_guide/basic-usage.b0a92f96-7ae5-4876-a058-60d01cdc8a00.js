selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u57fa\u672c\u4f7f\u7528<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u521b\u5efa\u5206\u5e03\u5f0f\u91cf\u5b50\u8bbe\u5907\u5e76\u4f7f\u7528\u51fd\u6570\u5f0f API \u5e94\u7528\u95e8\uff1a</p>"}
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

selector_to_html = {"a[href=\"#gpu\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5206\u5e03\u5f0f\u591a GPU \u6267\u884c<a class=\"headerlink\" href=\"#gpu\" title=\"Link to this heading\">#</a></h1><p>\u8de8\u591a\u4e2a GPU \u8fd0\u884c\u91cf\u5b50\u6a21\u62df\uff1a</p>"}
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

selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u6a21\u578b\u4e2d\u5fc3<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u6a21\u578b\u4e2d\u5fc3\u5c55\u793a\u5e73\u53f0\u6258\u7ba1\u7684\u6a21\u578b\u5217\u8868\uff0c\u4ec5\u663e\u793a\u72b6\u6001\u4e3a\u6210\u529f\u7684\u6a21\u578b\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6392\u5e8f<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>\u6309\u521b\u5efa\u65f6\u95f4\u5012\u5e8f\u6392\u5217\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5217\u8868\u5b57\u6bb5<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8bbf\u95ee\u8def\u5f84<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u5de6\u4fa7\u5bfc\u822a\u680f \u2192 <strong>\u6a21\u578b\u4e2d\u5fc3</strong></p>"}
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

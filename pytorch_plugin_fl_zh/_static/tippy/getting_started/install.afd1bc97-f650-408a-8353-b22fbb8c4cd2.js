selector_to_html = {"a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6784\u5efa\u73af\u5883\u53d8\u91cf<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><h3>\u8fd0\u884c\u65f6\u73af\u5883\u53d8\u91cf<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#docker\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker \u955c\u50cf\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id5\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u65f6\u73af\u5883\u53d8\u91cf<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>Docker \u955c\u50cf\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u534e\u4e3a\u6607\u817e\u5e73\u53f0<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h3><p>\u5728\u6607\u817e\u5e73\u53f0\u4e0a\uff0cFlagGems \u548c CUDA \u5185\u6838\u88ab\u7981\u7528\u3002\u4ec5\u7f16\u8bd1\u6607\u817e\u5185\u6838\u540e\u7aef\uff08ACL NN API\uff09\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ece\u6e90\u7801\u6784\u5efa<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><h3>CUDA \u5e73\u53f0<a class=\"headerlink\" href=\"#cuda\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#cuda\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">CUDA \u5e73\u53f0<a class=\"headerlink\" href=\"#cuda\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#maca\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">MACA \u5e73\u53f0<a class=\"headerlink\" href=\"#maca\" title=\"Link to this heading\">#</a></h3>"}
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

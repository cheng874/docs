selector_to_html = {"a[href=\"#id2\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e00\u5143\u7b97\u5b50\uff0828\uff09<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#flagtensor\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u7b97\u5b50\u8986\u76d6\u7387\u77e9\u9635<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><p>\u4ece\u6ce8\u518c\u8868\u751f\u6210\uff1a<code class=\"docutils literal notranslate\"><span class=\"pre\">conf/operators.yaml</span></code></p>", "a[href=\"#id5\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u7a00\u758f\u7b97\u5b50\uff081\uff09<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id6\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6458\u8981<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6309\u7c7b\u522b<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><h3>\u4e00\u5143\u7b97\u5b50\uff0828\uff09<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id3\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e8c\u5143\u7b97\u5b50\uff084\uff09<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id4\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u6536\u7f29\u7b97\u5b50\uff083\uff09<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h3>"}
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

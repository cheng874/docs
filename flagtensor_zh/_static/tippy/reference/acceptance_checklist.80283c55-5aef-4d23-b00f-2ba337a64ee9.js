selector_to_html = {"a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6587\u6863\u4e0e\u53d1\u5e03<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#ci-cd\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">CI/CD \u4e0e\u81ea\u52a8\u5316<a class=\"headerlink\" href=\"#ci-cd\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5df2\u77e5\u95ee\u9898<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2><p>\u6240\u6709\u5148\u524d\u8bb0\u5f55\u7684\u95ee\u9898\u5df2\u89e3\u51b3\uff1a</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6027\u80fd\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6d4b\u8bd5\u6846\u67b6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7ed3\u6784\u4e0e\u7ec4\u7ec7<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#flagtensor\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u9a8c\u6536\u68c0\u67e5\u6e05\u5355<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><p>\u672c\u68c0\u67e5\u6e05\u5355\u8ddf\u8e2a\u7b97\u5b50\u5e93\u9a8c\u6536\u6807\u51c6\u7684\u5f53\u524d\u5408\u89c4\u72b6\u6001\u3002</p>"}
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

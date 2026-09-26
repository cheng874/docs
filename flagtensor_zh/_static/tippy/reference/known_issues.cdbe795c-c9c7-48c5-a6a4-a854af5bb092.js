selector_to_html = {"a[href=\"#id10\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u672a\u6765\u5de5\u4f5c<a class=\"headerlink\" href=\"#id10\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5df2\u77e5\u9650\u5236<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><h3>\u7b97\u5b50\u7279\u5b9a\u7684\u6570\u503c\u95ee\u9898<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b9e\u9a8c\u6027\u7b97\u5b50<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><h3>block_sparse_contraction<a class=\"headerlink\" href=\"#block-sparse-contraction\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#flagtensor\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u5df2\u77e5\u95ee\u9898<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6587\u6863\u8ddf\u8e2a\u5f53\u524d FlagTensor \u5b9e\u73b0\u4e2d\u7684\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236\u3002</p>", "a[href=\"#dtype\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Dtype \u8986\u76d6\u7387<a class=\"headerlink\" href=\"#dtype\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id5\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u5f62\u72b6\u8986\u76d6\u7387<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id3\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u7b97\u5b50\u7279\u5b9a\u7684\u6570\u503c\u95ee\u9898<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id6\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6027\u80fd\u8bf4\u660e<a class=\"headerlink\" href=\"#id6\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id7\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fc1\u79fb\u8bf4\u660e<a class=\"headerlink\" href=\"#id7\" title=\"Link to this heading\">#</a></h2><h3>\u76ee\u5f55\u7ed3\u6784\u8fc7\u6e21<a class=\"headerlink\" href=\"#id8\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id8\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u76ee\u5f55\u7ed3\u6784\u8fc7\u6e21<a class=\"headerlink\" href=\"#id8\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#ci\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">CI \u73af\u5883<a class=\"headerlink\" href=\"#ci\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id4\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u57fa\u51c6\u6d4b\u8bd5\u6a21\u5f0f\u8986\u76d6\u7387<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id9\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u6ce8\u518c\u8868\u8fc7\u6e21<a class=\"headerlink\" href=\"#id9\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#block-sparse-contraction\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">block_sparse_contraction<a class=\"headerlink\" href=\"#block-sparse-contraction\" title=\"Link to this heading\">#</a></h3>"}
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

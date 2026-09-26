selector_to_html = {"a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u901a\u8fc7\u7cbe\u5ea6\u4e8c\u5206\u6cd5\u6392\u67e5\u6570\u503c\u7cbe\u5ea6\u95ee\u9898<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u5f53\u51fa\u73b0\u6570\u503c\u5dee\u5f02\u65f6\uff0c\u9694\u79bb\u51fa\u5bfc\u81f4\u95ee\u9898\u7684\u5c42\u3002\u5982\u679c\u8f93\u51fa\u5728\u7b2c N \u6b65\u53d1\u6563\u4f46\u7b2c N-1 \u6b65\u6b63\u5e38\uff0c\u5219\u95ee\u9898\u5c42/\u7b97\u5b50\u88ab\u5b9a\u4f4d\u3002</p>", "a[href=\"#aten\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">ATen \u66ff\u6362\u65e5\u5fd7<a class=\"headerlink\" href=\"#aten\" title=\"Link to this heading\">#</a></h2><p>\u8bb0\u5f55\u54ea\u4e9b PyTorch ATen \u7b97\u5b50\u88ab FlagGems \u66ff\u6362\uff1a</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8c03\u5ea6\u65e5\u5fd7<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u67e5\u770b\u6bcf\u4e2a\u878d\u5408\u7b97\u5b50\u89e3\u6790\u5230\u54ea\u4e2a\u540e\u7aef\uff08\u5728\u670d\u52a1\u5668\u542f\u52a8\u65f6\u5199\u5165\uff09\uff1a</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5e38\u89c1\u95ee\u9898<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8c03\u8bd5\u4e0e\u8bca\u65ad<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u4ecb\u7ecd\u7b97\u5b50\u8c03\u5ea6\u7684\u8bca\u65ad\u65b9\u6cd5\u3002</p>"}
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

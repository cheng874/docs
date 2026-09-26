selector_to_html = {"a[href=\"install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5 sglang-plugin-FL<a class=\"headerlink\" href=\"#sglang-plugin-fl\" title=\"Link to this heading\">#</a></h1><h2>Docker \u955c\u50cf\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2><p>v0.1.0-rc2 \u9884\u6784\u5efa Docker \u955c\u50cf\uff1a</p>", "a[href=\"install.html#docker\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker \u955c\u50cf\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2><p>v0.1.0-rc2 \u9884\u6784\u5efa Docker \u955c\u50cf\uff1a</p>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>\u8f6f\u4ef6\u8981\u6c42<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>sglang-plugin-FL \u9700\u8981\u4ee5\u4e0b\u8f6f\u4ef6\u7248\u672c\u3002</p>", "a[href=\"requirements.html#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u786c\u4ef6\u8981\u6c42<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"requirements.html#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8f6f\u4ef6\u8981\u6c42<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>sglang-plugin-FL \u9700\u8981\u4ee5\u4e0b\u8f6f\u4ef6\u7248\u672c\u3002</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5feb\u901f\u5165\u95e8<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u4ecb\u7ecd\u5b89\u88c5 sglang-plugin-FL \u7684\u8981\u6c42\uff0c\u5e76\u6307\u5bfc\u60a8\u5b8c\u6210\u5b89\u88c5\u8fc7\u7a0b\u548c\u8fd0\u884c\u63a8\u7406\u4efb\u52a1\u3002</p>", "a[href=\"requirements.html#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5df2\u9a8c\u8bc1\u7684\u6a21\u578b<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>"}
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

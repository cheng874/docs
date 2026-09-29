selector_to_html = {"a[href=\"#test-matrix\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Test Matrix \u6d4b\u8bd5\u77e9\u9635<a class=\"headerlink\" href=\"#test-matrix\" title=\"Link to this heading\">#</a></h1><p>Test Matrix \u662f FlagCICD \u57fa\u7840\u5c42\u7684\u6838\u5fc3\u6d4b\u8bd5\u7ec4\u4ef6\uff0c\u91c7\u7528\u6f0f\u6597\u5f0f\u5206\u5c42\u89e6\u53d1\u673a\u5236\uff0c\u5b9e\u73b0\u4ece\u5feb\u901f\u53cd\u9988\u5230\u5927\u89c4\u6a21\u6027\u80fd\u6d4b\u8bd5\u7684\u5b8c\u6574\u6d4b\u8bd5\u4f53\u7cfb\u3002</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6982\u8ff0<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>Test Matrix \u8986\u76d6 L0-L2 \u4e09\u7ea7\u6d4b\u8bd5\uff0c\u901a\u8fc7\u5206\u5c42\u89e6\u53d1\u786e\u4fdd\u6d4b\u8bd5\u6548\u7387\u548c\u8d28\u91cf\u3002\u8f7b\u91cf\u6d4b\u8bd5\u901a\u8fc7\u540e\u624d\u53ef\u89e6\u53d1\u91cd\u91cf\u6d4b\u8bd5\uff0c\u907f\u514d\u8d44\u6e90\u6d6a\u8d39\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u89e6\u53d1\u673a\u5236<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p><strong>\u6f0f\u6597\u5f0f\u5206\u5c42\u89e6\u53d1</strong>\uff1a\u8f7b\u91cf\u6d4b\u8bd5\u901a\u8fc7\u624d\u53ef\u89e6\u53d1\u91cd\u91cf\u6d4b\u8bd5\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6d4b\u8bd5\u5c42\u7ea7<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>"}
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

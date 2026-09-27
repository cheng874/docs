selector_to_html = {"a[href=\"#verl-fl\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">verl-FL \u7528\u6237\u6307\u5357<a class=\"headerlink\" href=\"#verl-fl\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u63d0\u4f9b\u4f7f\u7528 verl-FL \u5728\u4e0d\u540c\u786c\u4ef6\u5e73\u53f0\u4e0a\u8fdb\u884c\u7aef\u5230\u7aef GRPO \u8bad\u7ec3\u7684\u8be6\u7ec6\u6307\u5bfc\u3002</p>"}
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

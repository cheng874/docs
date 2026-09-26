selector_to_html = {"a[href=\"#docker\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker \u955c\u50cf\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2><p>TransformerEngine-FL \u4e0e Megatron-LM-FL \u5171\u7528\u540c\u4e00 Docker \u955c\u50cf\uff1a</p>", "a[href=\"#flagos\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ece FlagOS \u4ed3\u5e93\u76f4\u63a5\u5b89\u88c5<a class=\"headerlink\" href=\"#flagos\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#transformerengine-fl\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5 TransformerEngine-FL<a class=\"headerlink\" href=\"#transformerengine-fl\" title=\"Link to this heading\">#</a></h1><h2>Docker \u955c\u50cf\uff08\u63a8\u8350\uff09<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2><p>TransformerEngine-FL \u4e0e Megatron-LM-FL \u5171\u7528\u540c\u4e00 Docker \u955c\u50cf\uff1a</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4ece\u6e90\u7801\u5b89\u88c5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>\u6709\u5173\u4f7f\u7528 TransformerEngine-FL\u3001Megatron-LM-FL \u548c FlagScale \u7684\u7aef\u5230\u7aef\u8bad\u7ec3\u5de5\u4f5c\u6d41\uff0c\u8bf7\u53c2\u89c1<a class=\"reference internal\" href=\"#/e2e-use-case.md\"><span class=\"xref myst\">\u7aef\u5230\u7aef\u7528\u4f8b\uff1aTransformerEngine-FL + Megatron-LM-FL + FlagScale</span></a>\u3002</p>"}
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

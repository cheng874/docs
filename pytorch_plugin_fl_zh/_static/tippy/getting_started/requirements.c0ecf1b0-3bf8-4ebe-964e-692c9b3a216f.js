selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8f6f\u4ef6\u4f9d\u8d56<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>PyTorch-Plugin-FL \u9700\u8981\u4ee5\u4e0b\u8f6f\u4ef6\u7248\u672c\u3002</p>", "a[href=\"#flaggems\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">FlagGems<a class=\"headerlink\" href=\"#flaggems\" title=\"Link to this heading\">#</a></h2><p>\u9700\u8981 FlagGems\uff08\u7248\u672c 5.0.2 \u6216\u66f4\u9ad8\uff09\uff0c\u5e76\u542f\u7528 <code class=\"docutils literal notranslate\"><span class=\"pre\">DFLAGGEMS_BUILD_C_EXTENSIONS</span></code>\u3002\u6709\u5173\u6e90\u7801\u5b89\u88c5\uff0c\u8bf7\u53c2\u9605 <a class=\"reference external\" href=\"https://flagos-ai.github.io/FlagGems/getting-started/install/\">FlagGems \u5b89\u88c5\u6307\u5357</a>\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u786c\u4ef6\u8fd0\u884c\u65f6\u4f9d\u8d56<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>"}
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

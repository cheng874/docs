selector_to_html = {"a[href=\"onlinelaboratory.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Online Laboratory User Guide<a class=\"headerlink\" href=\"#online-laboratory-user-guide\" title=\"Link to this heading\">#</a></h1><h2>Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h2><p>For detailed usage instructions of Visual Studio Code, please refer to:<a class=\"reference external\" href=\"https://code.visualstudio.com/docs\">https://code.visualstudio.com/docs</a>.</p>", "a[href=\"onlinelaboratory.html#reset-environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reset Environment<a class=\"headerlink\" href=\"#reset-environment\" title=\"Link to this heading\">#</a></h2><p>To reset development environment to its initial state, perform the following steps:</p>", "a[href=\"onlinelaboratory.html#getting-started\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h2><p>For detailed usage instructions of Visual Studio Code, please refer to:<a class=\"reference external\" href=\"https://code.visualstudio.com/docs\">https://code.visualstudio.com/docs</a>.</p>", "a[href=\"#online-laboratory-documentation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Online Laboratory Documentation<a class=\"headerlink\" href=\"#online-laboratory-documentation\" title=\"Link to this heading\">#</a></h1>"}
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

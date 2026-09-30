selector_to_html = {"a[href=\"#relationship-with-flaggems-and-sglang-plugin-fl\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Relationship with FlagGems and sglang-plugin-FL<a class=\"headerlink\" href=\"#relationship-with-flaggems-and-sglang-plugin-fl\" title=\"Link to this heading\">#</a></h2><p>Vendors bringing up a new backend should start from the bring-up guide kept in the upstream repository at <code class=\"docutils literal notranslate\"><span class=\"pre\">src/flaggems_sglang/runtime/backend/README.md</span></code>.</p>", "a[href=\"#features\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Features<a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h1><p>FlagGems-sglang provides the following key features:</p>", "a[href=\"#supported-backends\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Supported backends<a class=\"headerlink\" href=\"#supported-backends\" title=\"Link to this heading\">#</a></h2><p>Vendors ship their specializations under <code class=\"docutils literal notranslate\"><span class=\"pre\">src/flaggems_sglang/runtime/backend/_&lt;vendor&gt;/</span></code>. Each vendor folder declares the device it serves:</p>"}
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

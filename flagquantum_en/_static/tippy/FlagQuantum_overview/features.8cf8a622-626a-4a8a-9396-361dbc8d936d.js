selector_to_html = {"a[href=\"#ecosystem-integration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Ecosystem Integration<a class=\"headerlink\" href=\"#ecosystem-integration\" title=\"Link to this heading\">#</a></h2><p>FlagQuantum is a core component of FlagOS, an open-source AI system software stack designed to foster an open technology ecosystem through seamless integration of diverse models, systems, and chips. Within FlagOS, FlagQuantum works alongside other components to enable end-to-end quantum-classical workflows.</p>", "a[href=\"#visualization-interoperability\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Visualization &amp; Interoperability<a class=\"headerlink\" href=\"#visualization-interoperability\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#advanced-capabilities\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Advanced Capabilities<a class=\"headerlink\" href=\"#advanced-capabilities\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#data-encoding\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Data Encoding<a class=\"headerlink\" href=\"#data-encoding\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#distributed-simulation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Distributed Simulation<a class=\"headerlink\" href=\"#distributed-simulation\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#features\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Features<a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum provides a comprehensive set of features for quantum circuit simulation:</p>", "a[href=\"#gate-set-extensibility\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Gate Set &amp; Extensibility<a class=\"headerlink\" href=\"#gate-set-extensibility\" title=\"Link to this heading\">#</a></h2>"}
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

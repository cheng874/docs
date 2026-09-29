selector_to_html = {"a[href=\"capabilities.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Capabilities<a class=\"headerlink\" href=\"#capabilities\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum separates what a pathway <em>is</em> from how strongly it is supported.\nMaturity applies only to the scope stated for each capability, and a local,\nreplicated, sliced, or planned execution path is never distributed scalability\nevidence.</p>", "a[href=\"#operator-capabilities\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Operator Capabilities<a class=\"headerlink\" href=\"#operator-capabilities\" title=\"Link to this heading\">#</a></h1><p>An executable registered lowering for an operator on a given backend is not a\nrelease or scalability claim. <code class=\"docutils literal notranslate\"><span class=\"pre\">yes</span></code> means the operator can be lowered on that\nbackend today; the support level of the execution path itself is published in\n<a class=\"reference internal\" href=\"capabilities.html\"><span class=\"std std-doc\">Capabilities</span></a>.</p>", "a[href=\"#reading-the-columns\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reading the columns<a class=\"headerlink\" href=\"#reading-the-columns\" title=\"Link to this heading\">#</a></h2><p>The table is generated from the repository\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">operator_manifest.json</span></code>; treat the\nmanifest as authoritative and this page as its rendering.</p>"}
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

selector_to_html = {"a[href=\"#tutorials\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">#</a></h1><p>You can explore our tutorial series in terms of Jupyter Note (<code class=\"docutils literal notranslate\"><span class=\"pre\">.jpynb</span></code>) in <code class=\"docutils literal notranslate\"><span class=\"pre\">examples/tutorials</span></code> to learn how to use FlagQuantum effectively:</p>"}
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

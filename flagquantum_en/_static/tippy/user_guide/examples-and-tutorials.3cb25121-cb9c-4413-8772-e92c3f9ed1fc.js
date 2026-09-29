selector_to_html = {"a[href=\"#examples-and-tutorials\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Examples and Tutorials<a class=\"headerlink\" href=\"#examples-and-tutorials\" title=\"Link to this heading\">#</a></h1><h2>Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">#</a></h2><p>Ten notebooks in <code class=\"docutils literal notranslate\"><span class=\"pre\">examples/tutorials</span></code> teach the concepts behind the runnable examples and are meant to be read in order, though each stands alone:</p>", "a[href=\"#suggested-smoke-runs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Suggested smoke runs<a class=\"headerlink\" href=\"#suggested-smoke-runs\" title=\"Link to this heading\">#</a></h2><p>These commands need neither credentials nor optional backends. The curated single-machine examples do not initialise distributed backends and make no distributed scalability claim.</p>", "a[href=\"#tutorials\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tutorials<a class=\"headerlink\" href=\"#tutorials\" title=\"Link to this heading\">#</a></h2><p>Ten notebooks in <code class=\"docutils literal notranslate\"><span class=\"pre\">examples/tutorials</span></code> teach the concepts behind the runnable examples and are meant to be read in order, though each stands alone:</p>", "a[href=\"#script-examples\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Script examples<a class=\"headerlink\" href=\"#script-examples\" title=\"Link to this heading\">#</a></h2>"}
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

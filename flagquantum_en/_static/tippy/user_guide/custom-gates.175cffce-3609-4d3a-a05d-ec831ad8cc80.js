selector_to_html = {"a[href=\"#register-custom-gates\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Register custom gates<a class=\"headerlink\" href=\"#register-custom-gates\" title=\"Link to this heading\">#</a></h1><p>Extend FlagQuantum with your own gate definitions:</p>"}
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

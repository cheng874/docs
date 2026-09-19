selector_to_html = {"a[href=\"#parameterized-gates\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Parameterized gates<a class=\"headerlink\" href=\"#parameterized-gates\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum supports trainable quantum circuits with gradient computation:</p>"}
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

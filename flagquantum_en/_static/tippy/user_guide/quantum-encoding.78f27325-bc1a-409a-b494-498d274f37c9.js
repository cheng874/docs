selector_to_html = {"a[href=\"#quantum-encoding\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Quantum encoding<a class=\"headerlink\" href=\"#quantum-encoding\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum provides multiple encoding schemes for embedding classical data into quantum states:</p>"}
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

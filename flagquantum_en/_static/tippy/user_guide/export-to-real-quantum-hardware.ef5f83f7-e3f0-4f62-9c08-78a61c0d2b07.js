selector_to_html = {"a[href=\"#export-to-real-quantum-hardware\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Export to real quantum hardware<a class=\"headerlink\" href=\"#export-to-real-quantum-hardware\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum circuits can be exported to OpenQASM 3.0 and run on all major quantum computing platforms:</p>"}
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

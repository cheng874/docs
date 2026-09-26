selector_to_html = {"a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><p>This section includes information about the hardware platforms and software requirements for FlagQuantum.</p>", "a[href=\"#install-flagquantum\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install FlagQuantum<a class=\"headerlink\" href=\"#install-flagquantum\" title=\"Link to this heading\">#</a></h1><p>Read <a class=\"reference internal\" href=\"requirements.html\"><span class=\"std std-doc\">Requirements</span></a> before proceeding.</p>", "a[href=\"#steps\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Steps<a class=\"headerlink\" href=\"#steps\" title=\"Link to this heading\">#</a></h2>"}
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

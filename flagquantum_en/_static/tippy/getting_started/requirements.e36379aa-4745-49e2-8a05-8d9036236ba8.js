selector_to_html = {"a[href=\"#requirements\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><p>This section includes information about the hardware platforms and software requirements for FlagQuantum.</p>", "a[href=\"#software-requirements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software Requirements<a class=\"headerlink\" href=\"#software-requirements\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#supported-hardware-platforms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Supported hardware platforms<a class=\"headerlink\" href=\"#supported-hardware-platforms\" title=\"Link to this heading\">#</a></h2><p>The following list includes the supported hardware platforms:</p>"}
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

selector_to_html = {"a[href=\"#basic-usage\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Basic Usage<a class=\"headerlink\" href=\"#basic-usage\" title=\"Link to this heading\">#</a></h1><h2>Import and register device<a class=\"headerlink\" href=\"#import-and-register-device\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#manage-device-context\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Manage device context<a class=\"headerlink\" href=\"#manage-device-context\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#import-and-register-device\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Import and register device<a class=\"headerlink\" href=\"#import-and-register-device\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#transfer-data-between-devices\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Transfer data between devices<a class=\"headerlink\" href=\"#transfer-data-between-devices\" title=\"Link to this heading\">#</a></h2>"}
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

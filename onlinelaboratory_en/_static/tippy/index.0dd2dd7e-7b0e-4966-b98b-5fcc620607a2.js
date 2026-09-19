selector_to_html = {"a[href=\"onlinelaboratory.html#getting-started\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h2>", "a[href=\"onlinelaboratory.html#querying-the-computing-configuration\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Querying the Computing Configuration<a class=\"headerlink\" href=\"#querying-the-computing-configuration\" title=\"Link to this heading\">#</a></h3><p>Query the computing power configuration through terminal commands according to the GPU card type.</p>", "a[href=\"onlinelaboratory.html#uploading-downloading-files\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Uploading / Downloading Files<a class=\"headerlink\" href=\"#uploading-downloading-files\" title=\"Link to this heading\">#</a></h3><p>You can upload or download files such as code packages and models through the following methods:</p>", "a[href=\"onlinelaboratory.html#reservation-management\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Reservation Management<a class=\"headerlink\" href=\"#reservation-management\" title=\"Link to this heading\">#</a></h3>", "a[href=\"onlinelaboratory.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Online Laboratory User Guide<a class=\"headerlink\" href=\"#online-laboratory-user-guide\" title=\"Link to this heading\">#</a></h1><h2>Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#online-laboratory-documentation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Online Laboratory Documentation<a class=\"headerlink\" href=\"#online-laboratory-documentation\" title=\"Link to this heading\">#</a></h1>", "a[href=\"onlinelaboratory.html#online-development-environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Online Development Environment<a class=\"headerlink\" href=\"#online-development-environment\" title=\"Link to this heading\">#</a></h2><h3>Environment Access<a class=\"headerlink\" href=\"#environment-access\" title=\"Link to this heading\">#</a></h3><p>After starting the instance, you can use one of the following methods to access the cloud-based online development environment:</p>", "a[href=\"onlinelaboratory.html#reservation-usage\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reservation Usage<a class=\"headerlink\" href=\"#reservation-usage\" title=\"Link to this heading\">#</a></h2><h3>Reservation Rules<a class=\"headerlink\" href=\"#reservation-rules\" title=\"Link to this heading\">#</a></h3>", "a[href=\"onlinelaboratory.html#container-instance\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Container Instance<a class=\"headerlink\" href=\"#container-instance\" title=\"Link to this heading\">#</a></h3>", "a[href=\"onlinelaboratory.html#reset-environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reset Environment<a class=\"headerlink\" href=\"#reset-environment\" title=\"Link to this heading\">#</a></h2><p>To reset the development environment to its initial state, perform the following steps:</p>", "a[href=\"onlinelaboratory.html#reservation-rules\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Reservation Rules<a class=\"headerlink\" href=\"#reservation-rules\" title=\"Link to this heading\">#</a></h3>", "a[href=\"onlinelaboratory.html#environment-access\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Environment Access<a class=\"headerlink\" href=\"#environment-access\" title=\"Link to this heading\">#</a></h3><p>After starting the instance, you can use one of the following methods to access the cloud-based online development environment:</p>"}
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

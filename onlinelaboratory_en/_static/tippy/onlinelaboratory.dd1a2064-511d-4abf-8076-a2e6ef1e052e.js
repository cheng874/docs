selector_to_html = {"a[href=\"#reserve-time-slots-and-start-container-instance\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Reserve time slots and start container instance<a class=\"headerlink\" href=\"#reserve-time-slots-and-start-container-instance\" title=\"Link to this heading\">#</a></h3><p>A container instance in Reservation mode can only be accessed within the reserved time slots.</p>", "a[href=\"#access-online-development-environment\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Access online development environment<a class=\"headerlink\" href=\"#access-online-development-environment\" title=\"Link to this heading\">#</a></h3><p>After starting the instance, you can use one of the following methods to access the cloud-based online development environment:</p>", "a[href=\"#query-the-computing-configuration\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Query the computing configuration<a class=\"headerlink\" href=\"#query-the-computing-configuration\" title=\"Link to this heading\">#</a></h3><p>Query the computing power configuration through terminal commands according to the GPU card type.</p>", "a[href=\"#reservation-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">1. Reservation mode<a class=\"headerlink\" href=\"#reservation-mode\" title=\"Link to this heading\">#</a></h2><h3>Reservation Rules<a class=\"headerlink\" href=\"#reservation-rules\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#reset-environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reset Environment<a class=\"headerlink\" href=\"#reset-environment\" title=\"Link to this heading\">#</a></h2><p>To reset the development environment to its initial state, perform the following steps:</p>", "a[href=\"#operations-in-online-development-environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Operations in online development environment<a class=\"headerlink\" href=\"#operations-in-online-development-environment\" title=\"Link to this heading\">#</a></h2><h3>Access online development environment<a class=\"headerlink\" href=\"#access-online-development-environment\" title=\"Link to this heading\">#</a></h3><p>After starting the instance, you can use one of the following methods to access the cloud-based online development environment:</p>", "a[href=\"#getting-started\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Getting started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#online-laboratory-user-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Online Laboratory User Guide<a class=\"headerlink\" href=\"#online-laboratory-user-guide\" title=\"Link to this heading\">#</a></h1><h2>Getting started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#upload-and-download-files\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Upload and download files<a class=\"headerlink\" href=\"#upload-and-download-files\" title=\"Link to this heading\">#</a></h3><p>You can upload files from your local place and download files to your local place, such as code packages through the following methods:</p>", "a[href=\"#dedicated-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">2. Dedicated mode<a class=\"headerlink\" href=\"#dedicated-mode\" title=\"Link to this heading\">#</a></h2><p>On the <strong>Container Instance</strong> page, in the <strong>Operation</strong> column, check the image information:</p>", "a[href=\"#reservation-rules\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Reservation Rules<a class=\"headerlink\" href=\"#reservation-rules\" title=\"Link to this heading\">#</a></h3>"}
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

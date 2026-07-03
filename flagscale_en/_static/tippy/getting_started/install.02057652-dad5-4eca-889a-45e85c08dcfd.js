selector_to_html = {"a[href=\"#rl-backend\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">RL backend<a class=\"headerlink\" href=\"#rl-backend\" title=\"Link to this heading\">#</a></h4><p>We recommend using the latest release of flagscale-train image.</p>", "a[href=\"#install-backends\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">1. Install backends<a class=\"headerlink\" href=\"#install-backends\" title=\"Link to this heading\">#</a></h3><h4>Inference / Serving backend<a class=\"headerlink\" href=\"#inference-serving-backend\" title=\"Link to this heading\">#</a></h4><p>We recommend using the latest release of flagscale-inference image.</p>", "a[href=\"#install-flagscale\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install FlagScale<a class=\"headerlink\" href=\"#install-flagscale\" title=\"Link to this heading\">#</a></h1><p>Read <a class=\"reference internal\" href=\"requirements.html\"><span class=\"std std-doc\">Requirements</span></a> before proceeding.</p>", "a[href=\"#id1\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">2. Install FlagScale<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h3><p><strong>Option 1: Install via pip</strong></p>", "a[href=\"#inference-serving-backend\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Inference / Serving backend<a class=\"headerlink\" href=\"#inference-serving-backend\" title=\"Link to this heading\">#</a></h4><p>We recommend using the latest release of flagscale-inference image.</p>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><p>This section includes information about the hardware platforms and models.</p>", "a[href=\"#training-backend\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Training backend<a class=\"headerlink\" href=\"#training-backend\" title=\"Link to this heading\">#</a></h4><p>We recommend using the latest release of flagscale-train image.</p>", "a[href=\"#setup\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Setup<a class=\"headerlink\" href=\"#setup\" title=\"Link to this heading\">#</a></h2><h3>1. Install backends<a class=\"headerlink\" href=\"#install-backends\" title=\"Link to this heading\">#</a></h3><h4>Inference / Serving backend<a class=\"headerlink\" href=\"#inference-serving-backend\" title=\"Link to this heading\">#</a></h4><p>We recommend using the latest release of flagscale-inference image.</p>"}
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

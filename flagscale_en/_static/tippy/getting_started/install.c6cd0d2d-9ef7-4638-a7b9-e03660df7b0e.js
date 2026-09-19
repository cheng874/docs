selector_to_html = {"a[href=\"#training-backend\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Training backend<a class=\"headerlink\" href=\"#training-backend\" title=\"Link to this heading\">#</a></h4><p>We recommend using the latest release of flagscale-train image.</p>", "a[href=\"#install-backends\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">1. Install backends<a class=\"headerlink\" href=\"#install-backends\" title=\"Link to this heading\">#</a></h3><h4>Inference / Serving backend<a class=\"headerlink\" href=\"#inference-serving-backend\" title=\"Link to this heading\">#</a></h4><p>We recommend using the latest release of flagscale-inference image.</p>", "a[href=\"#non-nvidia-platforms\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">3. Non-NVIDIA platforms<a class=\"headerlink\" href=\"#non-nvidia-platforms\" title=\"Link to this heading\">#</a></h3><p>On MetaX, Hygon, Ascend, and T-Head PPU, use the platform container image and install Megatron-LM-FL and TransformerEngine-FL from source at the matching release candidate.</p>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><p>This section includes information about the hardware platforms and models.</p>", "a[href=\"#setup\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Setup<a class=\"headerlink\" href=\"#setup\" title=\"Link to this heading\">#</a></h2><h3>1. Install backends<a class=\"headerlink\" href=\"#install-backends\" title=\"Link to this heading\">#</a></h3><h4>Inference / Serving backend<a class=\"headerlink\" href=\"#inference-serving-backend\" title=\"Link to this heading\">#</a></h4><p>We recommend using the latest release of flagscale-inference image.</p>", "a[href=\"#install-flagscale\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install FlagScale<a class=\"headerlink\" href=\"#install-flagscale\" title=\"Link to this heading\">#</a></h1><p>Read <a class=\"reference internal\" href=\"requirements.html\"><span class=\"std std-doc\">Requirements</span></a> before proceeding.</p>", "a[href=\"#rl-backend\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">RL backend<a class=\"headerlink\" href=\"#rl-backend\" title=\"Link to this heading\">#</a></h4><p>We recommend using the latest release of flagscale-train image.</p>", "a[href=\"#id1\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">2. Install FlagScale<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h3><p><strong>Option 1: Install via pip</strong></p>", "a[href=\"#inference-serving-backend\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Inference / Serving backend<a class=\"headerlink\" href=\"#inference-serving-backend\" title=\"Link to this heading\">#</a></h4><p>We recommend using the latest release of flagscale-inference image.</p>", "a[href=\"../user_guide/multi-platform-training.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Multi-Platform Training and Testing<a class=\"headerlink\" href=\"#multi-platform-training-and-testing\" title=\"Link to this heading\">#</a></h1><p>FlagScale has no hardware requirements of its own \u2014 it orchestrates training through the FlagOS plugins. This guide shows how to drive an end-to-end training job on four non-NVIDIA platforms (MetaX, Hygon, Ascend, T-Head PPU) with the plugin stack underneath.</p><p>Platform-specific plugin installation is documented in the plugin guides:</p>"}
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

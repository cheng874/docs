selector_to_html = {"a[href=\"#automatic-device-registration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Automatic device registration<a class=\"headerlink\" href=\"#automatic-device-registration\" title=\"Link to this heading\">#</a></h2><p>Automatically registers FlagGems Triton operators as dispatch implementations for the <code class=\"docutils literal notranslate\"><span class=\"pre\">flagos</span></code> device. Once imported, all tensor operations on <code class=\"docutils literal notranslate\"><span class=\"pre\">device=\"flagos\"</span></code> automatically use FlagGems Triton kernels without code changes.</p>", "a[href=\"#configurable-backend-routing\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Configurable backend routing<a class=\"headerlink\" href=\"#configurable-backend-routing\" title=\"Link to this heading\">#</a></h2><p>Select FlagGems or native vendor backend (CUDA/MACA/Ascend) at per-operator granularity. The <code class=\"docutils literal notranslate\"><span class=\"pre\">backends.conf</span></code> configuration file controls which operators use which backend, with environment variable overrides for individual operators.</p>", "a[href=\"#complete-device-management-api\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Complete device management API<a class=\"headerlink\" href=\"#complete-device-management-api\" title=\"Link to this heading\">#</a></h2><p>Provides a full PyTorch-compatible device interface:</p>", "a[href=\"#multi-platform-support\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Multi-platform support<a class=\"headerlink\" href=\"#multi-platform-support\" title=\"Link to this heading\">#</a></h2><p>Supports three hardware platforms:</p>", "a[href=\"#features\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Features<a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h1><p>PyTorch-Plugin-FL provides the following capabilities:</p>"}
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

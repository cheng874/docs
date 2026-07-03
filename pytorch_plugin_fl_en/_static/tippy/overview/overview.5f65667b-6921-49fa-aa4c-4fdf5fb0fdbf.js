selector_to_html = {"a[href=\"features.html#automatic-device-registration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Automatic device registration<a class=\"headerlink\" href=\"#automatic-device-registration\" title=\"Link to this heading\">#</a></h2><p>Automatically registers FlagGems Triton operators as dispatch implementations for the <code class=\"docutils literal notranslate\"><span class=\"pre\">flagos</span></code> device. Once imported, all tensor operations on <code class=\"docutils literal notranslate\"><span class=\"pre\">device=\"flagos\"</span></code> automatically use FlagGems Triton kernels without code changes.</p>", "a[href=\"#pytorch-plugin-fl-overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">PyTorch-Plugin-FL Overview<a class=\"headerlink\" href=\"#pytorch-plugin-fl-overview\" title=\"Link to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">torch_fl</span></code> is a custom PyTorch device plugin based on the PrivateUse1 extension mechanism, registering <a class=\"reference external\" href=\"https://github.com/flagos-ai/FlagGems\">FlagGems</a> high-performance Triton operators as the <code class=\"docutils literal notranslate\"><span class=\"pre\">flagos</span></code> device backend for unified multi-chip support.</p>", "a[href=\"features.html#complete-device-management-api\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Complete device management API<a class=\"headerlink\" href=\"#complete-device-management-api\" title=\"Link to this heading\">#</a></h2><p>Provides a full PyTorch-compatible device interface:</p>", "a[href=\"features.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Features<a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h1><p>PyTorch-Plugin-FL provides the following capabilities:</p>", "a[href=\"features.html#multi-platform-support\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Multi-platform support<a class=\"headerlink\" href=\"#multi-platform-support\" title=\"Link to this heading\">#</a></h2><p>Supports three hardware platforms:</p>", "a[href=\"architecture.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Architecture overview<a class=\"headerlink\" href=\"#architecture-overview\" title=\"Link to this heading\">#</a></h1><p>The following diagram illustrates the architecture of the PyTorch-Plugin-FL.</p><p><img alt=\"alt text\" src=\"../_images/pytorch-plugin-fl.png\"/></p>", "a[href=\"features.html#configurable-backend-routing\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Configurable backend routing<a class=\"headerlink\" href=\"#configurable-backend-routing\" title=\"Link to this heading\">#</a></h2><p>Select FlagGems or native vendor backend (CUDA/MACA/Ascend) at per-operator granularity. The <code class=\"docutils literal notranslate\"><span class=\"pre\">backends.conf</span></code> configuration file controls which operators use which backend, with environment variable overrides for individual operators.</p>", "a[href=\"project-structure.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Project Structure<a class=\"headerlink\" href=\"#project-structure\" title=\"Link to this heading\">#</a></h1>"}
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

selector_to_html = {"a[href=\"#runtime-environment-variables\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Runtime environment variables<a class=\"headerlink\" href=\"#runtime-environment-variables\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#dispatch-through-configuration-file\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Dispatch through configuration file<a class=\"headerlink\" href=\"#dispatch-through-configuration-file\" title=\"Link to this heading\">#</a></h2><p>Default path is <code class=\"docutils literal notranslate\"><span class=\"pre\">torch_fl/backends.conf</span></code>, can be overridden via the <code class=\"docutils literal notranslate\"><span class=\"pre\">FLAGOS_BACKEND_CONFIG</span></code> environment variable.</p>", "a[href=\"#operator-dispatch-user-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Operator dispatch user guide<a class=\"headerlink\" href=\"#operator-dispatch-user-guide\" title=\"Link to this heading\">#</a></h1><p>You can configure whether to use FlagGems or native vendor backend at per-operator granularity. Dispatching operators through environment variables takes higher priority than dispatching through configuration file.</p>", "a[href=\"#dispatch-through-environment-variables\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Dispatch through environment variables<a class=\"headerlink\" href=\"#dispatch-through-environment-variables\" title=\"Link to this heading\">#</a></h2><p>Individual operators can be overridden via environment variables (higher priority than config file):</p>", "a[href=\"#c-stub-only-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">C++ stub-only mode<a class=\"headerlink\" href=\"#c-stub-only-mode\" title=\"Link to this heading\">#</a></h2><p>You can disable the FlagGems Python-layer registration entirely, leaving only the C++ unified wrapper active. This is useful for verifying that all required operators are covered by C++ stubs.</p>", "a[href=\"#debug-dispatch\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Debug Dispatch<a class=\"headerlink\" href=\"#debug-dispatch\" title=\"Link to this heading\">#</a></h2>"}
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

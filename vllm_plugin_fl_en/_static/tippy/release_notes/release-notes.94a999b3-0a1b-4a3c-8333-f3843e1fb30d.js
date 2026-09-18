selector_to_html = {"a[href=\"#flagos-2-2-rc0-cross-vendor-verification\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">FlagOS 2.2-RC0 cross-vendor verification<a class=\"headerlink\" href=\"#flagos-2-2-rc0-cross-vendor-verification\" title=\"Link to this heading\">#</a></h3><p>The v0.3.0 release candidate was verified across the following vendors during the FlagOS 2.2-RC0 cycle (runs used <code class=\"docutils literal notranslate\"><span class=\"pre\">0.3.0-rc0</span></code>; <code class=\"docutils literal notranslate\"><span class=\"pre\">0.3.0-rc2</span></code> carries the same vendor adaptations plus the fixes listed above). Every entry lists the components actually installed and the checks that passed; entries that did not complete are marked and reference the tracking issue.</p>", "a[href=\"#v0-1-0\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">v0.1.0<a class=\"headerlink\" href=\"#v0-1-0\" title=\"Link to this heading\">#</a></h2><p>vllm-plugin-FL v0.1.0 requires <a class=\"reference external\" href=\"https://github.com/vllm-project/vllm/tree/v0.13.0\">vllm v0.13.0</a>. Supported platforms: NVIDIA, Ascend, T-Head, MetaX, Iluvatar.</p>", "a[href=\"#release-notes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Release Notes<a class=\"headerlink\" href=\"#release-notes\" title=\"Link to this heading\">#</a></h1><p>This section includes the vllm-plugin-FL release information.</p>", "a[href=\"#v0-2-0\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">v0.2.0<a class=\"headerlink\" href=\"#v0-2-0\" title=\"Link to this heading\">#</a></h2><p>vllm-plugin-FL v0.2.0 requires <a class=\"reference external\" href=\"https://github.com/vllm-project/vllm/tree/v0.20.2\">vllm v0.20.2</a>. Supported platforms: NVIDIA, Hygon DCU.</p>", "a[href=\"#v0-3-0-rc2-release-candidate\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">v0.3.0-rc2 (release candidate)<a class=\"headerlink\" href=\"#v0-3-0-rc2-release-candidate\" title=\"Link to this heading\">#</a></h2><p>vllm-plugin-FL v0.3.0-rc2 requires <a class=\"reference external\" href=\"https://github.com/vllm-project/vllm/tree/v0.24.0\">vllm v0.24.0</a>.</p><p>New since rc0 (from compare <code class=\"docutils literal notranslate\"><span class=\"pre\">v0.3.0-rc0...v0.3.0-rc2.post1</span></code>):</p>"}
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

selector_to_html = {"a[href=\"#status-for-flagos-2-2\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Status for FlagOS 2.2<a class=\"headerlink\" href=\"#status-for-flagos-2-2\" title=\"Link to this heading\">#</a></h3><p>FlagPrism is under construction. FEP-0068 is in the Implementable stage; the repository now exists with active Debugger and Profiler development, but no release tag has been cut and full multi-backend support is still being completed. Refer to the repository for the latest backend validation status.</p>", "a[href=\"#unreleased-flagos-2-2-in-development\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Unreleased (FlagOS 2.2 in development)<a class=\"headerlink\" href=\"#unreleased-flagos-2-2-in-development\" title=\"Link to this heading\">#</a></h2><p>FlagPrism is the new home for FlagTree\u2019s optional debugging and profiling tool suite, tracked under FEP-0068 (FlagTree DevTools). The repository was created on 2026-08-04 and is under active development; there is no tagged release yet, and it is consumed by FlagTree as the <code class=\"docutils literal notranslate\"><span class=\"pre\">third_party/FlagPrism</span></code> submodule.</p>", "a[href=\"#release-notes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Release Notes<a class=\"headerlink\" href=\"#release-notes\" title=\"Link to this heading\">#</a></h1><h2>Unreleased (FlagOS 2.2 in development)<a class=\"headerlink\" href=\"#unreleased-flagos-2-2-in-development\" title=\"Link to this heading\">#</a></h2><p>FlagPrism is the new home for FlagTree\u2019s optional debugging and profiling tool suite, tracked under FEP-0068 (FlagTree DevTools). The repository was created on 2026-08-04 and is under active development; there is no tagged release yet, and it is consumed by FlagTree as the <code class=\"docutils literal notranslate\"><span class=\"pre\">third_party/FlagPrism</span></code> submodule.</p>"}
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

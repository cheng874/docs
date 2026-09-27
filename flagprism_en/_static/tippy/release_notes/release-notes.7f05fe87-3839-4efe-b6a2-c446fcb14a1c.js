selector_to_html = {"a[href=\"#release-notes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Release Notes<a class=\"headerlink\" href=\"#release-notes\" title=\"Link to this heading\">#</a></h1><h2>Unreleased (FlagOS 2.2 in development)<a class=\"headerlink\" href=\"#unreleased-flagos-2-2-in-development\" title=\"Link to this heading\">#</a></h2><p>FlagPrism is introduced as FlagTree\u2019s optional debugging and profiling tool suite for Triton programs. It is under active development with no tagged release yet, and ships as part of the FlagTree wheel through the <code class=\"docutils literal notranslate\"><span class=\"pre\">third_party/FlagPrism</span></code> submodule; standalone debugger/profiler wheels are no longer published.</p>", "a[href=\"#unreleased-flagos-2-2-in-development\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Unreleased (FlagOS 2.2 in development)<a class=\"headerlink\" href=\"#unreleased-flagos-2-2-in-development\" title=\"Link to this heading\">#</a></h2><p>FlagPrism is introduced as FlagTree\u2019s optional debugging and profiling tool suite for Triton programs. It is under active development with no tagged release yet, and ships as part of the FlagTree wheel through the <code class=\"docutils literal notranslate\"><span class=\"pre\">third_party/FlagPrism</span></code> submodule; standalone debugger/profiler wheels are no longer published.</p>"}
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

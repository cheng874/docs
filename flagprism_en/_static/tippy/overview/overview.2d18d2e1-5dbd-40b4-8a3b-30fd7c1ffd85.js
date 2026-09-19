selector_to_html = {"a[href=\"#overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Overview<a class=\"headerlink\" href=\"#overview\" title=\"Link to this heading\">#</a></h1><p>FlagPrism centrally maintains FlagTree\u2019s optional debugging and profiling components. It is under active development.</p>", "a[href=\"#components\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Components<a class=\"headerlink\" href=\"#components\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#supported-backends\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Supported backends<a class=\"headerlink\" href=\"#supported-backends\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#relationship-to-flagtree\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Relationship to FlagTree<a class=\"headerlink\" href=\"#relationship-to-flagtree\" title=\"Link to this heading\">#</a></h2><p>FlagTree consumes FlagPrism as the <code class=\"docutils literal notranslate\"><span class=\"pre\">third_party/FlagPrism</span></code> submodule. The <code class=\"docutils literal notranslate\"><span class=\"pre\">flagtree-debugger</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">flagtree-profiler</span></code> wheels are no longer published separately. Running <code class=\"docutils literal notranslate\"><span class=\"pre\">pip</span> <span class=\"pre\">wheel</span> <span class=\"pre\">.</span></code> from the FlagTree repository builds the core, Debugger, and Profiler in one CMake graph and packages them into a single FlagTree wheel:</p>", "a[href=\"#status\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Status<a class=\"headerlink\" href=\"#status\" title=\"Link to this heading\">#</a></h2><p>FlagPrism is under construction and active development. There is no tagged release yet; it is consumed directly from the FlagTree submodule.</p>", "a[href=\"#build-modes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Build modes<a class=\"headerlink\" href=\"#build-modes\" title=\"Link to this heading\">#</a></h2><p>The Python wheel supports exactly two build modes:</p>"}
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

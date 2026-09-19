selector_to_html = {"a[href=\"#basic-usage\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Basic usage<a class=\"headerlink\" href=\"#basic-usage\" title=\"Link to this heading\">#</a></h2><p>Profile a function:</p>", "a[href=\"#command-line\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Command line<a class=\"headerlink\" href=\"#command-line\" title=\"Link to this heading\">#</a></h2><p>In command-line mode, <code class=\"docutils literal notranslate\"><span class=\"pre\">profiler.start</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">profiler.finalize</span></code> are called automatically.</p>", "a[href=\"#profiler\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Profiler<a class=\"headerlink\" href=\"#profiler\" title=\"Link to this heading\">#</a></h1><p>FlagTree Profiler is a lightweight profiler for Triton. It provides program context, metadata, and hardware performance metrics for the GPU kernels invoked from Python code.</p>", "a[href=\"#backends-and-modes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Backends and modes<a class=\"headerlink\" href=\"#backends-and-modes\" title=\"Link to this heading\">#</a></h2><p>FlagTree Profiler supports five backends:</p>", "a[href=\"#environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Environment<a class=\"headerlink\" href=\"#environment\" title=\"Link to this heading\">#</a></h2><p>Runtime environment variables use the <code class=\"docutils literal notranslate\"><span class=\"pre\">FLAGTREE_PROFILER_*</span></code> prefix. The public Python entry point is <code class=\"docutils literal notranslate\"><span class=\"pre\">flagtree.profiler</span></code>, with the native module <code class=\"docutils literal notranslate\"><span class=\"pre\">flagtree.profiler._native</span></code>; CLI tools are <code class=\"docutils literal notranslate\"><span class=\"pre\">flagtree-profiler</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">flagtree-profiler-viewer</span></code>.</p>", "a[href=\"#scope-and-metrics\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Scope and metrics<a class=\"headerlink\" href=\"#scope-and-metrics\" title=\"Link to this heading\">#</a></h2><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">python</span></code> context reports file, function, and line where each GPU kernel is invoked. The <code class=\"docutils literal notranslate\"><span class=\"pre\">shadow</span></code> context reports user-annotated regions:</p>", "a[href=\"#visualizing-results\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Visualizing results<a class=\"headerlink\" href=\"#visualizing-results\" title=\"Link to this heading\">#</a></h2><p>By default profiles are written in JSON and can be read by <a class=\"reference external\" href=\"https://github.com/hatchet/hatchet\">Hatchet</a>:</p>"}
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

selector_to_html = {"a[href=\"#run-tests\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Run tests<a class=\"headerlink\" href=\"#run-tests\" title=\"Link to this heading\">#</a></h1><p>Tests in <code class=\"docutils literal notranslate\"><span class=\"pre\">tests/integration/ops/</span></code> are marked with <code class=\"docutils literal notranslate\"><span class=\"pre\">@pytest.mark</span></code> to indicate platform scope.</p>", "a[href=\"#cuda-platform\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">CUDA platform<a class=\"headerlink\" href=\"#cuda-platform\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#ascend-platform\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Ascend platform<a class=\"headerlink\" href=\"#ascend-platform\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#pytest-marks\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Pytest marks<a class=\"headerlink\" href=\"#pytest-marks\" title=\"Link to this heading\">#</a></h2><p>Use <code class=\"docutils literal notranslate\"><span class=\"pre\">-m</span> <span class=\"pre\">&lt;mark&gt;</span></code> to run specific test categories. Example: <code class=\"docutils literal notranslate\"><span class=\"pre\">pytest</span> <span class=\"pre\">tests/integration/ops/</span> <span class=\"pre\">-m</span> <span class=\"pre\">cuda</span></code> runs only CUDA tests.</p>"}
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

selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6607\u817e\u5e73\u53f0<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u6d4b\u8bd5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">tests/integration/ops/</span></code> \u4e2d\u7684\u6d4b\u8bd5\u4f7f\u7528 <code class=\"docutils literal notranslate\"><span class=\"pre\">@pytest.mark</span></code> \u6807\u8bb0\u6765\u6307\u793a\u5e73\u53f0\u8303\u56f4\u3002</p>", "a[href=\"#cuda\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">CUDA \u5e73\u53f0<a class=\"headerlink\" href=\"#cuda\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#pytest\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Pytest \u6807\u8bb0<a class=\"headerlink\" href=\"#pytest\" title=\"Link to this heading\">#</a></h2><p>\u4f7f\u7528 <code class=\"docutils literal notranslate\"><span class=\"pre\">-m</span> <span class=\"pre\">&lt;\u6807\u8bb0&gt;</span></code> \u8fd0\u884c\u7279\u5b9a\u7684\u6d4b\u8bd5\u7c7b\u522b\u3002\u793a\u4f8b\uff1a<code class=\"docutils literal notranslate\"><span class=\"pre\">pytest</span> <span class=\"pre\">tests/integration/ops/</span> <span class=\"pre\">-m</span> <span class=\"pre\">cuda</span></code> \u4ec5\u8fd0\u884c CUDA \u6d4b\u8bd5\u3002</p>"}
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

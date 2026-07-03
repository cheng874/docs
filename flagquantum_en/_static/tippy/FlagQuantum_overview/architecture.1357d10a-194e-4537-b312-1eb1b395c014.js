selector_to_html = {"a[href=\"#encoding\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Encoding<a class=\"headerlink\" href=\"#encoding\" title=\"Link to this heading\">#</a></h3><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">encoding</span></code> module provides methods for embedding classical data into quantum states:</p>", "a[href=\"#drawer\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Drawer<a class=\"headerlink\" href=\"#drawer\" title=\"Link to this heading\">#</a></h3><p>The drawer module enables circuit visualization with two modes:</p>", "a[href=\"#operations\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Operations<a class=\"headerlink\" href=\"#operations\" title=\"Link to this heading\">#</a></h3><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">ops</span></code> module contains all quantum gate implementations:</p>", "a[href=\"#devices\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Devices<a class=\"headerlink\" href=\"#devices\" title=\"Link to this heading\">#</a></h3><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">devices</span></code> module provides quantum device implementations, including the <code class=\"docutils literal notranslate\"><span class=\"pre\">DistributedQuantumDevice</span></code> class that manages quantum states across multiple GPUs using PyTorch\u2019s distributed tensor (<code class=\"docutils literal notranslate\"><span class=\"pre\">DTensor</span></code>).</p>", "a[href=\"#architecture\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Architecture<a class=\"headerlink\" href=\"#architecture\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum is organized into the following modules:</p>", "a[href=\"#measurement\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Measurement<a class=\"headerlink\" href=\"#measurement\" title=\"Link to this heading\">#</a></h3><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">measure</span></code> module provides measurement utilities including:</p>", "a[href=\"#utilities\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Utilities<a class=\"headerlink\" href=\"#utilities\" title=\"Link to this heading\">#</a></h3><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">utils</span></code> module contains helper functions for:</p>", "a[href=\"#core-components\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Core Components<a class=\"headerlink\" href=\"#core-components\" title=\"Link to this heading\">#</a></h2><h3>Devices<a class=\"headerlink\" href=\"#devices\" title=\"Link to this heading\">#</a></h3><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">devices</span></code> module provides quantum device implementations, including the <code class=\"docutils literal notranslate\"><span class=\"pre\">DistributedQuantumDevice</span></code> class that manages quantum states across multiple GPUs using PyTorch\u2019s distributed tensor (<code class=\"docutils literal notranslate\"><span class=\"pre\">DTensor</span></code>).</p>"}
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

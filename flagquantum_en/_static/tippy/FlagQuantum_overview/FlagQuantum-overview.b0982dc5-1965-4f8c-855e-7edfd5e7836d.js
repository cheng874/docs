selector_to_html = {"a[href=\"#why-flagquantum\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Why FlagQuantum?<a class=\"headerlink\" href=\"#why-flagquantum\" title=\"Link to this heading\">#</a></h2><p>As quantum circuits grow in qubit count and depth, classical simulation becomes prohibitively expensive. FlagQuantum addresses this challenge through distributed GPU acceleration while maintaining a flexible, extensible architecture. It bridges the gap between simulation and real hardware, allowing seamless transitions from development to deployment.</p>", "a[href=\"#flagquantum-overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagQuantum Overview<a class=\"headerlink\" href=\"#flagquantum-overview\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum is a high-performance distributed quantum statevector simulator built on PyTorch, enabling quantum circuit simulation across multiple GPUs with automatic sharding and resharding while also seamlessly supporting real quantum hardware execution. It is part of the FlagOS ecosystem \u2014 a unified, open-source AI system software stack that fosters an open technology ecosystem by seamlessly integrating various models, systems, and chips.</p>"}
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

selector_to_html = {"a[href=\"#why-flagquantum\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Why FlagQuantum?<a class=\"headerlink\" href=\"#why-flagquantum\" title=\"Link to this heading\">#</a></h2><p>A quantum program has three separable concerns: the circuit, the measurement request, and the execution target. FlagQuantum keeps them explicit.</p>", "a[href=\"#where-to-start\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Where to start<a class=\"headerlink\" href=\"#where-to-start\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#how-it-fits-into-flagos\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How it fits into FlagOS<a class=\"headerlink\" href=\"#how-it-fits-into-flagos\" title=\"Link to this heading\">#</a></h2><p>FlagQuantum depends on PyTorch, not on a vendor runtime. Domestic accelators are reached through the FlagOS unified multi-chip layer, which owns physical-device detection, vendor runtimes, and the logical <code class=\"docutils literal notranslate\"><span class=\"pre\">flagos:0</span></code> device; FlagQuantum itself contains no vendor dispatch and records the routing evidence it receives. See <a class=\"reference internal\" href=\"architecture.html\"><span class=\"std std-doc\">Architecture</span></a> for the layer boundaries and <a class=\"reference internal\" href=\"#../user_guide/remote-execution.md\"><span class=\"xref myst\">Remote execution</span></a> for provider paths.</p>", "a[href=\"architecture.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Architecture<a class=\"headerlink\" href=\"#architecture\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum gives a quantum AI program one public model across local development, accelerated kernels, distributed simulation, and deployment:</p>", "a[href=\"../getting_started/quick-start.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Quick start<a class=\"headerlink\" href=\"#quick-start\" title=\"Link to this heading\">#</a></h1><p>This page trains a two-qubit model, then shows how to switch the simulation\nrepresentation without editing the model.</p>", "a[href=\"#entry-points\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Entry points<a class=\"headerlink\" href=\"#entry-points\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../getting_started/install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install FlagQuantum<a class=\"headerlink\" href=\"#install-flagquantum\" title=\"Link to this heading\">#</a></h1><p>Read <a class=\"reference internal\" href=\"../getting_started/requirements.html\"><span class=\"std std-doc\">Requirements</span></a> before proceeding.</p>", "a[href=\"#capability-maturity\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Capability maturity<a class=\"headerlink\" href=\"#capability-maturity\" title=\"Link to this heading\">#</a></h2><p>Support is specific to each backend and workload. Every capability is graded, and the grade applies only to the scope that was actually verified:</p>", "a[href=\"#overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Overview<a class=\"headerlink\" href=\"#overview\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum is a distributed, differentiable quantum computing framework built on PyTorch. It turns quantum circuits into trainable models: the same program is trained with ordinary PyTorch optimizers, simulated with different representations, scaled across ranks when a workload needs it, and evaluated on remote compute or quantum hardware. It is part of the FlagOS ecosystem \u2014 a unified, open-source AI system software stack that integrates diverse models, systems, and chips.</p>"}
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

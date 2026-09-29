selector_to_html = {"a[href=\"#long-term-direction\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Long-term direction<a class=\"headerlink\" href=\"#long-term-direction\" title=\"Link to this heading\">#</a></h2><p>The roadmap moves toward one durable workflow: build once, train with PyTorch,\nchoose statevector, MPS, or tensor-network execution, scale across chips when\nthe workload requires it, and deploy the trained program to quantum hardware.\nNear-term work covers local development, the FlagOS multi-chip backend, sharded\ntraining, and the training-to-hardware loop; fault-tolerant quantum computing\nresearch is a longer-term goal.</p>", "a[href=\"../reference/capabilities.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Capabilities<a class=\"headerlink\" href=\"#capabilities\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum separates what a pathway <em>is</em> from how strongly it is supported.\nMaturity applies only to the scope stated for each capability, and a local,\nreplicated, sliced, or planned execution path is never distributed scalability\nevidence.</p>", "a[href=\"#why-flagquantum\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Why FlagQuantum?<a class=\"headerlink\" href=\"#why-flagquantum\" title=\"Link to this heading\">#</a></h2><p>As quantum circuits grow in qubit count and depth, exact classical simulation\nbecomes expensive, and the useful question shifts from \u201chow large a state can I\nhold\u201d to \u201cwhich representation fits this circuit, and what evidence do I have\nfor this execution path\u201d. FlagQuantum addresses both:</p>", "a[href=\"#one-programming-model\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">One programming model<a class=\"headerlink\" href=\"#one-programming-model\" title=\"Link to this heading\">#</a></h2><p>The architectural invariant is simple: backend selection may change execution,\nbut it must not change the meaning of the program or the result contract.</p>", "a[href=\"#flagquantum-overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagQuantum Overview<a class=\"headerlink\" href=\"#flagquantum-overview\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum is sharded, differentiable quantum simulation and training in\nPyTorch, reaching domestic accelerators through FlagOS. It is a PyTorch-first\nframework for differentiable quantum computing and quantum AI: circuits become\ntrainable models, and the same program can be executed locally, sharded across\nranks, or evaluated on quantum hardware.</p><p>FlagQuantum is part of the FlagOS ecosystem, an open-source AI system software\nstack that integrates models, systems, and chips behind one software layer.</p>", "a[href=\"#where-a-program-can-run\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Where a program can run<a class=\"headerlink\" href=\"#where-a-program-can-run\" title=\"Link to this heading\">#</a></h2><p>Support is specific to each backend and workload. The CUDA reference and the\ndistributed workloads are development evidence, not production or general\nscalability claims, and FlagQuantum does not certify any domestic accelerator\nby itself. See <a class=\"reference internal\" href=\"../reference/capabilities.html\"><span class=\"std std-doc\">Capabilities</span></a> for the current\nboundary of each path.</p>", "a[href=\"#acknowledgments\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Acknowledgments<a class=\"headerlink\" href=\"#acknowledgments\" title=\"Link to this heading\">#</a></h2><p>FlagQuantum references the following projects and organizations:</p>"}
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

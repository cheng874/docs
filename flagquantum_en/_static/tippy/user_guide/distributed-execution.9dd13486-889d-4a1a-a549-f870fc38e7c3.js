selector_to_html = {"a[href=\"#evidence-and-claim-boundary\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Evidence and claim boundary<a class=\"headerlink\" href=\"#evidence-and-claim-boundary\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#sharded-statevector\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sharded statevector<a class=\"headerlink\" href=\"#sharded-statevector\" title=\"Link to this heading\">#</a></h2><p>Under an initialized multi-rank process group, the same circuit, module, and\nresult surface use the native sharded statevector runtime:</p>", "a[href=\"#rank-owned-mps-training\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Rank-owned MPS training<a class=\"headerlink\" href=\"#rank-owned-mps-training\" title=\"Link to this heading\">#</a></h2><p>Long, low-entanglement circuits are the MPS case: one state is sharded across\nranks with owner-local boundaries, backward execution, optimizer state, and\nmatched checkpoint/restart equivalence.</p>", "a[href=\"#distributed-execution\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Distributed Execution<a class=\"headerlink\" href=\"#distributed-execution\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum distributes one logical workload, not copies of it. Distribution\ntopology comes from the execution environment, and every result reports its\n<code class=\"docutils literal notranslate\"><span class=\"pre\">distribution_semantics</span></code> so replicated, rank-local, sliced, and sharded\nexecution stay distinguishable.</p>", "a[href=\"#distributed-training-entry-points\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Distributed training entry points<a class=\"headerlink\" href=\"#distributed-training-entry-points\" title=\"Link to this heading\">#</a></h2><p>Owner-sharded statevector and MPS training have their own entry points and are\nnot implied by <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.train</span></code>:</p>"}
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

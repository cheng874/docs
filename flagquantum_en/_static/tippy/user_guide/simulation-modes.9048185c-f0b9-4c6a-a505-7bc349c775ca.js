selector_to_html = {"a[href=\"#choosing-a-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Choosing a mode<a class=\"headerlink\" href=\"#choosing-a-mode\" title=\"Link to this heading\">#</a></h2><p>Rules that hold across modes:</p>", "a[href=\"#tensor-networks\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tensor networks<a class=\"headerlink\" href=\"#tensor-networks\" title=\"Link to this heading\">#</a></h2><p>Contraction-based execution for structured circuits, with slicing, contraction\nordering, and differentiable reverse contraction.</p>", "a[href=\"#density-matrix\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Density matrix<a class=\"headerlink\" href=\"#density-matrix\" title=\"Link to this heading\">#</a></h2><p>Exact noise evolution for small systems, used as the correctness oracle for the\ntrajectory paths.</p>", "a[href=\"#simulation-modes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Simulation Modes<a class=\"headerlink\" href=\"#simulation-modes\" title=\"Link to this heading\">#</a></h1><p>One program, several execution representations. <code class=\"docutils literal notranslate\"><span class=\"pre\">ExecutionOptions(mode=...)</span></code>\nselects one explicitly, and <code class=\"docutils literal notranslate\"><span class=\"pre\">Circuit.runtime_plan(...)</span></code> explains what the\nplanner would select and why.</p>", "a[href=\"#matrix-product-states\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Matrix product states<a class=\"headerlink\" href=\"#matrix-product-states\" title=\"Link to this heading\">#</a></h2><p>MPS is the low-entanglement representation: cost follows bond dimension rather\nthan state size, and rank-owned MPS training distributes one state across\nseveral devices.</p>", "a[href=\"#statevector\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Statevector<a class=\"headerlink\" href=\"#statevector\" title=\"Link to this heading\">#</a></h2><p>The default and the reference implementation. Probabilities and expectations are\nexact, small and medium circuits run with zero configuration, and the local\nPyTorch path supports training with vector-valued Z observables.</p>"}
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

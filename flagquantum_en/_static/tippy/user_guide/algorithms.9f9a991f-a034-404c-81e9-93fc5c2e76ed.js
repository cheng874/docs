selector_to_html = {"a[href=\"#variational-training\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Variational training<a class=\"headerlink\" href=\"#variational-training\" title=\"Link to this heading\">#</a></h2><p>The optimization helpers drive local VQE and ADAPT-VQE workflows with staged\nhybrid parameter groups: combinations of Adam/AdamW/SGD/L-BFGS, exact full or\nblock quantum natural gradient, and Rotosolve, with per-step gradient, update,\nand evaluation diagnostics. Heisenberg helpers provide phase-augmented,\nbond-resolved HVA ansatze, dimer-singlet initialization, and exact small-system\nenergy references, so a run can report an explicit exact-energy convergence\ndecision instead of treating a decreasing loss as convergence.</p>", "a[href=\"#units\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Units<a class=\"headerlink\" href=\"#units\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#algorithms\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Algorithms<a class=\"headerlink\" href=\"#algorithms\" title=\"Link to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.algorithms</span></code> composes the runtime into runnable algorithm units.\nThey are demonstration-scale teaching and reference implementations: each unit\nrecords the premise its advantage statement depends on, and none of them\ncertifies performance, convergence, or hardware behaviour.</p>", "a[href=\"#read-the-boundary\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Read the boundary<a class=\"headerlink\" href=\"#read-the-boundary\" title=\"Link to this heading\">#</a></h2><p>Every unit documents what its speed-up or capability statement assumes, and\nseveral of them require oracles, qRAM, or input models that the unit does not\nsupply, so no end-to-end advantage follows at demonstration scale. Where a unit\npublishes a narrower limit, respect it: phase oracles above three evaluation\nwires need caller-supplied ancillas that must enter in |0&gt;, and a dirty ancilla\nproduces a silently wrong answer. Treat the recorded premises as part of the\ninterface, not as fine print.</p>"}
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

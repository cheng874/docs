selector_to_html = {"a[href=\"#built-in-channels\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Built-in channels<a class=\"headerlink\" href=\"#built-in-channels\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">bit_flip</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">phase_flip</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">depolarizing</span></code>, and <code class=\"docutils literal notranslate\"><span class=\"pre\">amplitude_damping</span></code> channels,\nthermal relaxation with gate timing, readout confusion matrices, and\ncalibration-conditioned device profiles with gate and idle noise lowering.</p>", "a[href=\"#support-boundary\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Support boundary<a class=\"headerlink\" href=\"#support-boundary\" title=\"Link to this heading\">#</a></h2><p>Validated Markovian Kraus channels, timestamped device profiles, ASAP gate and\nidle thermal lowering, classical readout confusion, exact density execution, and\nreproducible MPS trajectories with single-rank adaptive stopping are available.\nPulse overlap, crosstalk, leakage, provider calibration adapters, distributed\nadaptive stopping, batched statevector trajectories, production multi-GPU\nscheduling, and noisy gradients are unsupported. Multi-wire MPS channels use an\nexplicit dense correctness fallback.</p>", "a[href=\"#reproducibility\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reproducibility<a class=\"headerlink\" href=\"#reproducibility\" title=\"Link to this heading\">#</a></h2><p>A noise model has an identity that participates in plan verification, so a\nversioned model survives a plan JSON round trip and a changed model is detected\ninstead of being applied silently. Trajectory runs accept an explicit seed and\nreport their sampling statistics.</p>", "a[href=\"#selection-under-a-memory-budget\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Selection under a memory budget<a class=\"headerlink\" href=\"#selection-under-a-memory-budget\" title=\"Link to this heading\">#</a></h2><p>The stable <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.run(...)</span></code> entry point can select noisy MPS trajectories when the\nexact density matrix would exceed an explicit memory budget. Approximation is\nopt-in: without that budget, planning fails rather than silently changing the\nsemantics of the request.</p>", "a[href=\"#noisy-simulation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Noisy Simulation<a class=\"headerlink\" href=\"#noisy-simulation\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum uses one backend-neutral <code class=\"docutils literal notranslate\"><span class=\"pre\">NoiseModel</span></code> for exact density-matrix\nevolution, batched statevector trajectories, and MPS quantum trajectories. The\nexact path is the small-system correctness oracle; trajectory paths report\nsampling statistics, and the MPS path additionally reports truncation data.</p>"}
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

selector_to_html = {"a[href=\"#boundaries\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Boundaries<a class=\"headerlink\" href=\"#boundaries\" title=\"Link to this heading\">#</a></h2><p>Pulse overlap, crosstalk, leakage, provider calibration adapters, distributed adaptive stopping, batched statevector trajectories, and noisy gradients are not supported. Multi-wire MPS channels use an explicit dense correctness fallback instead of a silent approximation, and the exact supported scope of each noisy path is recorded in the capability catalog.</p>", "a[href=\"#continuous-time-evolution\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Continuous-time evolution<a class=\"headerlink\" href=\"#continuous-time-evolution\" title=\"Link to this heading\">#</a></h2><p>Time-independent Markovian systems can be evolved with a dense Hamiltonian and Lindblad collapse operators on a fixed time grid:</p>", "a[href=\"#define-a-noise-model\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Define a noise model<a class=\"headerlink\" href=\"#define-a-noise-model\" title=\"Link to this heading\">#</a></h2><p>Built-in channels include depolarizing, bit flip, phase flip, amplitude damping, thermal relaxation, and readout error. A device profile can additionally supply gate durations and idle-time noise, which the runtime lowers into channels on the gates and idle windows that actually occur.</p>", "a[href=\"#trajectory-simulation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Trajectory simulation<a class=\"headerlink\" href=\"#trajectory-simulation\" title=\"Link to this heading\">#</a></h2><p>Adaptive stopping is available on a single rank; when the exact density matrix would exceed an explicit memory budget, the stable <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.run</span></code> entry point can select noisy MPS trajectories instead, but only if the caller opts in to approximation \u2014 otherwise planning fails rather than changing the semantics of the program silently.</p>", "a[href=\"#noisy-simulation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Noisy Simulation<a class=\"headerlink\" href=\"#noisy-simulation\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum uses one backend-neutral <code class=\"docutils literal notranslate\"><span class=\"pre\">NoiseModel</span></code> for exact density-matrix evolution, batched statevector trajectories, and MPS quantum trajectories. The exact path is the small-system correctness oracle; trajectory paths report sampling statistics, and the MPS path additionally reports truncation data.</p>", "a[href=\"#reproducibility\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reproducibility<a class=\"headerlink\" href=\"#reproducibility\" title=\"Link to this heading\">#</a></h2><p>A <code class=\"docutils literal notranslate\"><span class=\"pre\">NoiseModel</span></code> carries a versioned identity, and that identity is part of the plan. A plan round trip re-verifies the model payload and its digest, so a noisy result can be reproduced from the stored plan instead of from a re-typed noise definition.</p>"}
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

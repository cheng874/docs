selector_to_html = {"a[href=\"#build-and-run\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Build and run<a class=\"headerlink\" href=\"#build-and-run\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">DynamicCircuit</span></code> and its IR encoding are candidate-stable pending API-owner\napproval; execution and backend assessment remain experimental. The stable\ndynamic path will keep returning the canonical <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.ExecutionResult</span></code>, and\nprovider-native state will not be frozen into that contract.</p>", "a[href=\"#execution-strategies\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Execution strategies<a class=\"headerlink\" href=\"#execution-strategies\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">run_dynamic(...,</span> <span class=\"pre\">strategy=\"auto\")</span></code> uses batched statevector trajectories for\neligible workloads of at least 32 shots and falls back to the reference\ntrajectory path when batching would exceed <code class=\"docutils literal notranslate\"><span class=\"pre\">max_batched_bytes</span></code> (256 MiB by\ndefault) or the input is already batched. Callers may request\n<code class=\"docutils literal notranslate\"><span class=\"pre\">strategy=\"trajectory\"</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">\"batched\"</span></code> explicitly, and\n<code class=\"docutils literal notranslate\"><span class=\"pre\">statistics[\"gate_execution_strategy\"]</span></code> records the selected path for benchmark\nattribution.</p>", "a[href=\"#dynamic-circuits\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dynamic circuits<a class=\"headerlink\" href=\"#dynamic-circuits\" title=\"Link to this heading\">#</a></h1><p>Dynamic circuits add mid-circuit measurement and classical control.</p>", "a[href=\"#backend-assessment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Backend assessment<a class=\"headerlink\" href=\"#backend-assessment\" title=\"Link to this heading\">#</a></h2><p>The preflight is read-only and makes no task submission. Local dynamic noise is\nlimited to one-wire bit-flip channels matched to executed gates plus independent\nreadout confusion on explicit measurements and final sampling; other channels,\ncorrelated readout, device-profile timing noise, and provider-noise execution\nfail closed rather than approximating silently. Provider-neutral conformance\npasses locally and on Qiskit Aer, and a real dynamic QPU execution is not\nclaimed.</p>"}
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

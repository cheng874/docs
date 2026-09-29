selector_to_html = {"a[href=\"#measurement\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Measurement<a class=\"headerlink\" href=\"#measurement\" title=\"Link to this heading\">#</a></h1><p>Describe mathematical observables with <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.X</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.Y</span></code>, and <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.Z</span></code>, then request\nnamed outputs from <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.plan</span></code> or <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.run</span></code>. Pauli products use <code class=\"docutils literal notranslate\"><span class=\"pre\">@</span></code>; Hamiltonian\nsums and real coefficients use ordinary arithmetic.</p>", "a[href=\"#measurement-on-hardware\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Measurement on hardware<a class=\"headerlink\" href=\"#measurement-on-hardware\" title=\"Link to this heading\">#</a></h2><p>Use <code class=\"docutils literal notranslate\"><span class=\"pre\">create_pauli_measurement_plan</span></code> to measure a Hamiltonian containing X, Y,\nand Z terms on shot-based hardware. The plan greedily groups\nqubit-wise-commuting terms, appends the required basis rotations, and creates one\nsealed deployment package per group:</p>", "a[href=\"#local-adjoint-hamiltonian-gradients\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Local adjoint Hamiltonian gradients<a class=\"headerlink\" href=\"#local-adjoint-hamiltonian-gradients\" title=\"Link to this heading\">#</a></h2><p>For batch-size-one statevector circuits with real, constant-coefficient Z and ZZ\nterms, <code class=\"docutils literal notranslate\"><span class=\"pre\">Hamiltonian.expectation</span></code> exposes a memory-bounded adjoint path:</p>", "a[href=\"#output-kinds\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Output kinds<a class=\"headerlink\" href=\"#output-kinds\" title=\"Link to this heading\">#</a></h2><p>The public output factories are <code class=\"docutils literal notranslate\"><span class=\"pre\">expectation</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">probabilities</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">samples</span></code>, and\n<code class=\"docutils literal notranslate\"><span class=\"pre\">counts</span></code>:</p>"}
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

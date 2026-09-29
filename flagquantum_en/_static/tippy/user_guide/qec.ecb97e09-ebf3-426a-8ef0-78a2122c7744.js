selector_to_html = {"a[href=\"#boundaries\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Boundaries<a class=\"headerlink\" href=\"#boundaries\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#start-with-a-memory-experiment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Start with a memory experiment<a class=\"headerlink\" href=\"#start-with-a-memory-experiment\" title=\"Link to this heading\">#</a></h2><p>A three-data-qubit repetition-code memory experiment injects an error and follows it through syndrome extraction, decoding, and correction:</p>", "a[href=\"#what-the-reference-implementation-covers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What the reference implementation covers<a class=\"headerlink\" href=\"#what-the-reference-implementation-covers\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#run-and-verify\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Run and verify<a class=\"headerlink\" href=\"#run-and-verify\" title=\"Link to this heading\">#</a></h2><p>Check syndrome histories, correction actions, and final logical outcomes for known injected errors. Decoder changes must also cover readout faults and errors near the final round.</p>", "a[href=\"#quantum-error-correction\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Quantum Error Correction<a class=\"headerlink\" href=\"#quantum-error-correction\" title=\"Link to this heading\">#</a></h1><p>QEC connects syndrome extraction, decoding, correction, and logical-result analysis. The long-term direction is a complete workflow for fault-tolerant quantum computing research, including logical operations and hardware feedback.</p><p>QEC owns codes, decoder semantics, detection events, and Pauli frames. It composes compiler control flow, runtime feedback, simulation kernels, noise models, and remote hardware interfaces.</p>"}
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

selector_to_html = {"a[href=\"#maturity-levels\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Maturity levels<a class=\"headerlink\" href=\"#maturity-levels\" title=\"Link to this heading\">#</a></h2><p>Maturity applies only to the scope stated for a capability. A local, replicated, sliced, or planned execution path is not distributed scalability evidence, and a stable public API never promotes an experimental backend.</p>", "a[href=\"#flagship-evidence\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Flagship evidence<a class=\"headerlink\" href=\"#flagship-evidence\" title=\"Link to this heading\">#</a></h2><p>The strongest published capacity result is a sharded MPS training step on one exact checked-in workload. It is recorded with its per-rank memory, rank count, elapsed time, and topology fingerprint, and it is explicitly not arbitrary statevector capacity, fixed-plan strong scaling, or release evidence. Every public performance claim must point to a checked-in artefact with a digest and to the code version that produced it; documentation, the capability catalog, and the known-limitations list are generated together so a claim cannot drift away from its evidence.</p>", "a[href=\"#algorithm-units\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Algorithm units<a class=\"headerlink\" href=\"#algorithm-units\" title=\"Link to this heading\">#</a></h2><p>The algorithm units are demonstration scale and exist to show that a workflow can be expressed and executed, not to claim an end-to-end advantage. Each unit records the premise its advantage would rest on \u2014 free oracle access, a qRAM, a controlled state-preparation unitary, or a fault-tolerant machine \u2014 and what this repository pays explicitly instead. Read that premise before drawing any conclusion from a unit\u2019s output.</p>", "a[href=\"#capability-catalog\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Capability Catalog<a class=\"headerlink\" href=\"#capability-catalog\" title=\"Link to this heading\">#</a></h1><p>Every FlagQuantum capability is published with a maturity level that states the strongest claim that may be made about it. This page summarises how to read those levels and where each family of capabilities currently stands. The authoritative matrix is machine-validated in the upstream repository, and the level of a specific path there wins over any summary.</p>", "a[href=\"#current-capability-map\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Current capability map<a class=\"headerlink\" href=\"#current-capability-map\" title=\"Link to this heading\">#</a></h2>"}
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

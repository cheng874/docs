selector_to_html = {"a[href=\"#compiler-and-remote-targets\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Compiler and Remote Targets<a class=\"headerlink\" href=\"#compiler-and-remote-targets\" title=\"Link to this heading\">#</a></h1><p>Compilation transforms a program; execution runs it. FlagQuantum keeps the two separate so that a compiled artifact can be inspected, sealed, and submitted without ambiguity about what will run.</p>", "a[href=\"#target-independent-optimization\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Target-independent optimization<a class=\"headerlink\" href=\"#target-independent-optimization\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">optimize</span></code> returns a new <code class=\"docutils literal notranslate\"><span class=\"pre\">CircuitIR</span></code>, leaves the input unchanged, and applies canonical rewrites to a fixed point.</p>", "a[href=\"#detached-submission-and-restore\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Detached submission and restore<a class=\"headerlink\" href=\"#detached-submission-and-restore\" title=\"Link to this heading\">#</a></h2><p>Long-running remote work does not have to block a notebook:</p>", "a[href=\"#compile-for-a-provider\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Compile for a provider<a class=\"headerlink\" href=\"#compile-for-a-provider\" title=\"Link to this heading\">#</a></h2><p>This path compiles, packages, submits, and waits for the remote result without changing the <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.ExecutionResult</span></code> return type. It never selects or substitutes a compiler or provider implicitly.</p><p>Optional arguments keep the journey inspectable:</p>", "a[href=\"#target-aware-compilation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Target-aware compilation<a class=\"headerlink\" href=\"#target-aware-compilation\" title=\"Link to this heading\">#</a></h2><p>Provide an explicit coupling map when the emitted program must respect a topology:</p>", "a[href=\"#packaging-a-trained-program\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Packaging a trained program<a class=\"headerlink\" href=\"#packaging-a-trained-program\" title=\"Link to this heading\">#</a></h2><p>A deployment package binds trained parameters, target compilation, and auditable identity so that a program can be saved, signed, or submitted later:</p>", "a[href=\"#measure-a-hamiltonian-on-hardware\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Measure a Hamiltonian on hardware<a class=\"headerlink\" href=\"#measure-a-hamiltonian-on-hardware\" title=\"Link to this heading\">#</a></h2><p>A Pauli expectation can use the same entry point. The circuit is compiled once, then qubit-wise-commuting terms are measured in separate sealed jobs without changing the selected physical-qubit mapping:</p>"}
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

selector_to_html = {"a[href=\"#execution-and-training-contracts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Execution and training contracts<a class=\"headerlink\" href=\"#execution-and-training-contracts\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">fq.run</span></code> is the canonical execution entry point and returns <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.ExecutionResult</span></code> for supported local and distributed modes. Specialized native functions are advanced interfaces and may expose backend-specific objects.</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">fq.train</span></code> owns the ordinary PyTorch optimization loop. Owner-sharded statevector and MPS training have separate experimental distributed entry points and are not implied by calling <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.train</span></code>. Distributed training counts as complete only when forward execution, gradients, optimizer updates, and checkpoint ownership all preserve the declared distribution semantics.</p>", "a[href=\"#source-map\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Source map<a class=\"headerlink\" href=\"#source-map\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#core-layers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Core layers<a class=\"headerlink\" href=\"#core-layers\" title=\"Link to this heading\">#</a></h2><p>A plan describes intent and estimates; it is never execution or benchmark evidence. Runtime records describe what actually ran.</p>", "a[href=\"#dependency-direction\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Dependency direction<a class=\"headerlink\" href=\"#dependency-direction\" title=\"Link to this heading\">#</a></h2><p>Dependencies point inward: the user facade calls the compiler, runtime, and application workflows; those call <code class=\"docutils literal notranslate\"><span class=\"pre\">core</span></code>. Numerical methods, local compute adapters, and remote adapters sit beside them and are not consulted by <code class=\"docutils literal notranslate\"><span class=\"pre\">core</span></code>.</p>", "a[href=\"#public-versus-internal-interfaces\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Public versus internal interfaces<a class=\"headerlink\" href=\"#public-versus-internal-interfaces\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#architecture\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Architecture<a class=\"headerlink\" href=\"#architecture\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum gives a quantum AI program one public model across local development, accelerated kernels, distributed simulation, and deployment:</p>"}
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

selector_to_html = {"a[href=\"#inspect-a-circuit-and-its-plan-before-running-it\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Inspect a circuit and its plan before running it<a class=\"headerlink\" href=\"#inspect-a-circuit-and-its-plan-before-running-it\" title=\"Link to this heading\">#</a></h2><p>The plan can be serialised and restored. Passing the restored plan to <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.run</span></code>\nexecutes exactly that plan: it is not replanned, and it is not silently replaced\nby another backend.</p>", "a[href=\"#train-your-first-quantum-model\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Train your first quantum model<a class=\"headerlink\" href=\"#train-your-first-quantum-model\" title=\"Link to this heading\">#</a></h2><p>Build a two-qubit circuit and learn its rotation angle by minimising the\nexpectation value of <code class=\"docutils literal notranslate\"><span class=\"pre\">Z</span></code> on wire 0:</p>", "a[href=\"#run-the-same-model-on-another-representation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Run the same model on another representation<a class=\"headerlink\" href=\"#run-the-same-model-on-another-representation\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">examples/quick_start.py</span></code> trains a hybrid classical-quantum model whose exact\nsolution is known, and switches the simulation representation from the command\nline:</p>", "a[href=\"#quick-start\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Quick start<a class=\"headerlink\" href=\"#quick-start\" title=\"Link to this heading\">#</a></h1><p>This page trains a two-qubit model, then shows how to switch the simulation\nrepresentation without editing the model.</p>", "a[href=\"#next-steps\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Next steps<a class=\"headerlink\" href=\"#next-steps\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../user_guide/user-guide.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Guide<a class=\"headerlink\" href=\"#user-guide\" title=\"Link to this heading\">#</a></h1><p>This guide covers how to build and run quantum programs with FlagQuantum: circuit\nconstruction, PyTorch training, simulation representations, measurement, noise,\ncompilation, deployment, hardware evidence, distributed execution, and remote\ntargets.</p>"}
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

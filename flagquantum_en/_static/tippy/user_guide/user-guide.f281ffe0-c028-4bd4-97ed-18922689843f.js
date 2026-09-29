selector_to_html = {"a[href=\"algorithms.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Algorithms<a class=\"headerlink\" href=\"#algorithms\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum ships algorithm units as ready-to-run examples, at demonstration\nscale. Each unit documents its own advantage premise, and the honest reading is\nusually that the quantum routine needs an input model this unit does not supply.</p>", "a[href=\"#user-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Guide<a class=\"headerlink\" href=\"#user-guide\" title=\"Link to this heading\">#</a></h1><p>This guide covers how to build and run quantum programs with FlagQuantum: circuit\nconstruction, PyTorch training, simulation representations, measurement, noise,\ncompilation, deployment, hardware evidence, distributed execution, and remote\ntargets.</p>", "a[href=\"distributed-execution.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Distributed execution<a class=\"headerlink\" href=\"#distributed-execution\" title=\"Link to this heading\">#</a></h1><p>Distributed execution keeps one logical workload and shards it across ranks.</p>", "a[href=\"run-tests.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Run tests<a class=\"headerlink\" href=\"#run-tests\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum tests are organised in tiers. Run the smallest meaningful tier\nfirst, then expand by blast radius.</p>", "a[href=\"dynamic-circuits.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dynamic circuits<a class=\"headerlink\" href=\"#dynamic-circuits\" title=\"Link to this heading\">#</a></h1><p>Dynamic circuits add mid-circuit measurement and classical control.</p>"}
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

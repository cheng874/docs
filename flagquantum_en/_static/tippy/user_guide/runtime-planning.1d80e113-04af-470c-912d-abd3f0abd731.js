selector_to_html = {"a[href=\"#related\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Related<a class=\"headerlink\" href=\"#related\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#inspect-a-plan\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Inspect a plan<a class=\"headerlink\" href=\"#inspect-a-plan\" title=\"Link to this heading\">#</a></h2><p>The same planning entry point is available directly:</p>", "a[href=\"#runtime-planning\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Runtime Planning<a class=\"headerlink\" href=\"#runtime-planning\" title=\"Link to this heading\">#</a></h1><p>A plan explains what the runtime intends to do before anything runs. It selects a representation and an execution policy, and it reports blockers and fallbacks instead of silently changing the program\u2019s semantics.</p>", "a[href=\"#plans-are-executable-and-reproducible\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Plans are executable and reproducible<a class=\"headerlink\" href=\"#plans-are-executable-and-reproducible\" title=\"Link to this heading\">#</a></h2><p>Pass the result of <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.plan</span></code> directly to <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.run</span></code> for an inspectable and reproducible execution. The supplied plan is validated and executed without replanning or recompiling, and plan identity covers the canonical IR, the resolved execution semantics, the compiler pipeline, the required environment, and the selected decision:</p>", "a[href=\"#fail-closed-behavior\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Fail-closed behavior<a class=\"headerlink\" href=\"#fail-closed-behavior\" title=\"Link to this heading\">#</a></h2>", "a[href=\"local-workflows.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Local Workflows<a class=\"headerlink\" href=\"#local-workflows\" title=\"Link to this heading\">#</a></h1><p>Local execution is the zero-configuration path. It needs no provider account, compiler plugin, task scheduler, or network connection.</p>", "a[href=\"compiler-and-remote.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Compiler and Remote Targets<a class=\"headerlink\" href=\"#compiler-and-remote-targets\" title=\"Link to this heading\">#</a></h1><p>Compilation transforms a program; execution runs it. FlagQuantum keeps the two separate so that a compiled artifact can be inspected, sealed, and submitted without ambiguity about what will run.</p>", "a[href=\"#planning-is-not-evidence\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Planning is not evidence<a class=\"headerlink\" href=\"#planning-is-not-evidence\" title=\"Link to this heading\">#</a></h2><p>A planner result describes intent and estimates. It is never runtime evidence, benchmark evidence, or a scalability claim. Performance and capacity statements must come from runtime-generated records that state their distribution semantics.</p>"}
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

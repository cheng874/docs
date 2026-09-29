selector_to_html = {"a[href=\"#install-the-test-dependencies\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Install the test dependencies<a class=\"headerlink\" href=\"#install-the-test-dependencies\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#optional-integration-suites\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Optional integration suites<a class=\"headerlink\" href=\"#optional-integration-suites\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#tiered-commands\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tiered commands<a class=\"headerlink\" href=\"#tiered-commands\" title=\"Link to this heading\">#</a></h2><p>The repository\u2019s tier runner selects a meaningful subset for the change at hand:</p>", "a[href=\"#correctness-certification-and-the-no-progress-policy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Correctness certification and the no-progress policy<a class=\"headerlink\" href=\"#correctness-certification-and-the-no-progress-policy\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">docs/correctness_certification.json</span></code> is generated from the operator and\nlowering registry: every supported operator/backend pair must have a versioned\ngenerated case, and distributed implementation changes must run the required\nlocal GPU lane because CPU simulation cannot replace it.</p><p>Long-running jobs report phase, last operation, completed work, memory,\ncollective state, and rank. A no-progress watchdog classifies stalled input,\ncollective and participant stalls, rank desynchronization, and memory growth,\npreserves diagnostics, terminates the stale job, and verifies process-group\ncleanup. Explicit compile and checkpoint budgets keep bounded legitimate work\nfrom being mistaken for a hang.</p>", "a[href=\"#run-the-suite\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Run the suite<a class=\"headerlink\" href=\"#run-the-suite\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#run-tests\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Run Tests<a class=\"headerlink\" href=\"#run-tests\" title=\"Link to this heading\">#</a></h1><h2>Install the test dependencies<a class=\"headerlink\" href=\"#install-the-test-dependencies\" title=\"Link to this heading\">#</a></h2>"}
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

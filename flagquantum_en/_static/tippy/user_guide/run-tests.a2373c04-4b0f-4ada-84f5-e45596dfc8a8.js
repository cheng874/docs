selector_to_html = {"a[href=\"#quick-start\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Quick start<a class=\"headerlink\" href=\"#quick-start\" title=\"Link to this heading\">#</a></h2><p>An empty marker selection is not verification: a tier that collects nothing has\nproved nothing.</p>", "a[href=\"#release-boundary\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Release boundary<a class=\"headerlink\" href=\"#release-boundary\" title=\"Link to this heading\">#</a></h2><p>Long-running jobs report phase, last operation, completed work, memory,\ncollective state, and rank, and a no-progress watchdog classifies stalls instead\nof leaving a silent hang. Release-grade scalability evidence requires a promoted\nbenchmark payload that passes the release policy and audit commands; correctness\nsuites, coverage numbers, and device smoke runs are not release evidence.</p>", "a[href=\"#what-each-tier-proves\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What each tier proves<a class=\"headerlink\" href=\"#what-each-tier-proves\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#install-test-dependencies\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Install test dependencies<a class=\"headerlink\" href=\"#install-test-dependencies\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#run-tests\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Run tests<a class=\"headerlink\" href=\"#run-tests\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum tests are organised in tiers. Run the smallest meaningful tier\nfirst, then expand by blast radius.</p>"}
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

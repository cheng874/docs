selector_to_html = {"a[href=\"#related-gates\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Related gates<a class=\"headerlink\" href=\"#related-gates\" title=\"Link to this heading\">#</a></h2><p>Support promotion is mechanical: capabilities come from the repository\u2019s\nmachine-validated maturity matrix, and promotion requires every evidence field\nfor the target level to be present and the capability-maturity check to pass.\nMarketing text, benchmark summaries, and release notes are not permitted to\nassign a stronger status than that matrix.</p>", "a[href=\"#how-to-read-maturity\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How to read maturity<a class=\"headerlink\" href=\"#how-to-read-maturity\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#capabilities\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Capabilities<a class=\"headerlink\" href=\"#capabilities\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum separates what a pathway <em>is</em> from how strongly it is supported.\nMaturity applies only to the scope stated for each capability, and a local,\nreplicated, sliced, or planned execution path is never distributed scalability\nevidence.</p>", "a[href=\"#current-capability-levels\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Current capability levels<a class=\"headerlink\" href=\"#current-capability-levels\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#validated-public-performance-claims\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Validated public performance claims<a class=\"headerlink\" href=\"#validated-public-performance-claims\" title=\"Link to this heading\">#</a></h2><p>The repository publishes measured results only when they identify a checked-in\nraw JSON artifact and its digest, match the recorded code version, and state\ntheir exact scope and metadata boundary. The currently published claim is one\nexact-workload MPS capacity result: a single batch-one complex64 training step\nfor a 131,072-site, bond-dimension-768 workload on 16 ranks, recorded as\ndevelopment evidence with an explicit note that it is not arbitrary statevector\ncapacity, fixed-plan strong scaling, or release evidence.</p><p>Performance comparisons require matched workloads, precision, measurement\nmethodology, and auditable artifacts. Historical figures retained in the\nrepository\u2019s history record their original experiments and do not certify the\npresent release.</p>"}
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

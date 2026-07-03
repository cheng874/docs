selector_to_html = {"a[href=\"#testing-framework\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Testing Framework<a class=\"headerlink\" href=\"#testing-framework\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#ci-cd-automation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">CI/CD &amp; Automation<a class=\"headerlink\" href=\"#ci-cd-automation\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#structure-organization\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Structure &amp; Organization<a class=\"headerlink\" href=\"#structure-organization\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#documentation-release\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Documentation &amp; Release<a class=\"headerlink\" href=\"#documentation-release\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#flagtensor-acceptance-checklist\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Acceptance Checklist<a class=\"headerlink\" href=\"#flagtensor-acceptance-checklist\" title=\"Link to this heading\">#</a></h1><p>This checklist tracks the current compliance status against the operator library acceptance standards.</p>", "a[href=\"#known-issues\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Known Issues<a class=\"headerlink\" href=\"#known-issues\" title=\"Link to this heading\">#</a></h2><p>All previously documented issues have been resolved:</p>", "a[href=\"#performance-testing\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Performance Testing<a class=\"headerlink\" href=\"#performance-testing\" title=\"Link to this heading\">#</a></h2>"}
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

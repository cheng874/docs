selector_to_html = {"a[href=\"acceptance_checklist.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Acceptance Checklist<a class=\"headerlink\" href=\"#flagtensor-acceptance-checklist\" title=\"Link to this heading\">#</a></h1><p>This checklist tracks the current compliance status against the operator library acceptance standards.</p>", "a[href=\"known_issues.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Known Issues<a class=\"headerlink\" href=\"#flagtensor-known-issues\" title=\"Link to this heading\">#</a></h1><p>This document tracks known issues and limitations in the current FlagTensor implementation.</p>", "a[href=\"accuracy_policy.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Accuracy Policy<a class=\"headerlink\" href=\"#flagtensor-accuracy-policy\" title=\"Link to this heading\">#</a></h1><h2>Scope<a class=\"headerlink\" href=\"#scope\" title=\"Link to this heading\">#</a></h2><p>This document defines the acceptance-facing accuracy policy for FlagTensor correctness validation.</p>", "a[href=\"#reference\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Reference<a class=\"headerlink\" href=\"#reference\" title=\"Link to this heading\">#</a></h1><p>This section contains the FlagTensor acceptance documentation, covering policies, CI/CD workflows, operator coverage, and standard commands.</p>", "a[href=\"standard_commands.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Standard Acceptance Commands<a class=\"headerlink\" href=\"#flagtensor-standard-acceptance-commands\" title=\"Link to this heading\">#</a></h1><p>This document provides the standard commands for running FlagTensor acceptance checks.</p>", "a[href=\"ci_matrix.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor CI Matrix<a class=\"headerlink\" href=\"#flagtensor-ci-matrix\" title=\"Link to this heading\">#</a></h1><p>This document describes the CI/CD workflows and their purposes in the FlagTensor acceptance process.</p>", "a[href=\"operator_coverage.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Operator Coverage Matrix<a class=\"headerlink\" href=\"#flagtensor-operator-coverage-matrix\" title=\"Link to this heading\">#</a></h1><p>Generated from registry: <code class=\"docutils literal notranslate\"><span class=\"pre\">conf/operators.yaml</span></code></p>", "a[href=\"benchmark_policy.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Benchmark Policy<a class=\"headerlink\" href=\"#flagtensor-benchmark-policy\" title=\"Link to this heading\">#</a></h1><h2>Scope<a class=\"headerlink\" href=\"#scope\" title=\"Link to this heading\">#</a></h2><p>This document defines the acceptance-facing benchmark policy for FlagTensor performance validation.</p>"}
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

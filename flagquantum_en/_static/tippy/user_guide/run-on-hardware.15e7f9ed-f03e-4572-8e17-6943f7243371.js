selector_to_html = {"a[href=\"#submit-without-blocking\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Submit without blocking<a class=\"headerlink\" href=\"#submit-without-blocking\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">fq.run()</span></code> waits for a result. When a notebook should stay available while a task is queued, submit it and query later:</p>", "a[href=\"#compile-package-submit\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Compile, package, submit<a class=\"headerlink\" href=\"#compile-package-submit\" title=\"Link to this heading\">#</a></h2><p>This path compiles, packages, submits, and waits for the remote result without changing the <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.ExecutionResult</span></code> return type. It never selects or substitutes a compiler or provider implicitly, and an unsupported remote output fails before compilation or submission.</p><p>One Pauli expectation can use the same entry point. The circuit is compiled once, qubit-wise-commuting terms are measured in separate sealed jobs without changing the selected physical mapping, and the measurement statistics report the estimator standard error, the group count, per-group shots, and total shots:</p>", "a[href=\"#run-on-hardware\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Run on Hardware<a class=\"headerlink\" href=\"#run-on-hardware\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum keeps one execution contract across local, remote compute, and quantum-hardware targets. The circuit and the requested observable stay explicit; the target changes where the program runs, not what the result means.</p>", "a[href=\"#managed-compute-targets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Managed compute targets<a class=\"headerlink\" href=\"#managed-compute-targets\" title=\"Link to this heading\">#</a></h2><p>A running Jiuding workspace can execute a circuit as a remote compute target. Sampling and count reduction execute without returning a full statevector:</p>", "a[href=\"#packaging-for-a-provider\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Packaging for a provider<a class=\"headerlink\" href=\"#packaging-for-a-provider\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.deployment.create_deployment_package</span></code> binds trained parameters, compiles for a target, and seals an auditable package. <code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.services.preflight_deployment</span></code> validates a program against a target and identity-checks the exact package that may later be submitted, without contacting the provider or consuming remote capacity.</p>", "a[href=\"#restore-after-a-restart\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Restore after a restart<a class=\"headerlink\" href=\"#restore-after-a-restart\" title=\"Link to this heading\">#</a></h2><p>The receipt is JSON, contains job identity and decoding context but no credentials, is written once, and never overwrites an existing file. Restoration never resubmits. If a submission loses its network response, reconcile with the provider before retrying: the server may already have accepted the job.</p>"}
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

selector_to_html = {"a[href=\"#deployment-and-hardware\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Deployment and Hardware<a class=\"headerlink\" href=\"#deployment-and-hardware\" title=\"Link to this heading\">#</a></h1><h2>Sealed deployment packages<a class=\"headerlink\" href=\"#sealed-deployment-packages\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.deployment</span></code> binds trained parameters, compiles for a target, and\nseals an auditable package whose identity can be verified before submission:</p>", "a[href=\"#remote-execution\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Remote execution<a class=\"headerlink\" href=\"#remote-execution\" title=\"Link to this heading\">#</a></h2><p>Both return the canonical <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.ExecutionResult</span></code>. Jiuding computes a simulated\nexpectation; Quafu estimates one from hardware measurements. Live provider\naccess is required and is not certified by the local checks.</p><p>Detached jobs keep a notebook responsive while a task is queued or running:</p>", "a[href=\"#preflight-before-submission\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Preflight before submission<a class=\"headerlink\" href=\"#preflight-before-submission\" title=\"Link to this heading\">#</a></h2><p>Preflight converts expected failures into structured blockers and validates the\nexact package that may later be submitted, without contacting a provider.\nAuthentication, approval, tenant state, job persistence, and paid-resource\nsubmission stay with the consuming application.</p>", "a[href=\"#qpu-digital-twins\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">QPU digital twins<a class=\"headerlink\" href=\"#qpu-digital-twins\" title=\"Link to this heading\">#</a></h2><p>An experimental, provider-neutral model predicts a QPU\u2019s measurement\ndistribution from a frozen calibration snapshot:</p>", "a[href=\"#error-correction\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Error correction<a class=\"headerlink\" href=\"#error-correction\" title=\"Link to this heading\">#</a></h2><p>The repetition-code memory experiment connects syndrome extraction, decoding,\nand correction in one local reference circuit:</p>", "a[href=\"#sealed-deployment-packages\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sealed deployment packages<a class=\"headerlink\" href=\"#sealed-deployment-packages\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.deployment</span></code> binds trained parameters, compiles for a target, and\nseals an auditable package whose identity can be verified before submission:</p>"}
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

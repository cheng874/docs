selector_to_html = {"a[href=\"#stable-api-and-interfaces\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Stable API and interfaces<a class=\"headerlink\" href=\"#stable-api-and-interfaces\" title=\"Link to this heading\">#</a></h2>", "a[href=\"capabilities.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Capabilities<a class=\"headerlink\" href=\"#capabilities\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum separates what a pathway <em>is</em> from how strongly it is supported.\nMaturity applies only to the scope stated for each capability, and a local,\nreplicated, sliced, or planned execution path is never distributed scalability\nevidence.</p>", "a[href=\"#reference\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Reference<a class=\"headerlink\" href=\"#reference\" title=\"Link to this heading\">#</a></h1><p>Stable interfaces, capability maturity, runtime contracts, and current support boundaries.</p>", "a[href=\"api.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">API Reference<a class=\"headerlink\" href=\"#api-reference\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum exposes one curated Python interface: <code class=\"docutils literal notranslate\"><span class=\"pre\">import</span> <span class=\"pre\">flagquantum</span> <span class=\"pre\">as</span> <span class=\"pre\">fq</span></code>.\nBuild a circuit, inspect its runtime plan, execute it through a stable result\ncontract, and train parameterized programs with PyTorch.</p><p>Exact stable names are defined by the repository\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">public_api_v1.json</span></code>, verified\nby executable contract tests, and rendered in the stable API inventory below.</p>", "a[href=\"#claim-boundaries\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Claim boundaries<a class=\"headerlink\" href=\"#claim-boundaries\" title=\"Link to this heading\">#</a></h2><p>Local execution, registered lowering support, distributed development probes, and release-grade scalability are separate claims. A registered lowering proves that an operator can be executed on a path, not that the path is production-supported at scale. Distributed and accelerator claims additionally require runtime-generated evidence accepted by the repository\u2019s benchmark audit and release policy.</p><p>Planned capabilities belong in roadmap documents and are not listed as supported until executable manifests and tests exist.</p>", "a[href=\"#contracts-and-policies\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Contracts and policies<a class=\"headerlink\" href=\"#contracts-and-policies\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#upstream-references\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Upstream references<a class=\"headerlink\" href=\"#upstream-references\" title=\"Link to this heading\">#</a></h2><p>The FlagQuantum repository keeps the full reference set: the API reference, the runtime architecture and configuration references, the known-limitations catalog, the testing manual, and the roadmap. Values published here are taken from that source of truth; where a support boundary changes, the upstream reference and this docset are updated together.</p>"}
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

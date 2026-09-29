selector_to_html = {"a[href=\"#install-flagquantum\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install FlagQuantum<a class=\"headerlink\" href=\"#install-flagquantum\" title=\"Link to this heading\">#</a></h1><p>Read <a class=\"reference internal\" href=\"requirements.html\"><span class=\"std std-doc\">Requirements</span></a> before proceeding.</p>", "a[href=\"#verify-the-installation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Verify the installation<a class=\"headerlink\" href=\"#verify-the-installation\" title=\"Link to this heading\">#</a></h2><p>The package is imported with <code class=\"docutils literal notranslate\"><span class=\"pre\">import</span> <span class=\"pre\">flagquantum</span> <span class=\"pre\">as</span> <span class=\"pre\">fq</span></code>, and importing it does\nnot import optional dependencies, discover extensions, or activate a provider.</p>", "a[href=\"#optional-dependency-groups\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Optional dependency groups<a class=\"headerlink\" href=\"#optional-dependency-groups\" title=\"Link to this heading\">#</a></h2><p>Install an optional capability only when you need it:</p>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum runs on Python 3.10 to 3.12 and requires PyTorch 2.5 or newer. The\nreleased package depends on PyTorch only; everything else is an optional extra.</p>", "a[href=\"quick-start.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Quick start<a class=\"headerlink\" href=\"#quick-start\" title=\"Link to this heading\">#</a></h1><p>This page trains a two-qubit model, then shows how to switch the simulation\nrepresentation without editing the model.</p>", "a[href=\"#run-a-local-example\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Run a local example<a class=\"headerlink\" href=\"#run-a-local-example\" title=\"Link to this heading\">#</a></h2><p>The maintained local path needs no credentials, no remote resources, and no\noptional backend:</p>", "a[href=\"#install-the-released-package\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Install the released package<a class=\"headerlink\" href=\"#install-the-released-package\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#next-steps\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Next steps<a class=\"headerlink\" href=\"#next-steps\" title=\"Link to this heading\">#</a></h2><p>Continue with the <a class=\"reference internal\" href=\"quick-start.html\"><span class=\"std std-doc\">quick start</span></a>, or go straight to\n<a class=\"reference internal\" href=\"#../user_guide/simulation-modes.md\"><span class=\"xref myst\">Simulation modes</span></a> to choose a representation\nand <a class=\"reference internal\" href=\"#../user_guide/remote-execution.md\"><span class=\"xref myst\">Remote execution</span></a> for provider targets.</p>", "a[href=\"#install-the-development-version\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Install the development version<a class=\"headerlink\" href=\"#install-the-development-version\" title=\"Link to this heading\">#</a></h2>"}
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

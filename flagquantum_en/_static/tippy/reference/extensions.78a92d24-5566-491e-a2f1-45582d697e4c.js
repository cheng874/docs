selector_to_html = {"a[href=\"#how-an-extension-is-written\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How an extension is written<a class=\"headerlink\" href=\"#how-an-extension-is-written\" title=\"Link to this heading\">#</a></h2><p>A package registers one zero-argument factory in its entry-point group and returns a manifest with a matching identity:</p>", "a[href=\"#discovery-and-activation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Discovery and activation<a class=\"headerlink\" href=\"#discovery-and-activation\" title=\"Link to this heading\">#</a></h2><p>Installed packages are discovered only through an explicit, kind-specific discovery call. Discovery validates the entry-point identity against the manifest and adds the result to the existing immutable registry rather than introducing a second plugin registry. Importing FlagQuantum never discovers, imports, or activates an extension.</p><p>A user-facing integration names a compiler or provider explicitly and never relies on implicit selection:</p>", "a[href=\"#extension-sdk\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Extension SDK<a class=\"headerlink\" href=\"#extension-sdk\" title=\"Link to this heading\">#</a></h1><p>The extension SDK lets a separately installed package contribute an execution backend, a circuit compiler, a compiler pass, a kernel, an operator, a device, a provider, a measurement collector, or a planner, without becoming a runtime dependency of FlagQuantum.</p>", "a[href=\"#where-it-lives\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Where it lives<a class=\"headerlink\" href=\"#where-it-lives\" title=\"Link to this heading\">#</a></h2><p>The approved, pre-freeze SDK contract lives under <code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.ecosystem.extensions</span></code> and adds no root exports. Extensions declare a versioned manifest, negotiate capabilities before activation, and are installed into a task-local immutable registry. The namespace moved to its current location without a compatibility layer, and import paths for the submodule remain equivalent.</p>", "a[href=\"#compatibility-lifecycle\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Compatibility lifecycle<a class=\"headerlink\" href=\"#compatibility-lifecycle\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#conformance\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Conformance<a class=\"headerlink\" href=\"#conformance\" title=\"Link to this heading\">#</a></h2><p>The SDK supplies reusable backend, provider, and circuit-compiler checks that cover manifest and payload serialization, capability honesty, PyTorch gradients, dtype and device preservation, IR ownership, determinism, isolated errors, and cleanup. Passing them is a prerequisite for stabilising an extension, not a substitute for independent qualification of the extension itself.</p>", "a[href=\"#isolation-and-security\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Isolation and security<a class=\"headerlink\" href=\"#isolation-and-security\" title=\"Link to this heading\">#</a></h2>"}
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

selector_to_html = {"a[href=\"#extensions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Extensions<a class=\"headerlink\" href=\"#extensions\" title=\"Link to this heading\">#</a></h1><p>The approved, pre-freeze SDK contract lives under\n<code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.ecosystem.extensions</span></code> and adds no root exports. Extensions declare\na versioned manifest, negotiate capabilities before activation, and are\ninstalled into a task-local immutable registry. Individual extensions remain\nexperimental by default and require independent qualification.</p>", "a[href=\"#extension-kinds\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Extension kinds<a class=\"headerlink\" href=\"#extension-kinds\" title=\"Link to this heading\">#</a></h2><p>Execution backends, circuit compilers, compiler passes, kernels, operators,\ndevices, providers, measurement collectors, and planners. A circuit compiler\naccepts and returns FlagQuantum <code class=\"docutils literal notranslate\"><span class=\"pre\">CircuitIR</span></code>; compiler passes are the smaller\ntransformation hook.</p>", "a[href=\"#discovery-and-lifecycle\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Discovery and lifecycle<a class=\"headerlink\" href=\"#discovery-and-lifecycle\" title=\"Link to this heading\">#</a></h2><p>Installed packages are discovered only through an explicit, kind-specific\n<code class=\"docutils literal notranslate\"><span class=\"pre\">discover_extensions(...)</span></code> call; they register zero-argument factories in the\n<code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.extensions</span></code> entry-point group. Discovery validates the entry-point\nidentity against the manifest and adds the result to the existing immutable\nregistry instead of introducing a second plugin registry. Importing FlagQuantum\ndoes not discover, import, or activate extensions.</p>", "a[href=\"#isolation-and-credentials\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Isolation and credentials<a class=\"headerlink\" href=\"#isolation-and-credentials\" title=\"Link to this heading\">#</a></h2><p>Registration returns a new immutable registry and <code class=\"docutils literal notranslate\"><span class=\"pre\">extension_scope</span></code> uses\ntask-local context, so an extension never mutates root exports, core operator\ntables, or another task\u2019s registry. Lifecycle wrappers translate extension\nexceptions and run cleanup after failed startup and at normal scope exit. Raw\ntokens, passwords, API keys, secrets, and credentials are rejected from\n<code class=\"docutils literal notranslate\"><span class=\"pre\">ExtensionConfig</span></code>; providers obtain credentials through a host-owned resolver\nand must not place them in manifests, errors, measurements, or serialized\npayloads.</p><p>Extensions execute with the Python process\u2019s authority: discovery is not a\nsandbox, and only trusted packages should be installed. Conformance helpers\ncover manifest and payload serialization, capability honesty, PyTorch\ngradients, dtype and device preservation, <code class=\"docutils literal notranslate\"><span class=\"pre\">CircuitIR</span></code> ownership, determinism,\nisolated errors, and cleanup.</p>"}
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

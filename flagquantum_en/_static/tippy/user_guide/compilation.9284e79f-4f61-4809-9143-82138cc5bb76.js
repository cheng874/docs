selector_to_html = {"a[href=\"#compile-for-a-target-topology\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Compile for a target topology<a class=\"headerlink\" href=\"#compile-for-a-target-topology\" title=\"Link to this heading\">#</a></h2><p>The compiler emits only topology-valid two-qubit operations, records its routing\ndecision, and does not select or invoke an execution backend. Use it when a\nconcrete coupling map or target-aware lowering is required.</p>", "a[href=\"#compiler-plugins\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Compiler plugins<a class=\"headerlink\" href=\"#compiler-plugins\" title=\"Link to this heading\">#</a></h2><p>A compiler plugin is an independently installed package that owns its compiler\ndependency and translation code, for example\n<code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum-compiler-qsteed</span></code>:</p>", "a[href=\"#select-a-compiler-for-a-provider-journey\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Select a compiler for a provider journey<a class=\"headerlink\" href=\"#select-a-compiler-for-a-provider-journey\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">fq.compile</span></code> is the direct compiler-selection journey. Logical wire numbers are\npreserved and an ordered physical <code class=\"docutils literal notranslate\"><span class=\"pre\">target_qubits</span></code> mapping travels through\npackaging and submission; omitting <code class=\"docutils literal notranslate\"><span class=\"pre\">compiler</span></code> means provider-side compilation.\nThe selected compiler, provider, and any fallback are always explicit.</p>", "a[href=\"#compilation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Compilation<a class=\"headerlink\" href=\"#compilation\" title=\"Link to this heading\">#</a></h1><p>Compilation transforms a program without executing it. FlagQuantum separates\ntarget-independent optimization from target-aware lowering.</p>", "a[href=\"extensions.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Extensions<a class=\"headerlink\" href=\"#extensions\" title=\"Link to this heading\">#</a></h1><p>The approved, pre-freeze SDK contract lives under\n<code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.ecosystem.extensions</span></code> and adds no root exports. Extensions declare\na versioned manifest, negotiate capabilities before activation, and are\ninstalled into a task-local immutable registry. Individual extensions remain\nexperimental by default and require independent qualification.</p>", "a[href=\"#optimize\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Optimize<a class=\"headerlink\" href=\"#optimize\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">optimize</span></code> returns a new <code class=\"docutils literal notranslate\"><span class=\"pre\">CircuitIR</span></code>, leaves the input unchanged, and applies\ncanonical rewrites to a fixed point, removing redundant gates while preserving\nthe numerical result.</p>"}
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

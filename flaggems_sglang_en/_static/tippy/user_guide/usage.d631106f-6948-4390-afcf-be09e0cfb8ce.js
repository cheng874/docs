selector_to_html = {"a[href=\"#use-operators\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Use operators<a class=\"headerlink\" href=\"#use-operators\" title=\"Link to this heading\">#</a></h1><p>After installing FlagGems-sglang, import the package and call the operators directly. Every operator resolved for the current device is attached to the package namespace, so the call site stays the same regardless of the underlying hardware.</p><p>The example below uses two exported operators, <code class=\"docutils literal notranslate\"><span class=\"pre\">silu_and_mul</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">fused_rmsnorm</span></code>:</p>", "a[href=\"../reference/operator_list.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Operator List<a class=\"headerlink\" href=\"#operator-list\" title=\"Link to this heading\">#</a></h1><p>This page lists the operators exported by FlagGems-sglang, sourced from <code class=\"docutils literal notranslate\"><span class=\"pre\">conf/operators.yaml</span></code> and the <code class=\"docutils literal notranslate\"><span class=\"pre\">__all__</span></code> of <code class=\"docutils literal notranslate\"><span class=\"pre\">src/flaggems_sglang/ops/*.py</span></code>.</p><p>The generic operator set contains 40 operators, and the two sources agree name for name. Each operator is implemented in Triton and resolved for the current device by the three-level registrar described in <a class=\"reference internal\" href=\"../overview/overview.html\"><span class=\"std std-doc\">Overview</span></a>.</p>"}
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

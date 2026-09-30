selector_to_html = {"a[href=\"../reference/operator_list.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Operator List<a class=\"headerlink\" href=\"#operator-list\" title=\"Link to this heading\">#</a></h1><p>This page lists the operators exported by FlagGems-sglang, sourced from <code class=\"docutils literal notranslate\"><span class=\"pre\">conf/operators.yaml</span></code> and the <code class=\"docutils literal notranslate\"><span class=\"pre\">__all__</span></code> of <code class=\"docutils literal notranslate\"><span class=\"pre\">src/flaggems_sglang/ops/*.py</span></code>.</p><p>The generic operator set contains 40 operators, and the two sources agree name for name. Each operator is implemented in Triton and resolved for the current device by the three-level registrar described in <a class=\"reference internal\" href=\"../overview/overview.html\"><span class=\"std std-doc\">Overview</span></a>.</p>", "a[href=\"#multi-level-operator-routing\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Multi-level operator routing<a class=\"headerlink\" href=\"#multi-level-operator-routing\" title=\"Link to this heading\">#</a></h2><p>Every operator is resolved for the current device by a three-level registrar; later levels override earlier ones on a name collision:</p>", "a[href=\"features.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Features<a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h1><p>FlagGems-sglang provides the following key features:</p>", "a[href=\"features.html#supported-backends\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Supported backends<a class=\"headerlink\" href=\"#supported-backends\" title=\"Link to this heading\">#</a></h2><p>Vendors ship their specializations under <code class=\"docutils literal notranslate\"><span class=\"pre\">src/flaggems_sglang/runtime/backend/_&lt;vendor&gt;/</span></code>. Each vendor folder declares the device it serves:</p>", "a[href=\"features.html#relationship-with-flaggems-and-sglang-plugin-fl\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Relationship with FlagGems and sglang-plugin-FL<a class=\"headerlink\" href=\"#relationship-with-flaggems-and-sglang-plugin-fl\" title=\"Link to this heading\">#</a></h2><p>Vendors bringing up a new backend should start from the bring-up guide kept in the upstream repository at <code class=\"docutils literal notranslate\"><span class=\"pre\">src/flaggems_sglang/runtime/backend/README.md</span></code>.</p>", "a[href=\"#flaggems-sglang-overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagGems-sglang Overview<a class=\"headerlink\" href=\"#flaggems-sglang-overview\" title=\"Link to this heading\">#</a></h1><p>FlagGems-sglang is part of <a class=\"reference external\" href=\"https://flagos.io/\">FlagOS</a>. It is a high-performance operator library designed for multiple hardware backends. It provides optimized implementations of common SGLang operators and supports high-performance inference and deployment for a variety of widely used models.</p><p>FlagGems-sglang is a high-performance deep learning operator library implemented using the <a class=\"reference external\" href=\"https://github.com/openai/triton\">Triton programming language</a> launched by OpenAI.</p>"}
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

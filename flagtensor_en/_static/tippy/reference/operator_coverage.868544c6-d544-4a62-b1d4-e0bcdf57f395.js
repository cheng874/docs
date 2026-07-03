selector_to_html = {"a[href=\"#unary-operators-28\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Unary Operators (28)<a class=\"headerlink\" href=\"#unary-operators-28\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#binary-operators-4\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Binary Operators (4)<a class=\"headerlink\" href=\"#binary-operators-4\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#sparse-operators-1\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Sparse Operators (1)<a class=\"headerlink\" href=\"#sparse-operators-1\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#by-category\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">By Category<a class=\"headerlink\" href=\"#by-category\" title=\"Link to this heading\">#</a></h2><h3>Unary Operators (28)<a class=\"headerlink\" href=\"#unary-operators-28\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#summary\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Summary<a class=\"headerlink\" href=\"#summary\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#flagtensor-operator-coverage-matrix\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor Operator Coverage Matrix<a class=\"headerlink\" href=\"#flagtensor-operator-coverage-matrix\" title=\"Link to this heading\">#</a></h1><p>Generated from registry: <code class=\"docutils literal notranslate\"><span class=\"pre\">conf/operators.yaml</span></code></p>", "a[href=\"#contraction-operators-3\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Contraction Operators (3)<a class=\"headerlink\" href=\"#contraction-operators-3\" title=\"Link to this heading\">#</a></h3>"}
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

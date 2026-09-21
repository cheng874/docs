selector_to_html = {"a[href=\"operator-dispatch-mechanism.html#architecture-overview\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Architecture overview<a class=\"headerlink\" href=\"#architecture-overview\" title=\"Link to this heading\">#</a></h2><h3>Dispatch flow diagram<a class=\"headerlink\" href=\"#dispatch-flow-diagram\" title=\"Link to this heading\">#</a></h3>", "a[href=\"operator-dispatch-mechanism.html#directory-structure\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Directory structure<a class=\"headerlink\" href=\"#directory-structure\" title=\"Link to this heading\">#</a></h2>", "a[href=\"operator-dispatch-mechanism.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Operator dispatch mechanism<a class=\"headerlink\" href=\"#operator-dispatch-mechanism\" title=\"Link to this heading\">#</a></h1><p>This directory implements the operator dispatch mechanism for vllm-plugin-FL, providing a flexible operator dispatch system that selects between different backend implementations (FlagGems, PyTorch, vendor-specific) based on availability and policy configuration.</p>", "a[href=\"operator-dispatch-mechanism.html#core-concepts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Core concepts<a class=\"headerlink\" href=\"#core-concepts\" title=\"Link to this heading\">#</a></h2><h3>1. Backend implementation kind (BackendImplKind)<a class=\"headerlink\" href=\"#backend-implementation-kind-backendimplkind\" title=\"Link to this heading\">#</a></h3><p><code class=\"docutils literal notranslate\"><span class=\"pre\">types.py</span></code> includes backend implementation kinds as follows:</p>", "a[href=\"features.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Features<a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h1><p>Leverages FlagGems (unified operator library) and FlagCX (unified communication library) to provide chip-agnostic inference capabilities. The same model can run on different hardware without code modifications.</p>", "a[href=\"#vllm-plugin-fl-overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">vllm-plugin-FL Overview<a class=\"headerlink\" href=\"#vllm-plugin-fl-overview\" title=\"Link to this heading\">#</a></h1><p>vllm-plugin-FL is a plugin for the <a class=\"reference external\" href=\"https://github.com/vllm-project/vllm\">vLLM</a> inference/serving framework, built on top of <a class=\"reference external\" href=\"https://github.com/flagos-ai\">FlagOS</a>, a unified open-source AI system software stack. vllm-plugin-FL extends vLLM\u2019s capabilities and performance across diverse hardware environments. Without changing vLLM\u2019s original interfaces or usage patterns, the same command can run model inference/serving on different chips. vllm-plugin-FL can work with other FlagOS\u2019s components including the unified operator library <a class=\"reference external\" href=\"https://github.com/flagos-ai/FlagGems\">FlagGems</a>\uff0cthe unified communication library <a class=\"reference external\" href=\"https://github.com/flagos-ai/FlagCX\">FlagCX</a> and the unified compiler <a class=\"reference external\" href=\"https://github.com/flagos-ai/FlagTree\">FlagTree</a> .</p>"}
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

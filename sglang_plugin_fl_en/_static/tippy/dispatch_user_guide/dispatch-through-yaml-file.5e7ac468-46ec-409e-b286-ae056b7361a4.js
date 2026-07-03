selector_to_html = {"a[href=\"#config-fields\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Config Fields<a class=\"headerlink\" href=\"#config-fields\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#dispatch-through-yaml-config-file\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dispatch through YAML config file<a class=\"headerlink\" href=\"#dispatch-through-yaml-config-file\" title=\"Link to this heading\">#</a></h1><p>The plugin ships with a sample config file <code class=\"docutils literal notranslate\"><span class=\"pre\">config/sample.yaml</span></code> with all available options. Copy it and customize:</p>", "a[href=\"#skip-rotaryembedding-from-oot-dispatch-fall-through-to-sglang-native-cuda\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">1. Skip RotaryEmbedding from OOT dispatch (fall through to SGLang native CUDA)<a class=\"headerlink\" href=\"#skip-rotaryembedding-from-oot-dispatch-fall-through-to-sglang-native-cuda\" title=\"Link to this heading\">#</a></h3><p>Expected dispatch log: only SiluAndMul and RMSNorm appear, no RotaryEmbedding.</p>", "a[href=\"#common-recipes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Common Recipes<a class=\"headerlink\" href=\"#common-recipes\" title=\"Link to this heading\">#</a></h2><p>Each recipe shows a YAML config and expected dispatch result. Use <a class=\"reference internal\" href=\"debugg-and-diagonostics.html\"><span class=\"std std-doc\">Dispatch Log</span></a> to verify.</p>", "a[href=\"#use-pure-pytorch-reference-for-all-ops-useful-for-precision-debugging\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">3. Use pure PyTorch reference for all Ops (useful for precision debugging)<a class=\"headerlink\" href=\"#use-pure-pytorch-reference-for-all-ops-useful-for-precision-debugging\" title=\"Link to this heading\">#</a></h3><p>Expected dispatch log: all ops \u2192 <code class=\"docutils literal notranslate\"><span class=\"pre\">reference(reference)</span></code>.</p>", "a[href=\"debugg-and-diagonostics.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Debugging and diagnostics<a class=\"headerlink\" href=\"#debugging-and-diagnostics\" title=\"Link to this heading\">#</a></h1><p>This section introduces diagnostics on ops dispatch.</p>", "a[href=\"#force-rmsnorm-to-use-vendor-backend-others-use-flagos\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">2. Force RMSNorm to use vendor backend, others use flagos<a class=\"headerlink\" href=\"#force-rmsnorm-to-use-vendor-backend-others-use-flagos\" title=\"Link to this heading\">#</a></h3><p>Expected dispatch log: <code class=\"docutils literal notranslate\"><span class=\"pre\">RMSNorm</span> <span class=\"pre\">\u2192</span> <span class=\"pre\">vendor(vendor.nvidia)</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">SiluAndMul</span> <span class=\"pre\">\u2192</span> <span class=\"pre\">flagos(flagos)</span></code>.</p>"}
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

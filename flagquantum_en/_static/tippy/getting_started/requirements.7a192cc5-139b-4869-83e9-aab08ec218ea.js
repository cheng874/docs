selector_to_html = {"a[href=\"#software-requirements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software requirements<a class=\"headerlink\" href=\"#software-requirements\" title=\"Link to this heading\">#</a></h2><p>Optional extras are declared in <code class=\"docutils literal notranslate\"><span class=\"pre\">pyproject.toml</span></code> and installed with\n<code class=\"docutils literal notranslate\"><span class=\"pre\">pip</span> <span class=\"pre\">install</span> <span class=\"pre\">\"flagquantum[&lt;extra&gt;]\"</span></code>:</p>", "a[href=\"#requirements\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum runs on Python 3.10 to 3.12 and requires PyTorch 2.5 or newer. The\nreleased package depends on PyTorch only; everything else is an optional extra.</p>", "a[href=\"#hardware-platforms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Hardware platforms<a class=\"headerlink\" href=\"#hardware-platforms\" title=\"Link to this heading\">#</a></h2><p>FlagQuantum performs no vendor detection and contains no vendor branches. Physical-device detection, the vendor runtime, and the mapping from <code class=\"docutils literal notranslate\"><span class=\"pre\">flagos:0</span></code> to a physical card belong to the FlagOS provider integration; FlagQuantum records the runtime identity and route evidence it is given. A domestic accelerator is therefore not certified merely because an integration path exists.</p>", "a[href=\"#multi-node-expectations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Multi-node expectations<a class=\"headerlink\" href=\"#multi-node-expectations\" title=\"Link to this heading\">#</a></h2><p>Distributed support is environment-specific. In the reviewed setup, a two-node\nA800 deployment with one device per node runs forward, gradient, and\ntraining/resume workloads over NCCL and TCP; multi-node release certification is\na separate, evidence-gated step.</p>"}
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

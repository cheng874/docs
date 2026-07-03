selector_to_html = {"a[href=\"example-qwen2.5-bv150.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Qwen2.5-1.5B inference on Iluvatar BI-V150<a class=\"headerlink\" href=\"#qwen2-5-1-5b-inference-on-iluvatar-bi-v150\" title=\"Link to this heading\">#</a></h1><h2>Contents<a class=\"headerlink\" href=\"#contents\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#supported-hardware-platforms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Supported hardware platforms<a class=\"headerlink\" href=\"#supported-hardware-platforms\" title=\"Link to this heading\">#</a></h2><p>The following table summarizes supported hardware and their verification status:</p>", "a[href=\"#software-requirements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software Requirements<a class=\"headerlink\" href=\"#software-requirements\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#supported-models\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Supported models<a class=\"headerlink\" href=\"#supported-models\" title=\"Link to this heading\">#</a></h2><p>In theory, vllm-plugin-FL can support all models available in vLLM if no unsupported operators are involved. The following models have been end-to-end verified:</p>", "a[href=\"#requirements\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><h2>Software Requirements<a class=\"headerlink\" href=\"#software-requirements\" title=\"Link to this heading\">#</a></h2>", "a[href=\"run-inference-task.html#run-a-serving-inference-task\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Run a serving inference task<a class=\"headerlink\" href=\"#run-a-serving-inference-task\" title=\"Link to this heading\">#</a></h2><p>Serving inference starts a long-running vLLM API server that keeps the model loaded in memory, accepting requests via OpenAI-compatible HTTP endpoints \u2014 ideal for online services and concurrent clients.</p><p>Since this is a local deployment, no API key is required. Set <code class=\"docutils literal notranslate\"><span class=\"pre\">api_key</span></code> to any value (e.g. <code class=\"docutils literal notranslate\"><span class=\"pre\">\"EMPTY\"</span></code>) \u2014 no tokens are consumed.</p>"}
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

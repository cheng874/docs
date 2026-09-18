selector_to_html = {"a[href=\"#run-an-inference-task\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Run an inference task<a class=\"headerlink\" href=\"#run-an-inference-task\" title=\"Link to this heading\">#</a></h1><p>With vLLM and vllm-plugin-FL installed, you can run inference in two ways: offline batched inference (load the model directly in a Python script) or serving inference (start an API server and send requests). Choose the approach that fits your use case.</p>", "a[href=\"#run-an-offline-batched-inference\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Run an offline batched inference<a class=\"headerlink\" href=\"#run-an-offline-batched-inference\" title=\"Link to this heading\">#</a></h2><p>Offline batched inference loads the model directly in a Python script and generates outputs for a batch of prompts in a single run \u2014 no server setup required.</p>", "a[href=\"#run-a-serving-inference-task\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Run a serving inference task<a class=\"headerlink\" href=\"#run-a-serving-inference-task\" title=\"Link to this heading\">#</a></h2><p>Serving inference starts a long-running vLLM API server that keeps the model loaded in memory, accepting requests via OpenAI-compatible HTTP endpoints \u2014 ideal for online services and concurrent clients.</p><p>Since this is a local deployment, no API key is required. Set <code class=\"docutils literal notranslate\"><span class=\"pre\">api_key</span></code> to any value (e.g. <code class=\"docutils literal notranslate\"><span class=\"pre\">\"EMPTY\"</span></code>) \u2014 no tokens are consumed.</p>"}
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

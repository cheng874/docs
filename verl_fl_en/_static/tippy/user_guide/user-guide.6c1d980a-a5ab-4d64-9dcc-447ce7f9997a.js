selector_to_html = {"a[href=\"e2e-use-case.html#nvidia-e2e-grpo-training\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">NVIDIA E2E GRPO Training<a class=\"headerlink\" href=\"#nvidia-e2e-grpo-training\" title=\"Link to this heading\">#</a></h2><p>End-to-end GRPO training test on NVIDIA GPU environment. Model: Qwen3-0.6B, Dataset: GSM8K.</p>", "a[href=\"#verl-fl-user-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">verl-FL User Guide<a class=\"headerlink\" href=\"#verl-fl-user-guide\" title=\"Link to this heading\">#</a></h1><p>This section provides detailed guidance on using verl-FL for end-to-end GRPO training across different hardware platforms.</p>", "a[href=\"e2e-use-case.html#metax-e2e-grpo-training\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">MetaX E2E GRPO Training<a class=\"headerlink\" href=\"#metax-e2e-grpo-training\" title=\"Link to this heading\">#</a></h2><p>End-to-end GRPO training test on MetaX C500 environment. Model: Qwen3-0.6B, Dataset: GSM8K.</p>", "a[href=\"e2e-use-case.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">End-to-End Use Case: GRPO Training with verl-FL<a class=\"headerlink\" href=\"#end-to-end-use-case-grpo-training-with-verl-fl\" title=\"Link to this heading\">#</a></h1><p>This guide provides step-by-step instructions for running end-to-end GRPO training of Qwen3-0.6B on the GSM8K dataset across different hardware platforms using verl-FL.</p>"}
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

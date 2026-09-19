selector_to_html = {"a[href=\"#install-from-source\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Install from source<a class=\"headerlink\" href=\"#install-from-source\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#install-megatron-lm-fl\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install Megatron-LM-FL<a class=\"headerlink\" href=\"#install-megatron-lm-fl\" title=\"Link to this heading\">#</a></h1><p>You can install Megatron-LM-FL through one of the following methods:</p>", "a[href=\"#flagos-release-image-v0-2-0-rc2\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">FlagOS Release Image (v0.2.0-rc2)<a class=\"headerlink\" href=\"#flagos-release-image-v0-2-0-rc2\" title=\"Link to this heading\">#</a></h3><p>Includes: torch 2.4.0a0, triton 3.0.0, trans-engine 2.14.0. Suitable for 100B+ parameter model pre-training.</p>", "a[href=\"../user_guide/multi-platform-training.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Multi-Platform Training and Testing<a class=\"headerlink\" href=\"#multi-platform-training-and-testing\" title=\"Link to this heading\">#</a></h1><p>This guide walks through installing Megatron-LM-FL and running an end-to-end Qwen3 training job on four non-NVIDIA platforms: MetaX, Hygon, Ascend, and T-Head PPU. Every command, configuration file, and log excerpt below was collected from a real validation run on each platform.</p><p>The workflow uses three FlagOS components together:</p>", "a[href=\"#non-nvidia-platforms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Non-NVIDIA platforms<a class=\"headerlink\" href=\"#non-nvidia-platforms\" title=\"Link to this heading\">#</a></h2><p>Megatron-LM-FL v0.3.0-rc2 has been validated on MetaX, Hygon, Ascend, and T-Head PPU. Use the vendor container image, then install from source at the matching tag:</p>", "a[href=\"#docker-recommended\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker (Recommended)<a class=\"headerlink\" href=\"#docker-recommended\" title=\"Link to this heading\">#</a></h2><h3>FlagOS Release Image (v0.2.0-rc2)<a class=\"headerlink\" href=\"#flagos-release-image-v0-2-0-rc2\" title=\"Link to this heading\">#</a></h3><p>Includes: torch 2.4.0a0, triton 3.0.0, trans-engine 2.14.0. Suitable for 100B+ parameter model pre-training.</p>", "a[href=\"#cuda\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">CUDA<a class=\"headerlink\" href=\"#cuda\" title=\"Link to this heading\">#</a></h3>"}
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

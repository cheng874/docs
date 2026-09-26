selector_to_html = {"a[href=\"#non-nvidia-platforms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Non-NVIDIA platforms<a class=\"headerlink\" href=\"#non-nvidia-platforms\" title=\"Link to this heading\">#</a></h2><p>TransformerEngine-FL v0.3.0 has been validated on MetaX, Hygon, Ascend, and T-Head PPU. Non-NVIDIA builds must skip the CUDA extension:</p>", "a[href=\"#install-from-source\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Install from source<a class=\"headerlink\" href=\"#install-from-source\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#direct-install-from-flagos-repository\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Direct install from FlagOS Repository<a class=\"headerlink\" href=\"#direct-install-from-flagos-repository\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../user_guide/e2e-use-case.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">End-to-End Use Case: TransformerEngine-FL + Megatron-LM-FL + FlagScale<a class=\"headerlink\" href=\"#end-to-end-use-case-transformerengine-fl-megatron-lm-fl-flagscale\" title=\"Link to this heading\">#</a></h1><p>This guide walks through an end-to-end training workflow using TransformerEngine-FL, Megatron-LM-FL, and FlagScale together, performed on both CUDA (NVIDIA) and MetaX platforms.</p>", "a[href=\"../user_guide/multi-platform-testing.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Multi-Platform Build and Testing<a class=\"headerlink\" href=\"#multi-platform-build-and-testing\" title=\"Link to this heading\">#</a></h1><p>This guide covers building TransformerEngine-FL and validating it with an end-to-end training workflow across CUDA (NVIDIA), MetaX, Hygon, Ascend, and T-Head PPU. It focuses on the parts that are specific to this component \u2014 the operator backend tiers, the vendor backends, and the attention backends \u2014 and on how to tell a healthy build from a broken one.</p><p>For the training orchestration around it, see <a class=\"reference external\" href=\"https://github.com/flagos-ai/Megatron-LM-FL\">Megatron-LM-FL</a> and <a class=\"reference external\" href=\"https://github.com/flagos-ai/FlagScale\">FlagScale</a>.</p>", "a[href=\"#docker-recommended\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker (Recommended)<a class=\"headerlink\" href=\"#docker-recommended\" title=\"Link to this heading\">#</a></h2><p>TransformerEngine-FL runs in a pre-built Docker image shared with Megatron-LM-FL. Go to the <a class=\"reference external\" href=\"https://flagos.io/Home\">FlagOS main page</a>, pick the image for your hardware from the download list in the middle of the page, and follow the on-page instructions to pull the image, enter the container, and start it.</p><p>Suitable for 100B+ parameter model pre-training.</p>", "a[href=\"#install-transformerengine-fl\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install TransformerEngine-FL<a class=\"headerlink\" href=\"#install-transformerengine-fl\" title=\"Link to this heading\">#</a></h1><h2>Docker (Recommended)<a class=\"headerlink\" href=\"#docker-recommended\" title=\"Link to this heading\">#</a></h2><p>TransformerEngine-FL runs in a pre-built Docker image shared with Megatron-LM-FL. Go to the <a class=\"reference external\" href=\"https://flagos.io/Home\">FlagOS main page</a>, pick the image for your hardware from the download list in the middle of the page, and follow the on-page instructions to pull the image, enter the container, and start it.</p><p>Suitable for 100B+ parameter model pre-training.</p>"}
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

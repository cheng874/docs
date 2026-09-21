selector_to_html = {"a[href=\"#supported-hardwares\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Supported hardwares<a class=\"headerlink\" href=\"#supported-hardwares\" title=\"Link to this heading\">#</a></h2><p>Training with TransformerEngine-FL has been validated end to end on MetaX, Hygon, Ascend, and T-Head PPU. See <a class=\"reference internal\" href=\"../user_guide/multi-platform-testing.html\"><span class=\"std std-doc\">Multi-Platform Build and Testing</span></a> for the build flags and the procedure.</p>", "a[href=\"#requirements\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><h2>Supported hardwares<a class=\"headerlink\" href=\"#supported-hardwares\" title=\"Link to this heading\">#</a></h2><p>Training with TransformerEngine-FL has been validated end to end on MetaX, Hygon, Ascend, and T-Head PPU. See <a class=\"reference internal\" href=\"../user_guide/multi-platform-testing.html\"><span class=\"std std-doc\">Multi-Platform Build and Testing</span></a> for the build flags and the procedure.</p>", "a[href=\"#software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software<a class=\"headerlink\" href=\"#software\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../user_guide/multi-platform-testing.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Multi-Platform Build and Testing<a class=\"headerlink\" href=\"#multi-platform-build-and-testing\" title=\"Link to this heading\">#</a></h1><p>This guide covers building TransformerEngine-FL and validating it on four non-NVIDIA platforms: MetaX, Hygon, Ascend, and T-Head PPU. It focuses on the parts that are specific to this component \u2014 the operator backend tiers, the vendor backends, and the attention backends \u2014 and on how to tell a healthy build from a broken one.</p><p>For the training orchestration around it, see <a class=\"reference external\" href=\"https://github.com/flagos-ai/Megatron-LM-FL\">Megatron-LM-FL</a> and <a class=\"reference external\" href=\"https://github.com/flagos-ai/FlagScale\">FlagScale</a>.</p>", "a[href=\"#source-build-requirements\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Source Build Requirements<a class=\"headerlink\" href=\"#source-build-requirements\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#operating-system\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Operating system<a class=\"headerlink\" href=\"#operating-system\" title=\"Link to this heading\">#</a></h2><p>Linux (official), WSL2 (limited support)</p>"}
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

selector_to_html = {"a[href=\"#overview\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Overview<a class=\"headerlink\" href=\"#overview\" title=\"Link to this heading\">#</a></h2><p>FlagScale leverages <a class=\"reference external\" href=\"https://github.com/facebookresearch/hydra\">Hydra</a> for configuration management. The configurations are organized into two levels: an outer experiment-level YAML file and an inner task-level YAML file.</p>", "a[href=\"requirements.html#supported-models\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Supported models<a class=\"headerlink\" href=\"#supported-models\" title=\"Link to this heading\">#</a></h2><h3>Training<a class=\"headerlink\" href=\"#training\" title=\"Link to this heading\">#</a></h3>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Requirements<a class=\"headerlink\" href=\"#requirements\" title=\"Link to this heading\">#</a></h1><p>This section includes information about the hardware platforms and models.</p>", "a[href=\"requirements.html#hardware-platforms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Hardware platforms<a class=\"headerlink\" href=\"#hardware-platforms\" title=\"Link to this heading\">#</a></h2><p>FlagScale is designed to work collaboratively with FlagOS plugins. While FlagScale itself has no hardware platform requirements, you should review the hardware requirements of the specific FlagOS plugins you intend to use. For more information, see <a class=\"reference external\" href=\"https://github.com/flagos-ai/Megatron-LM-FL\">Megatron-LM-FL</a>, <a class=\"reference external\" href=\"https://github.com/flagos-ai/TransformerEngine-FL\">TransformerEngine-FL</a>, <a class=\"reference external\" href=\"https://github.com/flagos-ai/verl-FL\">VeRL-FL</a>, and <a class=\"reference external\" href=\"https://github.com/flagos-ai/vllm-plugin-FL\">vllm-plugin-FL</a>.</p>", "a[href=\"install.html#setup\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Setup<a class=\"headerlink\" href=\"#setup\" title=\"Link to this heading\">#</a></h2><h3>1. Install backends<a class=\"headerlink\" href=\"#install-backends\" title=\"Link to this heading\">#</a></h3><h4>Inference / Serving backend<a class=\"headerlink\" href=\"#inference-serving-backend\" title=\"Link to this heading\">#</a></h4><p>We recommend using the latest release of flagscale-inference image.</p>", "a[href=\"install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install FlagScale<a class=\"headerlink\" href=\"#install-flagscale\" title=\"Link to this heading\">#</a></h1><p>Read <a class=\"reference internal\" href=\"requirements.html\"><span class=\"std std-doc\">Requirements</span></a> before proceeding.</p>", "a[href=\"#getting-started\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Getting Started<a class=\"headerlink\" href=\"#getting-started\" title=\"Link to this heading\">#</a></h1><h2>Overview<a class=\"headerlink\" href=\"#overview\" title=\"Link to this heading\">#</a></h2><p>FlagScale leverages <a class=\"reference external\" href=\"https://github.com/facebookresearch/hydra\">Hydra</a> for configuration management. The configurations are organized into two levels: an outer experiment-level YAML file and an inner task-level YAML file.</p>"}
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

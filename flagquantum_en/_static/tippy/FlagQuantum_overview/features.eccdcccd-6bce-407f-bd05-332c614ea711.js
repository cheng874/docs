selector_to_html = {"a[href=\"#ecosystems-and-extensibility\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Ecosystems and extensibility<a class=\"headerlink\" href=\"#ecosystems-and-extensibility\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#features\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Features<a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h1><h2>Program model<a class=\"headerlink\" href=\"#program-model\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#compilation-and-deployment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Compilation and deployment<a class=\"headerlink\" href=\"#compilation-and-deployment\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#hardware-integration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Hardware integration<a class=\"headerlink\" href=\"#hardware-integration\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#noise\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Noise<a class=\"headerlink\" href=\"#noise\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#simulation-and-training\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Simulation and training<a class=\"headerlink\" href=\"#simulation-and-training\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#distributed-execution\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">distributed execution<a class=\"headerlink\" href=\"#distributed-execution\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#program-model\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Program model<a class=\"headerlink\" href=\"#program-model\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#precision-and-numerical-trust\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Precision and numerical trust<a class=\"headerlink\" href=\"#precision-and-numerical-trust\" title=\"Link to this heading\">#</a></h2>"}
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

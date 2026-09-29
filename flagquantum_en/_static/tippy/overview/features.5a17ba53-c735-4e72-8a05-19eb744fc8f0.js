selector_to_html = {"a[href=\"#measurement-noise-and-precision\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Measurement, noise, and precision<a class=\"headerlink\" href=\"#measurement-noise-and-precision\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#ecosystem-and-extension\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Ecosystem and extension<a class=\"headerlink\" href=\"#ecosystem-and-extension\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#one-program-several-representations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">One program, several representations<a class=\"headerlink\" href=\"#one-program-several-representations\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#evidence-discipline\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Evidence discipline<a class=\"headerlink\" href=\"#evidence-discipline\" title=\"Link to this heading\">#</a></h2><p>Implemented APIs, passing correctness checks, historical measurements, and research goals are three different things. Each capability is graded as release certified, production supported, development evidence, or experimental, and the grade is bound to the exact workload and environment that was validated.</p>", "a[href=\"#circuits-compilation-and-planning\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Circuits, compilation, and planning<a class=\"headerlink\" href=\"#circuits-compilation-and-planning\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#deployment-and-hardware-execution\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Deployment and hardware execution<a class=\"headerlink\" href=\"#deployment-and-hardware-execution\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#pytorch-native-quantum-training\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">PyTorch-native quantum training<a class=\"headerlink\" href=\"#pytorch-native-quantum-training\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#digital-twins-and-error-correction\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Digital twins and error correction<a class=\"headerlink\" href=\"#digital-twins-and-error-correction\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#features\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Features<a class=\"headerlink\" href=\"#features\" title=\"Link to this heading\">#</a></h1><p>This page summarises what FlagQuantum provides. Each area links to the guide that\ncovers its interface and its evidence boundary.</p>"}
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

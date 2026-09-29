selector_to_html = {"a[href=\"#qpu-digital-twins\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">QPU digital twins<a class=\"headerlink\" href=\"#qpu-digital-twins\" title=\"Link to this heading\">#</a></h2><p>A digital twin is a calibration-conditioned model of a physical QPU. It predicts the measurement distribution of a circuit offline, and its predictions are compared with traceable hardware evidence rather than with an ideal simulator.</p>", "a[href=\"#quantum-error-correction\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Quantum error correction<a class=\"headerlink\" href=\"#quantum-error-correction\" title=\"Link to this heading\">#</a></h2><p>The error-correction namespace connects syndrome extraction, decoding, correction, and logical-result analysis. A memory experiment returns a logical error rate together with the syndrome and correction records that produced it:</p>", "a[href=\"#digital-twins-and-error-correction\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Digital Twins and Error Correction<a class=\"headerlink\" href=\"#digital-twins-and-error-correction\" title=\"Link to this heading\">#</a></h1><h2>QPU digital twins<a class=\"headerlink\" href=\"#qpu-digital-twins\" title=\"Link to this heading\">#</a></h2><p>A digital twin is a calibration-conditioned model of a physical QPU. It predicts the measurement distribution of a circuit offline, and its predictions are compared with traceable hardware evidence rather than with an ideal simulator.</p>"}
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

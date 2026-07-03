selector_to_html = {"a[href=\"#ci-runner\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">CI Runner<a class=\"headerlink\" href=\"#ci-runner\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#performance-tests\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Performance Tests<a class=\"headerlink\" href=\"#performance-tests\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#run-tests\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Run Tests<a class=\"headerlink\" href=\"#run-tests\" title=\"Link to this heading\">#</a></h2><h3>Correctness Tests<a class=\"headerlink\" href=\"#correctness-tests\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#flagtensor-user-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor User Guide<a class=\"headerlink\" href=\"#flagtensor-user-guide\" title=\"Link to this heading\">#</a></h1><h2>Use FlagTensor<a class=\"headerlink\" href=\"#use-flagtensor\" title=\"Link to this heading\">#</a></h2><p>FlagTensor integrates directly with PyTorch. Import the package and call operators on CUDA tensors:</p>", "a[href=\"#operator-list\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Operator List<a class=\"headerlink\" href=\"#operator-list\" title=\"Link to this heading\">#</a></h2><p>The complete operator registry is maintained at <a class=\"reference external\" href=\"https://github.com/flagos-ai/FlagTensor/blob/main/conf/operators.yaml\">FlagTensor conf/operators.yaml</a>.</p>", "a[href=\"#use-flagtensor\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Use FlagTensor<a class=\"headerlink\" href=\"#use-flagtensor\" title=\"Link to this heading\">#</a></h2><p>FlagTensor integrates directly with PyTorch. Import the package and call operators on CUDA tensors:</p>", "a[href=\"#correctness-tests\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Correctness Tests<a class=\"headerlink\" href=\"#correctness-tests\" title=\"Link to this heading\">#</a></h3>"}
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

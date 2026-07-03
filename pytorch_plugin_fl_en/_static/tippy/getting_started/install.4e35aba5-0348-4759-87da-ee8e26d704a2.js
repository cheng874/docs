selector_to_html = {"a[href=\"#runtime-environment-variables\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Runtime Environment Variables<a class=\"headerlink\" href=\"#runtime-environment-variables\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#maca-platform\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">MACA platform<a class=\"headerlink\" href=\"#maca-platform\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#docker-images-recommended\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker Images (Recommended)<a class=\"headerlink\" href=\"#docker-images-recommended\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#build-from-source\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Build from Source<a class=\"headerlink\" href=\"#build-from-source\" title=\"Link to this heading\">#</a></h2><h3>CUDA platform<a class=\"headerlink\" href=\"#cuda-platform\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#huawei-ascend-platform\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Huawei Ascend platform<a class=\"headerlink\" href=\"#huawei-ascend-platform\" title=\"Link to this heading\">#</a></h3><p>On Ascend, FlagGems and CUDA kernels are disabled. Only the Ascend kernel backend (ACL NN API) is compiled.</p>", "a[href=\"#build-environment-variables\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Build Environment Variables<a class=\"headerlink\" href=\"#build-environment-variables\" title=\"Link to this heading\">#</a></h2><h3>Runtime Environment Variables<a class=\"headerlink\" href=\"#runtime-environment-variables\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#installation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Installation<a class=\"headerlink\" href=\"#installation\" title=\"Link to this heading\">#</a></h1><h2>Docker Images (Recommended)<a class=\"headerlink\" href=\"#docker-images-recommended\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#cuda-platform\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">CUDA platform<a class=\"headerlink\" href=\"#cuda-platform\" title=\"Link to this heading\">#</a></h3>"}
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

selector_to_html = {"a[href=\"requirements.html#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u652f\u6301 CUDA \u7684 NVIDIA GPU\uff08\u7528\u4e8e Triton \u6267\u884c\u548c cuTensor \u57fa\u7ebf\u6bd4\u8f83\uff09\u3002</p>", "a[href=\"#flagtensor\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u5feb\u901f\u5165\u95e8<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1>", "a[href=\"requirements.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5\u8981\u6c42<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><h2>\u786c\u4ef6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u652f\u6301 CUDA \u7684 NVIDIA GPU\uff08\u7528\u4e8e Triton \u6267\u884c\u548c cuTensor \u57fa\u7ebf\u6bd4\u8f83\uff09\u3002</p>", "a[href=\"requirements.html#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8f6f\u4ef6<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html#nvidia-a100\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5feb\u901f\u5f00\u59cb\uff08NVIDIA A100\uff09<a class=\"headerlink\" href=\"#nvidia-a100\" title=\"Link to this heading\">#</a></h2>", "a[href=\"install.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b89\u88c5 FlagTensor<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><h2>\u5feb\u901f\u5f00\u59cb\uff08NVIDIA A100\uff09<a class=\"headerlink\" href=\"#nvidia-a100\" title=\"Link to this heading\">#</a></h2>"}
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

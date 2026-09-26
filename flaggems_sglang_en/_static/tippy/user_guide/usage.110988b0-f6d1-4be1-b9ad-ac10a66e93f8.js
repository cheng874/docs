selector_to_html = {"a[href=\"#use-operators\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Use operators<a class=\"headerlink\" href=\"#use-operators\" title=\"Link to this heading\">#</a></h1><p>After installing FlagGems-sglang, you can use its optimized operators directly in your Python code.</p><p>For example, import the library and call the operators on CUDA tensors:</p>"}
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

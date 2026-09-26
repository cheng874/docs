selector_to_html = {"a[href=\"#rotaryembedding-oot-sglang-cuda\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">1. \u8df3\u8fc7 RotaryEmbedding \u7684 OOT \u8c03\u5ea6\uff08\u56de\u9000\u5230 SGLang \u539f\u751f CUDA\uff09<a class=\"headerlink\" href=\"#rotaryembedding-oot-sglang-cuda\" title=\"Link to this heading\">#</a></h3><p>\u9884\u671f\u8c03\u5ea6\u65e5\u5fd7\uff1a\u4ec5\u51fa\u73b0 SiluAndMul \u548c RMSNorm\uff0c\u4e0d\u51fa\u73b0 RotaryEmbedding\u3002</p>", "a[href=\"#yaml\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u901a\u8fc7 YAML \u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u8c03\u5ea6<a class=\"headerlink\" href=\"#yaml\" title=\"Link to this heading\">#</a></h1><p>\u63d2\u4ef6\u9644\u5e26\u4e00\u4e2a\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6 <code class=\"docutils literal notranslate\"><span class=\"pre\">config/sample.yaml</span></code>\uff0c\u5305\u542b\u6240\u6709\u53ef\u7528\u9009\u9879\u3002\u590d\u5236\u5e76\u81ea\u5b9a\u4e49\uff1a</p>", "a[href=\"#pytorch-reference\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">3. \u6240\u6709\u7b97\u5b50\u4f7f\u7528\u7eaf PyTorch reference\uff08\u9002\u7528\u4e8e\u7cbe\u5ea6\u8c03\u8bd5\uff09<a class=\"headerlink\" href=\"#pytorch-reference\" title=\"Link to this heading\">#</a></h3><p>\u9884\u671f\u8c03\u5ea6\u65e5\u5fd7\uff1a\u6240\u6709\u7b97\u5b50 \u2192 <code class=\"docutils literal notranslate\"><span class=\"pre\">reference(reference)</span></code>\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5e38\u7528\u914d\u7f6e\u65b9\u6848<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u6bcf\u4e2a\u65b9\u6848\u5c55\u793a\u4e00\u4e2a YAML \u914d\u7f6e\u548c\u9884\u671f\u7684\u8c03\u5ea6\u7ed3\u679c\u3002\u4f7f\u7528<a class=\"reference internal\" href=\"debugg-and-diagonostics.html\"><span class=\"std std-doc\">\u8c03\u5ea6\u65e5\u5fd7</span></a>\u8fdb\u884c\u9a8c\u8bc1\u3002</p>", "a[href=\"#rmsnorm-vendor-flagos\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">2. \u5f3a\u5236 RMSNorm \u4f7f\u7528 vendor \u540e\u7aef\uff0c\u5176\u4ed6\u4f7f\u7528 flagos<a class=\"headerlink\" href=\"#rmsnorm-vendor-flagos\" title=\"Link to this heading\">#</a></h3><p>\u9884\u671f\u8c03\u5ea6\u65e5\u5fd7\uff1a<code class=\"docutils literal notranslate\"><span class=\"pre\">RMSNorm</span> <span class=\"pre\">\u2192</span> <span class=\"pre\">vendor(vendor.nvidia)</span></code>\uff0c<code class=\"docutils literal notranslate\"><span class=\"pre\">SiluAndMul</span> <span class=\"pre\">\u2192</span> <span class=\"pre\">flagos(flagos)</span></code>\u3002</p>", "a[href=\"debugg-and-diagonostics.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8c03\u8bd5\u4e0e\u8bca\u65ad<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u4ecb\u7ecd\u7b97\u5b50\u8c03\u5ea6\u7684\u8bca\u65ad\u65b9\u6cd5\u3002</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u914d\u7f6e\u5b57\u6bb5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>"}
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

selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u52a8\u6001\u7ebf\u8def<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u52a8\u6001\u7ebf\u8def\u5f15\u5165\u7ebf\u8def\u4e2d\u6d4b\u91cf\u4e0e\u7ecf\u5178\u6761\u4ef6\u63a7\u5236\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6784\u5efa\u5e76\u8fd0\u884c<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">DynamicCircuit</span></code> \u53ca\u5176 IR \u7f16\u7801\u5904\u4e8e\u201c\u5019\u9009\u7a33\u5b9a\u201d\u72b6\u6001\uff0c\u7b49\u5f85 API \u8d1f\u8d23\u4eba\u6279\u51c6\uff1b\u6267\u884c\u4e0e\u540e\u7aef\n\u8bc4\u4f30\u4ecd\u5c5e\u5b9e\u9a8c\u6027\u3002\u7a33\u5b9a\u7684\u52a8\u6001\u8def\u5f84\u5c06\u7ee7\u7eed\u8fd4\u56de\u89c4\u8303\u7684 <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.ExecutionResult</span></code>\uff0c\u5382\u5546\u539f\u751f\u72b6\u6001\n\u4e0d\u4f1a\u88ab\u56fa\u5316\u8fdb\u8be5\u5951\u7ea6\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u540e\u7aef\u8bc4\u4f30<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>\u8be5\u9884\u68c0\u53ea\u8bfb\uff0c\u4e0d\u63d0\u4ea4\u4efb\u4f55\u4efb\u52a1\u3002\u672c\u5730\u52a8\u6001\u566a\u58f0\u4ec5\u9650\u4e8e\u4e0e\u5df2\u6267\u884c\u95e8\u76f8\u5339\u914d\u7684\u5355\u7ebf\u8def\u6bd4\u7279\u7ffb\u8f6c\n\u4fe1\u9053\uff0c\u4ee5\u53ca\u5728\u663e\u5f0f\u6d4b\u91cf\u4e0e\u6700\u7ec8\u91c7\u6837\u4e0a\u7684\u72ec\u7acb\u8bfb\u51fa\u6df7\u6dc6\uff1b\u5176\u4ed6\u4fe1\u9053\u3001\u5173\u8054\u8bfb\u51fa\u3001\u8bbe\u5907 profile\n\u7684\u65f6\u5e8f\u566a\u58f0\u4ee5\u53ca\u5382\u5546\u566a\u58f0\u6267\u884c\u90fd\u4f1a\u5931\u8d25\u5373\u62d2\uff0c\u800c\u4e0d\u662f\u9759\u9ed8\u8fd1\u4f3c\u3002\u4e0e\u5382\u5546\u65e0\u5173\u7684\u4e00\u81f4\u6027\u6d4b\u8bd5\u5728\n\u672c\u5730\u4e0e Qiskit Aer \u4e0a\u901a\u8fc7\uff0c\u4e14\u4e0d\u58f0\u79f0\u5df2\u5728\u771f\u5b9e\u52a8\u6001 QPU \u4e0a\u6267\u884c\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6267\u884c\u7b56\u7565<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">run_dynamic(...,</span> <span class=\"pre\">strategy=\"auto\")</span></code> \u5bf9\u7b26\u5408\u6761\u4ef6\u7684\u3001\u91c7\u6837\u6b21\u6570\u4e0d\u5c11\u4e8e 32 \u7684\u8d1f\u8f7d\u4f7f\u7528\u6279\u91cf\n\u6001\u5411\u91cf\u8f68\u8ff9\uff1b\u5f53\u6279\u5904\u7406\u4f1a\u8d85\u8fc7 <code class=\"docutils literal notranslate\"><span class=\"pre\">max_batched_bytes</span></code>\uff08\u9ed8\u8ba4 256 MiB\uff09\u6216\u8f93\u5165\u672c\u8eab\u5df2\u662f\u6279\u91cf\u65f6\uff0c\n\u56de\u9000\u5230\u53c2\u8003\u8f68\u8ff9\u8def\u5f84\u3002\u8c03\u7528\u65b9\u53ef\u4ee5\u663e\u5f0f\u8bf7\u6c42 <code class=\"docutils literal notranslate\"><span class=\"pre\">strategy=\"trajectory\"</span></code> \u6216 <code class=\"docutils literal notranslate\"><span class=\"pre\">\"batched\"</span></code>\uff0c\n<code class=\"docutils literal notranslate\"><span class=\"pre\">statistics[\"gate_execution_strategy\"]</span></code> \u4f1a\u8bb0\u5f55\u6240\u9009\u8def\u5f84\uff0c\u4fbf\u4e8e\u57fa\u51c6\u5f52\u56e0\u3002</p>"}
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

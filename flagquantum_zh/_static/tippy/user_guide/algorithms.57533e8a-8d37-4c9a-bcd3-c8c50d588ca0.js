selector_to_html = {"a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7b97\u6cd5<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum \u4ee5\u53ef\u76f4\u63a5\u8fd0\u884c\u7684\u793a\u4f8b\u5f62\u5f0f\u63d0\u4f9b\u7b97\u6cd5\u5355\u5143\uff0c\u89c4\u6a21\u4e3a\u6f14\u793a\u7ea7\u522b\u3002\u6bcf\u4e2a\u5355\u5143\u90fd\u4f1a\u8bf4\u660e\n\u81ea\u5df1\u7684\u4f18\u52bf\u524d\u63d0\uff0c\u800c\u8bda\u5b9e\u7684\u89e3\u8bfb\u901a\u5e38\u662f\uff1a\u91cf\u5b50\u4f8b\u7a0b\u6240\u8981\u6c42\u7684\u8f93\u5165\u6a21\u578b\uff0c\u672c\u5355\u5143\u5e76\u672a\u63d0\u4f9b\u3002</p>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5355\u5143\u5217\u8868<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fb9\u754c<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p>\u8fd9\u4e9b\u5355\u5143\u662f\u6f14\u793a\u89c4\u6a21\u7684\u7814\u7a76\u63a5\u53e3\uff1a\u4e0d\u5bf9\u5b83\u4eec\u9644\u52a0\u6027\u80fd\u3001\u6536\u655b\u6216\u786c\u4ef6\u7ed3\u8bba\uff0c\u9ed8\u8ba4\u8fd0\u884c\u65f6\u4e5f\u4e0d\u4f1a\n\u9009\u62e9\u5b83\u4eec\u3002\u5176\u4e2d\u82e5\u5e72\u5355\u5143\u7684\u5bc4\u5b58\u5668\u5bbd\u5ea6\u88ab\u6709\u610f\u9650\u5236\uff0c\u56e0\u4e3a\u66f4\u5bbd\u7684\u7ebf\u8def\u9700\u8981\u672c\u5355\u5143\u5e76\u672a\u5efa\u6a21\u7684\n\u8f85\u52a9\u4f4d\u6216\u6001\u5236\u5907\u6210\u672c\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u67d0\u4e2a\u5355\u5143<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u6bcf\u4e2a\u5355\u5143\u90fd\u4ece\u5404\u81ea\u7684\u6a21\u5757\u5bfc\u51fa\uff0c\u800c\u4e0d\u662f\u4ece\u6839\u547d\u540d\u7a7a\u95f4\u5bfc\u51fa\uff0c\u56e0\u6b64\u793a\u4f8b\u4f1a\u76f4\u63a5\u5bfc\u5165\u5b83\u3002\u53ef\u8fd0\u884c\n\u5165\u53e3\u4f4d\u4e8e <code class=\"docutils literal notranslate\"><span class=\"pre\">examples/algorithms/</span></code>\uff0c\u6bcf\u4e2a\u793a\u4f8b\u90fd\u4f1a\u6253\u5370\u5b83\u4e0e\u7ecf\u5178\u53c2\u8003\u503c\u5bf9\u6bd4\u7684\u7ed3\u679c\u3002</p>"}
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

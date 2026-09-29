selector_to_html = {"a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e0b\u4e00\u6b65<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8bad\u7ec3\u7b2c\u4e00\u4e2a\u91cf\u5b50\u6a21\u578b<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u6784\u5efa\u4e00\u4e2a\u53cc\u91cf\u5b50\u6bd4\u7279\u7ebf\u8def\uff0c\u5e76\u901a\u8fc7\u6700\u5c0f\u5316 0 \u53f7\u7ebf\u4e0a\u7684 <code class=\"docutils literal notranslate\"><span class=\"pre\">Z</span></code> \u671f\u671b\u503c\u6765\u5b66\u4e60\u5b83\u7684\u65cb\u8f6c\u89d2\uff1a</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5feb\u901f\u5f00\u59cb<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u9875\u8bad\u7ec3\u4e00\u4e2a\u53cc\u91cf\u5b50\u6bd4\u7279\u6a21\u578b\uff0c\u7136\u540e\u6f14\u793a\u5982\u4f55\u5728\u4e0d\u6539\u52a8\u6a21\u578b\u7684\u60c5\u51b5\u4e0b\u5207\u6362\u6a21\u62df\u8868\u793a\u3002</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6267\u884c\u524d\u5148\u67e5\u770b\u7ebf\u8def\u4e0e\u8ba1\u5212<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u8ba1\u5212\u53ef\u4ee5\u5e8f\u5217\u5316\u4e0e\u6062\u590d\u3002\u628a\u6062\u590d\u540e\u7684\u8ba1\u5212\u4ea4\u7ed9 <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.run</span></code> \u4f1a\u7cbe\u786e\u6267\u884c\u8be5\u8ba1\u5212\uff1a\u4e0d\u4f1a\u91cd\u65b0\u89c4\u5212\uff0c\n\u4e5f\u4e0d\u4f1a\u88ab\u9759\u9ed8\u66ff\u6362\u6210\u53e6\u4e00\u4e2a\u540e\u7aef\u3002</p>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8ba9\u540c\u4e00\u4e2a\u6a21\u578b\u6362\u4e00\u79cd\u8868\u793a\u8fd0\u884c<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">examples/quick_start.py</span></code> \u8bad\u7ec3\u4e00\u4e2a\u89e3\u5df2\u77e5\u7684\u7ecf\u5178\u2014\u91cf\u5b50\u6df7\u5408\u6a21\u578b\uff0c\u5e76\u53ef\u5728\u547d\u4ee4\u884c\u5207\u6362\u6a21\u62df\u8868\u793a\uff1a</p>", "a[href=\"../user_guide/user-guide.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7528\u6237\u6307\u5357<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6307\u5357\u4ecb\u7ecd\u5982\u4f55\u7528 FlagQuantum \u6784\u5efa\u3001\u89c4\u5212\u3001\u8bad\u7ec3\u5e76\u8fd0\u884c\u91cf\u5b50\u7a0b\u5e8f\u3002</p>"}
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

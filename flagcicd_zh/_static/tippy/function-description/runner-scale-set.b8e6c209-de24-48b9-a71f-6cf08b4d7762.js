selector_to_html = {"a[href=\"../glossary/index.html#term-DooD\"]": "<dt id=\"term-DooD\">DooD</dt><dd><p>Docker-outside-of-Docker\uff0c\u4f7f\u7528\u5bbf\u4e3b\u673a Docker daemon \u7684\u5bb9\u5668\u5316\u65b9\u6848\uff0c\u6027\u80fd\u9ad8\u4f46\u98ce\u9669\u9ad8\uff0c\u4ec5\u5bf9\u7279\u6743\u7528\u6237\u5f00\u653e\u3002</p></dd>", "a[href=\"../glossary/index.html#term-DinD\"]": "<dt id=\"term-DinD\">DinD</dt><dd><p>Docker-in-Docker\uff0c\u5728 Docker \u5bb9\u5668\u5185\u8fd0\u884c Docker \u7684\u6280\u672f\u65b9\u6848\uff0c\u9694\u79bb\u6027\u597d\u4f46 docker run \u4e0d\u53ef\u8bbf\u95ee\u52a0\u901f\u5361\u8d44\u6e90\u3002</p></dd>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6838\u5fc3\u7279\u6027<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#runner-scale-set\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Runner Scale Set<a class=\"headerlink\" href=\"#runner-scale-set\" title=\"Link to this heading\">#</a></h1><p>Runner Scale Set \u662f FlagCICD \u7684\u8d44\u6e90\u6c60\u7ba1\u7406\u673a\u5236\uff0c\u901a\u8fc7 AutoscalingRunnerSet \u5b9e\u73b0 Runner \u7684\u81ea\u52a8\u6269\u7f29\u5bb9\uff0c\u914d\u5408 Volcano \u8c03\u5ea6\u5668\u4e3a\u9879\u76ee\u5212\u5206\u8d44\u6e90\u914d\u989d\u3002</p>", "a[href=\"../glossary/index.html#term-Runner\"]": "<dt id=\"term-Runner\">Runner</dt><dd><p>\u6267\u884c CI/CD \u5de5\u4f5c\u6d41\u7684\u4ee3\u7406\u7a0b\u5e8f\u3002</p></dd>", "a[href=\"../glossary/index.html#term-Queue\"]": "<dt id=\"term-Queue\">Queue</dt><dd><p>\u8d44\u6e90\u914d\u989d\u7ba1\u7406\u5355\u5143\uff0c\u7528\u4e8e Volcano \u8c03\u5ea6\u3002</p></dd>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6982\u8ff0<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>Runner Scale Set \u4e3a\u6bcf\u4e2a\u9879\u76ee\u4ed3\u5e93\u5355\u72ec\u90e8\u7f72\uff0c\u901a\u8fc7\u914d\u7f6e <code class=\"docutils literal notranslate\"><span class=\"pre\">maxRunners</span></code> \u548c <code class=\"docutils literal notranslate\"><span class=\"pre\">minRunners</span></code> \u53c2\u6570\uff0c\u6839\u636e\u4efb\u52a1\u961f\u5217\u81ea\u52a8\u6269\u7f29\u5bb9 <a class=\"reference internal\" href=\"../glossary/index.html#term-Runner\"><span class=\"xref std std-term\">Runner</span></a> \u8d44\u6e90\u3002</p>", "a[href=\"#docker\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Docker \u8fd0\u884c\u6a21\u5f0f<a class=\"headerlink\" href=\"#docker\" title=\"Link to this heading\">#</a></h2>"}
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

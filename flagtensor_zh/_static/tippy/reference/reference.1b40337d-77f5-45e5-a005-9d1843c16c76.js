selector_to_html = {"a[href=\"known_issues.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u5df2\u77e5\u95ee\u9898<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6587\u6863\u8ddf\u8e2a\u5f53\u524d FlagTensor \u5b9e\u73b0\u4e2d\u7684\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236\u3002</p>", "a[href=\"operator_coverage.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u7b97\u5b50\u8986\u76d6\u7387\u77e9\u9635<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><p>\u4ece\u6ce8\u518c\u8868\u751f\u6210\uff1a<code class=\"docutils literal notranslate\"><span class=\"pre\">conf/operators.yaml</span></code></p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u53c2\u8003<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u672c\u8282\u5305\u542b FlagTensor \u9a8c\u6536\u6587\u6863\uff0c\u6db5\u76d6\u7b56\u7565\u3001CI/CD \u5de5\u4f5c\u6d41\u3001\u7b97\u5b50\u8986\u76d6\u7387\u548c\u6807\u51c6\u547d\u4ee4\u3002</p>", "a[href=\"acceptance_checklist.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u9a8c\u6536\u68c0\u67e5\u6e05\u5355<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><p>\u672c\u68c0\u67e5\u6e05\u5355\u8ddf\u8e2a\u7b97\u5b50\u5e93\u9a8c\u6536\u6807\u51c6\u7684\u5f53\u524d\u5408\u89c4\u72b6\u6001\u3002</p>", "a[href=\"benchmark_policy.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u57fa\u51c6\u6d4b\u8bd5\u7b56\u7565<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><h2>\u8303\u56f4<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>\u672c\u6587\u6863\u5b9a\u4e49 FlagTensor \u6027\u80fd\u9a8c\u8bc1\u7684\u9a8c\u6536\u7ea7\u57fa\u51c6\u6d4b\u8bd5\u7b56\u7565\u3002</p>", "a[href=\"standard_commands.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u6807\u51c6\u9a8c\u6536\u547d\u4ee4<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6587\u6863\u63d0\u4f9b\u8fd0\u884c FlagTensor \u9a8c\u6536\u68c0\u67e5\u7684\u6807\u51c6\u547d\u4ee4\u3002</p>", "a[href=\"ci_matrix.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor CI \u77e9\u9635<a class=\"headerlink\" href=\"#flagtensor-ci\" title=\"Link to this heading\">#</a></h1><p>\u672c\u6587\u6863\u63cf\u8ff0 FlagTensor \u9a8c\u6536\u6d41\u7a0b\u4e2d\u7684 CI/CD \u5de5\u4f5c\u6d41\u53ca\u5176\u7528\u9014\u3002</p>", "a[href=\"accuracy_policy.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FlagTensor \u7cbe\u5ea6\u7b56\u7565<a class=\"headerlink\" href=\"#flagtensor\" title=\"Link to this heading\">#</a></h1><h2>\u8303\u56f4<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2><p>\u672c\u6587\u6863\u5b9a\u4e49 FlagTensor \u6b63\u786e\u6027\u9a8c\u8bc1\u7684\u9a8c\u6536\u7ea7\u7cbe\u5ea6\u7b56\u7565\u3002</p>"}
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

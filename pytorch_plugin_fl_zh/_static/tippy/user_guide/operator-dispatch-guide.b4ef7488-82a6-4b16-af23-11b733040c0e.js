selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u8c03\u5ea6<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2><p>\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u8986\u76d6\u5355\u4e2a\u7b97\u5b50\uff08\u4f18\u5148\u7ea7\u9ad8\u4e8e\u914d\u7f6e\u6587\u4ef6\uff09\uff1a</p>", "a[href=\"#id3\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u8c03\u5ea6<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h2><p>\u9ed8\u8ba4\u8def\u5f84\u4e3a <code class=\"docutils literal notranslate\"><span class=\"pre\">torch_fl/backends.conf</span></code>\uff0c\u53ef\u901a\u8fc7 <code class=\"docutils literal notranslate\"><span class=\"pre\">FLAGOS_BACKEND_CONFIG</span></code> \u73af\u5883\u53d8\u91cf\u8986\u76d6\u3002</p>", "a[href=\"#id1\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7b97\u5b50\u8c03\u5ea6\u7528\u6237\u6307\u5357<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h1><p>\u60a8\u53ef\u4ee5\u4ee5\u9010\u7b97\u5b50\u7c92\u5ea6\u914d\u7f6e\u4f7f\u7528 FlagGems \u8fd8\u662f\u539f\u751f\u5382\u5546\u540e\u7aef\u3002\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u8c03\u5ea6\u7b97\u5b50\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u8c03\u5ea6\u3002</p>", "a[href=\"#id5\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fd0\u884c\u65f6\u73af\u5883\u53d8\u91cf<a class=\"headerlink\" href=\"#id5\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u8c03\u8bd5\u8c03\u5ea6<a class=\"headerlink\" href=\"#id4\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#c\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">C++ \u7eaf\u5b58\u6839\u6a21\u5f0f<a class=\"headerlink\" href=\"#c\" title=\"Link to this heading\">#</a></h2><p>\u60a8\u53ef\u4ee5\u5b8c\u5168\u7981\u7528 FlagGems Python \u5c42\u6ce8\u518c\uff0c\u4ec5\u4fdd\u7559 C++ \u7edf\u4e00\u5c01\u88c5\u5668\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002\u8fd9\u5bf9\u4e8e\u9a8c\u8bc1\u6240\u6709\u5fc5\u9700\u7684\u7b97\u5b50\u662f\u5426\u90fd\u88ab C++ \u5b58\u6839\u8986\u76d6\u975e\u5e38\u6709\u7528\u3002</p>"}
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

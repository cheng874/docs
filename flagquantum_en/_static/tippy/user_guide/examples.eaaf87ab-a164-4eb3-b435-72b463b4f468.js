selector_to_html = {"a[href=\"#examples-and-tutorials\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Examples and Tutorials<a class=\"headerlink\" href=\"#examples-and-tutorials\" title=\"Link to this heading\">#</a></h1><h2>Learning path<a class=\"headerlink\" href=\"#learning-path\" title=\"Link to this heading\">#</a></h2><p>Tutorials teach the concepts behind the runnable examples and should be read in\norder, though each notebook stands alone.</p>", "a[href=\"../reference/capabilities.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Capability reference<a class=\"headerlink\" href=\"#capability-reference\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum publishes the maturity of every capability instead of implying it\nfrom an example. This page is a summary; the repository\u2019s machine-validated\ncapability matrix is authoritative.</p>", "a[href=\"#remote-examples\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Remote examples<a class=\"headerlink\" href=\"#remote-examples\" title=\"Link to this heading\">#</a></h2><p>The Quafu path compiles and validates a circuit before submitting it to\nhardware; the Jiuding path reuses a running workspace for low-latency remote\ncompute. Both require provider credentials and configured remote resources, and\na single visible Jiuding workspace is selected automatically.</p>", "a[href=\"#plan-before-executing\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Plan before executing<a class=\"headerlink\" href=\"#plan-before-executing\" title=\"Link to this heading\">#</a></h2><p>A plan explains intended execution; it is not benchmark evidence. Performance\nand scalability statements must use runtime-generated records and report their\n<code class=\"docutils literal notranslate\"><span class=\"pre\">distribution_semantics</span></code>.</p>", "a[href=\"#learning-path\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Learning path<a class=\"headerlink\" href=\"#learning-path\" title=\"Link to this heading\">#</a></h2><p>Tutorials teach the concepts behind the runnable examples and should be read in\norder, though each notebook stands alone.</p>", "a[href=\"#recommended-entry-points\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Recommended entry points<a class=\"headerlink\" href=\"#recommended-entry-points\" title=\"Link to this heading\">#</a></h2><p>The curated single-machine examples initialise no distributed backend and make\nno distributed scalability claim. The 1000-qubit dimer example is a\nstructure-aware MPS benchmark, not a claim about arbitrary 1000-qubit circuits.</p>"}
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

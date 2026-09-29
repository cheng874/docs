selector_to_html = {"a[href=\"#distributed-training\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Distributed training<a class=\"headerlink\" href=\"#distributed-training\" title=\"Link to this heading\">#</a></h2><p>Owner-sharded statevector and MPS training are available through explicit\nexperimental entry points under <code class=\"docutils literal notranslate\"><span class=\"pre\">flagquantum.experimental.distributed</span></code>, with\nowner-sharded optimizer state, checkpoint/resume, cancellation, and progress\nreporting. They are not implied by calling <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.train</span></code>, and distributed training\ncounts as complete only when forward execution, gradients, optimizer updates,\nand checkpoint ownership all preserve the declared distribution semantics.</p>", "a[href=\"#semantics-that-must-be-stated\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Semantics that must be stated<a class=\"headerlink\" href=\"#semantics-that-must-be-stated\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#sharded-statevector\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sharded statevector<a class=\"headerlink\" href=\"#sharded-statevector\" title=\"Link to this heading\">#</a></h2><p>An initialised multi-rank process group changes the runtime, not the program:</p>", "a[href=\"#rank-owned-mps\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Rank-owned MPS<a class=\"headerlink\" href=\"#rank-owned-mps\" title=\"Link to this heading\">#</a></h2><p>MPS execution can also distribute one state across ranks:</p>", "a[href=\"#distributed-execution\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Distributed execution<a class=\"headerlink\" href=\"#distributed-execution\" title=\"Link to this heading\">#</a></h1><p>Distributed execution keeps one logical workload and shards it across ranks.</p>"}
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

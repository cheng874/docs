selector_to_html = {"a[href=\"#running-a-unit\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Running a unit<a class=\"headerlink\" href=\"#running-a-unit\" title=\"Link to this heading\">#</a></h2><p>Each unit is exposed from its own module rather than from the root namespace, so\nexamples import it directly. The runnable entry points live under\n<code class=\"docutils literal notranslate\"><span class=\"pre\">examples/algorithms/</span></code>, and each prints the values it compares against a\nclassical reference.</p>", "a[href=\"#algorithms\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Algorithms<a class=\"headerlink\" href=\"#algorithms\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum ships algorithm units as ready-to-run examples, at demonstration\nscale. Each unit documents its own advantage premise, and the honest reading is\nusually that the quantum routine needs an input model this unit does not supply.</p>", "a[href=\"#units\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Units<a class=\"headerlink\" href=\"#units\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#boundaries\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Boundaries<a class=\"headerlink\" href=\"#boundaries\" title=\"Link to this heading\">#</a></h2><p>These units are demonstration-scale research surfaces: no performance,\nconvergence, or hardware claim is attached to them, and they are not selected by\nthe default runtime. Several of them are deliberately capped in register width\nbecause a wider circuit would need ancillas or a state-preparation cost the unit\ndoes not model.</p>"}
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

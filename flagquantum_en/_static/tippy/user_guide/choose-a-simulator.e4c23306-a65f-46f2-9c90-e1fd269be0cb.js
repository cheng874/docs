selector_to_html = {"a[href=\"#inspect-the-decision-before-running\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Inspect the decision before running<a class=\"headerlink\" href=\"#inspect-the-decision-before-running\" title=\"Link to this heading\">#</a></h2><p>The planner reports the selected representation, gradient support, and the blockers that would prevent a request from running. Use <code class=\"docutils literal notranslate\"><span class=\"pre\">fq.plan(circuit,</span> <span class=\"pre\">options=...)</span></code> when the execution options are part of the decision. A plan is an explanation of intent; it is not benchmark evidence.</p>", "a[href=\"#software-extended-precision\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Software-extended precision<a class=\"headerlink\" href=\"#software-extended-precision\" title=\"Link to this heading\">#</a></h2><p>On devices without native double precision, FlagQuantum can represent the requested logical precision with paired FP32 values (\u201cDouble-Single\u201d). This is a backend representation of the requested precision, not a second user-facing precision. The split real/imag and Double-Single paths are explicitly experimental, are never selected by the default runtime, and expose their own acceptance evidence; their supported scope is recorded in the capability catalog.</p>", "a[href=\"#choose-a-simulator\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Choose a Simulator<a class=\"headerlink\" href=\"#choose-a-simulator\" title=\"Link to this heading\">#</a></h1><p>FlagQuantum selects a simulation representation from the same program. The choice changes resource use and numerical behaviour, not the meaning of the circuit or the result contract.</p>", "a[href=\"#precision\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Precision<a class=\"headerlink\" href=\"#precision\" title=\"Link to this heading\">#</a></h2><p>Each execution resolves complex precision once. <code class=\"docutils literal notranslate\"><span class=\"pre\">complex64</span></code> implies float32 parameters and real components; <code class=\"docutils literal notranslate\"><span class=\"pre\">complex128</span></code> implies float64. An explicit <code class=\"docutils literal notranslate\"><span class=\"pre\">ExecutionOptions.precision</span></code> or circuit dtype must agree with the module\u2019s own precision choice, otherwise the module fails before execution instead of silently casting.</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">RuntimeConfig</span></code> is the immutable execution policy for long-lived or distributed work:</p>"}
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

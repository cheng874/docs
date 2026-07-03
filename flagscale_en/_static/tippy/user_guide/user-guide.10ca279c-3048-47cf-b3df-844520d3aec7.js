selector_to_html = {"a[href=\"#task-level-yaml\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Task-level YAML<a class=\"headerlink\" href=\"#task-level-yaml\" title=\"Link to this heading\">#</a></h3><p>Use the <code class=\"docutils literal notranslate\"><span class=\"pre\">examples/qwen3/conf/serve/8b.yaml</span></code> as an example to explain this configuration file.</p><p>The task-level YAML file specifies the model, dataset, and parameters for specific tasks such as training or inference. Every parameter in this file maps directly to an argument accepted by the backend engine, with hyphens (-) replaced by underscores (_).</p>", "a[href=\"#serve\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Serve<a class=\"headerlink\" href=\"#serve\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#reinforcement-learning\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Reinforcement Learning<a class=\"headerlink\" href=\"#reinforcement-learning\" title=\"Link to this heading\">#</a></h3><p>Require verl-FL environment</p>", "a[href=\"#inference\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Inference<a class=\"headerlink\" href=\"#inference\" title=\"Link to this heading\">#</a></h3><p>Require vLLM-FL environment</p>", "a[href=\"#step-1-configure-yaml-files\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Step 1: Configure YAML files<a class=\"headerlink\" href=\"#step-1-configure-yaml-files\" title=\"Link to this heading\">#</a></h2><p>FlagScale uses <a class=\"reference external\" href=\"https://hydra.cc/\">Hydra</a> for configuration management. Every task is driven by two YAML files that work together: an experiment-level file and a task-level file, both in the <code class=\"docutils literal notranslate\"><span class=\"pre\">examples/</span></code> directory. Before running the task, you need to configure these files first.</p>", "a[href=\"#step-2-run-tasks\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Step 2\uff1a Run tasks<a class=\"headerlink\" href=\"#step-2-run-tasks\" title=\"Link to this heading\">#</a></h2><p>FlagScale provides a unified runner for various tasks, including training, inference, reinforcement learning, and serving. Simply specify the configuration file to run the task with a single <code class=\"docutils literal notranslate\"><span class=\"pre\">flagscale</span></code> command. The runner will automatically load the configurations and execute the task. The following sections demonstrate how to run a distributed training task.</p>", "a[href=\"#train\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Train<a class=\"headerlink\" href=\"#train\" title=\"Link to this heading\">#</a></h3><p>Require Megatron-LM-FL enviroment</p>", "a[href=\"#user-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">User Guide<a class=\"headerlink\" href=\"#user-guide\" title=\"Link to this heading\">#</a></h1><p>This guide covers how to configure FlagScale and run training, inference, serving, and reinforcement learning tasks.</p>", "a[href=\"#experiment-level-yaml\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Experiment-level YAML<a class=\"headerlink\" href=\"#experiment-level-yaml\" title=\"Link to this heading\">#</a></h3><p>Use the <code class=\"docutils literal notranslate\"><span class=\"pre\">examples/qwen3/conf/serve.yaml</span></code> as an example to explain this configuration file.</p><p>The experiment-level file is the entry point for <code class=\"docutils literal notranslate\"><span class=\"pre\">flagscale</span></code> commands. It defines a global context for the run:</p>"}
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

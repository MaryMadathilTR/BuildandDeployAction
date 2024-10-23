const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
    try {
        // Get inputs defined in action.yml
        const name = core.getInput('build-command');
        const deployEnv = core.getInput('deploy-env');
        console.log(`Running build command: ${name} on ${deployEnv}`);
}   catch (error) {
        core.setFailed(error.message);
    }
}

run();
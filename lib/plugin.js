import {BasePlugin} from 'appium/plugin'
import log from './logger.js';
import {exec as execCb} from "node:child_process";
import {promisify} from "node:util";

export class ExecuteShellPlugin extends BasePlugin {

    /**
     * @param {string} pluginName The name of plugin
     */
    constructor(pluginName) {
        super(pluginName);
    }

    static async updateServer(expressApp) {
        expressApp.post('/local/execute_shell', await ExecuteShellPlugin.executeShell);
    }

    static async executeShell(
        req, res
    ) {
        let body = req.body;
        let shell = body.shell;
        log.info(`executeShell ${shell}`);
        const exec = promisify(execCb);
        try {
            const {stdout, stderr} = await exec(shell);
            log.info(`executeShell ${shell} STDOUT ${stdout}`);
            if (stderr) {
                log.error(`executeShell ${shell} STDERR ${stderr}`);
            }
            res.status(200).send({
                stdout,
                stderr
            });

        } catch (e) {
            res.status(500).send(e);
        }
    }
}

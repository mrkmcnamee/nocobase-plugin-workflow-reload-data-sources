import { Plugin } from '@nocobase/server';
import WorkflowPlugin from '@nocobase/plugin-workflow';

import ReloadDataSourcesInstruction from './ReloadDataSourcesInstruction';

export class PluginWorkflowReloadDataSourcesServer extends Plugin {
  async load() {
    const workflowPlugin = this.pm.get<WorkflowPlugin>(WorkflowPlugin);
    const instruction = new ReloadDataSourcesInstruction(workflowPlugin);
    workflowPlugin.registerInstruction('reloadDataSources', instruction);
  }
}

export default PluginWorkflowReloadDataSourcesServer;

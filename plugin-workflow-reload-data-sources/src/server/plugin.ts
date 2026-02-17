import { Plugin } from '@nocobase/server';
import WorkflowPlugin from '@nocobase/plugin-workflow';

import ReloadDataSourcesInstruction from './ReloadDataSourcesInstruction';

export default class extends Plugin {
  async load() {
    const workflowPlugin = this.app.getPlugin<WorkflowPlugin>(WorkflowPlugin);
    const instruction = new ReloadDataSourcesInstruction(this.app);
    workflowPlugin.registerInstruction('reloadDataSources', instruction);
  }
}

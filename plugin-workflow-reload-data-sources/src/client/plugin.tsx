import { Plugin } from '@nocobase/client';
import WorkflowPlugin from '@nocobase/plugin-workflow/client';

import ReloadDataSources from './ReloadDataSources';

export class PluginWorkflowReloadDataSourcesClient extends Plugin {
  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() {}

  async load() {
    const workflowPlugin = this.app.pm.get('workflow') as WorkflowPlugin;
    workflowPlugin.registerInstruction('reloadDataSources', ReloadDataSources);
  }
}

export default PluginWorkflowReloadDataSourcesClient;

import { Plugin } from '@nocobase/client-v2';
import WorkflowPlugin from '@nocobase/plugin-workflow/client-v2';

import ReloadDataSources from './ReloadDataSources';

export class PluginWorkflowReloadDataSourcesClientV2 extends Plugin {
  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() {}

  async load() {
    const workflowPlugin = this.app.pm.get('workflow') as WorkflowPlugin;
    workflowPlugin.registerInstruction('reloadDataSources', ReloadDataSources);
  }
}

export default PluginWorkflowReloadDataSourcesClientV2;

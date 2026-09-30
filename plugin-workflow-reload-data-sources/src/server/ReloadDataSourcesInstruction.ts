import { Processor, Instruction, JOB_STATUS, FlowNodeModel } from '@nocobase/plugin-workflow';

export default class extends Instruction {
  async run(node: FlowNodeModel, prevJob: unknown, processor: Processor) {
    try {
      const app = this.workflow.app;

      const dataSourcesRecords = await app.db.getRepository('dataSources').find({
        filter: {
          enabled: true,
          type: 'http',
        },
      });

      for (const dataSourceRecord of dataSourcesRecords) {
        const key = dataSourceRecord.get('key');
        app.dataSourceManager.dataSources.delete(key);
        await dataSourceRecord.loadIntoApplication({ app });
      }

      return {
        result: 'Reloaded data sources successfully',
        status: JOB_STATUS.RESOLVED,
      };
    } catch (e) {
      return {
        result: e instanceof Error ? e.message : String(e),
        status: JOB_STATUS.ERROR,
      };
    }
  }
}

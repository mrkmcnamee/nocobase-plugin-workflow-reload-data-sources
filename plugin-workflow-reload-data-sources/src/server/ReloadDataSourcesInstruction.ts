import { Processor, Instruction, FlowNodeModel } from '@nocobase/plugin-workflow';

export default class extends Instruction {
  app: any;

  constructor(app: any) {
    super(app);
    this.app = app;
  }

  async run(node: FlowNodeModel, prevJob, processor: Processor) {
    const app = this.app;

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
  }
}

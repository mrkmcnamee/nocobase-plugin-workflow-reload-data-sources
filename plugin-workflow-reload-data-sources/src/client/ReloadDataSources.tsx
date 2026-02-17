import React from 'react';
import { Loading3QuartersOutlined } from '@ant-design/icons';

import { SchemaComponent, css } from '@nocobase/client';
import {  Instruction } from '@nocobase/plugin-workflow/client';


export default class extends Instruction {
  title = 'Reload REST Data sources';
  type = 'reloadDataSources';
  group = 'extended';
  description = 'Reloads all enabled REST data sources. No configuration required.';
  icon = (<Loading3QuartersOutlined />);
}

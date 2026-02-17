# NocoBase workflow plugin: reload data sources

## Instructions (on Windows)

1. See [Your first plugin](https://docs.nocobase.com/development/your-fisrt-plugin) to get the NocoBase environment set up.

2. Drop in the plugin code into your project: e.g. `/packages/plugins/@my-project/plugin-workflow-reload-data-sources`.

3. Build using yarn:

    ```shell
    cd my-nocobase-app
    yarn build @my-project/plugin-workflow-reload-data-sources --tar
    ```

   The tar file will be in `C:\Git\nocobase\my-nocobase-app\packages\plugins\@my-project`

4. Upload the file via the Plugin manager and restart the container.

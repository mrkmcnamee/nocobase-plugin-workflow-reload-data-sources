# Development instructions (on Windows)

1. Enable Windows developer mode
   `Settings → System → Advanced → For developers → Developer Mode`.

2. [Install NocoBase from Git Source](https://docs.nocobase.com/get-started/installation/git).

3. Install and enable the plugin from Git:

        cd my-nocobase
        yarn pm pull https://github.com/mrkmcnamee/nocobase-plugin-workflow-reload-data-sources/plugin-workflow-reload-data-sources-x.y.z.tgz
        yarn pm enable @mrkmcnamee/plugin-workflow-reload-data-sources

4. Make changes and bump the version in the `package.json` file.

5. Build plugin:

        yarn build @mrkmcnamee/plugin-workflow-reload-data-sources --tar --no-dts

    The zip file will be found in `my-nocobase\storage\tar\@mrkmcnamee\`.

    Upload the plugin to a separate instance; don't use the same dev environment.

## References

* <https://docs.nocobase.com/plugin-development/write-your-first-plugin>

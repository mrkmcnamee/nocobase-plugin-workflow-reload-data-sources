# NocoBase workflow plugin: reload data sources

1. Download the tgz file from the repo.

2. Click on the "Add & Update" button in the Plugin Manager and select the "Upload plugin" tab and upload the tgz file.

3. Enable the plugin.

## APP_CLIENT_ENTRY_MODE issue

At this time, if the [APP_CLIENT_ENTRY_MODE](https://www.nocobase.com/en/blog/2.2.0) environment variable is set, then the option to upload the plugin may or may not be available in the Plugin Manager. Here are the workarounds depending on the value of the parameter setting:

* `legacy-default`: No workaround needed.
* `modern-default`: Change the Plugin Manager URL path from the modern `https://<domainname>/v/admin/settings/plugin-manager` to legacy `https://<domainname>/admin/settings/plugin-manager` (i.e. remove `\v` from the path).
* `modern-only`: Change to `modern-default` and use that workaround.

plugin-scaffold
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/plugin-scaffold.svg)](https://npmjs.org/package/plugin-scaffold)
[![Downloads/week](https://img.shields.io/npm/dw/plugin-scaffold.svg)](https://npmjs.org/package/plugin-scaffold)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g plugin-scaffold
$ plugin-scaffold COMMAND
running command...
$ plugin-scaffold (--version)
plugin-scaffold/0.0.0 win32-x64 node-v22.18.0
$ plugin-scaffold --help [COMMAND]
USAGE
  $ plugin-scaffold COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`plugin-scaffold generate NAME`](#plugin-scaffold-generate-name)
* [`plugin-scaffold help [COMMAND]`](#plugin-scaffold-help-command)
* [`plugin-scaffold plugins`](#plugin-scaffold-plugins)
* [`plugin-scaffold plugins add PLUGIN`](#plugin-scaffold-plugins-add-plugin)
* [`plugin-scaffold plugins:inspect PLUGIN...`](#plugin-scaffold-pluginsinspect-plugin)
* [`plugin-scaffold plugins install PLUGIN`](#plugin-scaffold-plugins-install-plugin)
* [`plugin-scaffold plugins link PATH`](#plugin-scaffold-plugins-link-path)
* [`plugin-scaffold plugins remove [PLUGIN]`](#plugin-scaffold-plugins-remove-plugin)
* [`plugin-scaffold plugins reset`](#plugin-scaffold-plugins-reset)
* [`plugin-scaffold plugins uninstall [PLUGIN]`](#plugin-scaffold-plugins-uninstall-plugin)
* [`plugin-scaffold plugins unlink [PLUGIN]`](#plugin-scaffold-plugins-unlink-plugin)
* [`plugin-scaffold plugins update`](#plugin-scaffold-plugins-update)

## `plugin-scaffold generate NAME`

Scaffold a new project (shell or microfrontend)

```
USAGE
  $ plugin-scaffold generate NAME [--type shell|microfront]

ARGUMENTS
  NAME  Name of the project to generate

FLAGS
  --type=<option>  <options: shell|microfront>

DESCRIPTION
  Scaffold a new project (shell or microfrontend)

EXAMPLES
  $ plugin-scaffold generate my-new-app --type=shell
```

_See code: [src/commands/generate.ts](https://github.com/fem-workspace/plugin-scaffold/blob/v0.0.0/src/commands/generate.ts)_

## `plugin-scaffold help [COMMAND]`

Display help for plugin-scaffold.

```
USAGE
  $ plugin-scaffold help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for plugin-scaffold.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.32/src/commands/help.ts)_

## `plugin-scaffold plugins`

List installed plugins.

```
USAGE
  $ plugin-scaffold plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ plugin-scaffold plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/index.ts)_

## `plugin-scaffold plugins add PLUGIN`

Installs a plugin into plugin-scaffold.

```
USAGE
  $ plugin-scaffold plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into plugin-scaffold.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PLUGIN_SCAFFOLD_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PLUGIN_SCAFFOLD_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ plugin-scaffold plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ plugin-scaffold plugins add myplugin

  Install a plugin from a github url.

    $ plugin-scaffold plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ plugin-scaffold plugins add someuser/someplugin
```

## `plugin-scaffold plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ plugin-scaffold plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ plugin-scaffold plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/inspect.ts)_

## `plugin-scaffold plugins install PLUGIN`

Installs a plugin into plugin-scaffold.

```
USAGE
  $ plugin-scaffold plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into plugin-scaffold.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PLUGIN_SCAFFOLD_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PLUGIN_SCAFFOLD_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ plugin-scaffold plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ plugin-scaffold plugins install myplugin

  Install a plugin from a github url.

    $ plugin-scaffold plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ plugin-scaffold plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/install.ts)_

## `plugin-scaffold plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ plugin-scaffold plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ plugin-scaffold plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/link.ts)_

## `plugin-scaffold plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ plugin-scaffold plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ plugin-scaffold plugins unlink
  $ plugin-scaffold plugins remove

EXAMPLES
  $ plugin-scaffold plugins remove myplugin
```

## `plugin-scaffold plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ plugin-scaffold plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/reset.ts)_

## `plugin-scaffold plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ plugin-scaffold plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ plugin-scaffold plugins unlink
  $ plugin-scaffold plugins remove

EXAMPLES
  $ plugin-scaffold plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/uninstall.ts)_

## `plugin-scaffold plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ plugin-scaffold plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ plugin-scaffold plugins unlink
  $ plugin-scaffold plugins remove

EXAMPLES
  $ plugin-scaffold plugins unlink myplugin
```

## `plugin-scaffold plugins update`

Update installed plugins.

```
USAGE
  $ plugin-scaffold plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/update.ts)_
<!-- commandsstop -->

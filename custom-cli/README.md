custom-cli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/custom-cli.svg)](https://npmjs.org/package/custom-cli)
[![Downloads/week](https://img.shields.io/npm/dw/custom-cli.svg)](https://npmjs.org/package/custom-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g poc-cli-1
$ custom-cli COMMAND
running command...
$ custom-cli (--version)
poc-cli-1/1.0.8 win32-x64 node-v22.18.0
$ custom-cli --help [COMMAND]
USAGE
  $ custom-cli COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g poc-cli-1
$ custom-cliff COMMAND
running command...
$ custom-cliff (--version)
poc-cli-1/1.0.2 win32-x64 node-v22.18.0
$ custom-cliff --help [COMMAND]
USAGE
  $ custom-cliff COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`custom-cli bye`](#custom-cli-bye)
* [`custom-cli goodbye PERSON`](#custom-cli-goodbye-person)
* [`custom-cli hello PERSON`](#custom-cli-hello-person)
* [`custom-cli hello world [NAME]`](#custom-cli-hello-world-name)
* [`custom-cli help [COMMAND]`](#custom-cli-help-command)
* [`custom-cli plugins`](#custom-cli-plugins)
* [`custom-cli plugins add PLUGIN`](#custom-cli-plugins-add-plugin)
* [`custom-cli plugins:inspect PLUGIN...`](#custom-cli-pluginsinspect-plugin)
* [`custom-cli plugins install PLUGIN`](#custom-cli-plugins-install-plugin)
* [`custom-cli plugins link PATH`](#custom-cli-plugins-link-path)
* [`custom-cli plugins remove [PLUGIN]`](#custom-cli-plugins-remove-plugin)
* [`custom-cli plugins reset`](#custom-cli-plugins-reset)
* [`custom-cli plugins uninstall [PLUGIN]`](#custom-cli-plugins-uninstall-plugin)
* [`custom-cli plugins unlink [PLUGIN]`](#custom-cli-plugins-unlink-plugin)
* [`custom-cli plugins update`](#custom-cli-plugins-update)

## `custom-cli bye`

Says goodbye after asking a series of questions

```
USAGE
  $ custom-cli bye

DESCRIPTION
  Says goodbye after asking a series of questions
```

_See code: [src/commands/bye/index.ts](https://github.com/tomoriDev/poc-cli/https://github.com/tomoriDev/poc-cli/blob/v1.0.8/src/commands/bye/index.ts)_

## `custom-cli goodbye PERSON`

Says goodbye to someone

```
USAGE
  $ custom-cli goodbye PERSON

ARGUMENTS
  PERSON  Person to say goodbye to

DESCRIPTION
  Says goodbye to someone
```

_See code: [src/commands/goodbye/index.ts](https://github.com/tomoriDev/poc-cli/https://github.com/tomoriDev/poc-cli/blob/v1.0.8/src/commands/goodbye/index.ts)_

## `custom-cli hello PERSON`

Say hello

```
USAGE
  $ custom-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ custom-cli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/tomoriDev/poc-cli/https://github.com/tomoriDev/poc-cli/blob/v1.0.8/src/commands/hello/index.ts)_

## `custom-cli hello world [NAME]`

Say hello world

```
USAGE
  $ custom-cli hello world [NAME]

ARGUMENTS
  NAME  Name to say hello to

DESCRIPTION
  Say hello world

EXAMPLES
  $ custom-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/tomoriDev/poc-cli/https://github.com/tomoriDev/poc-cli/blob/v1.0.8/src/commands/hello/world.ts)_

## `custom-cli help [COMMAND]`

Display help for custom-cli.

```
USAGE
  $ custom-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for custom-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.32/src/commands/help.ts)_

## `custom-cli plugins`

List installed plugins.

```
USAGE
  $ custom-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ custom-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/index.ts)_

## `custom-cli plugins add PLUGIN`

Installs a plugin into custom-cli.

```
USAGE
  $ custom-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into custom-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CUSTOM_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CUSTOM_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ custom-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ custom-cli plugins add myplugin

  Install a plugin from a github url.

    $ custom-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ custom-cli plugins add someuser/someplugin
```

## `custom-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ custom-cli plugins inspect PLUGIN...

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
  $ custom-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/inspect.ts)_

## `custom-cli plugins install PLUGIN`

Installs a plugin into custom-cli.

```
USAGE
  $ custom-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into custom-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CUSTOM_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CUSTOM_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ custom-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ custom-cli plugins install myplugin

  Install a plugin from a github url.

    $ custom-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ custom-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/install.ts)_

## `custom-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ custom-cli plugins link PATH [-h] [--install] [-v]

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
  $ custom-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/link.ts)_

## `custom-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ custom-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ custom-cli plugins unlink
  $ custom-cli plugins remove

EXAMPLES
  $ custom-cli plugins remove myplugin
```

## `custom-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ custom-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/reset.ts)_

## `custom-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ custom-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ custom-cli plugins unlink
  $ custom-cli plugins remove

EXAMPLES
  $ custom-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/uninstall.ts)_

## `custom-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ custom-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ custom-cli plugins unlink
  $ custom-cli plugins remove

EXAMPLES
  $ custom-cli plugins unlink myplugin
```

## `custom-cli plugins update`

Update installed plugins.

```
USAGE
  $ custom-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/update.ts)_
<!-- commandsstop -->
* [`custom-cliff goodbye PERSON`](#custom-cliff-goodbye-person)
* [`custom-cliff hello PERSON`](#custom-cliff-hello-person)
* [`custom-cliff hello world`](#custom-cliff-hello-world)
* [`custom-cliff help [COMMAND]`](#custom-cliff-help-command)
* [`custom-cliff plugins`](#custom-cliff-plugins)
* [`custom-cliff plugins add PLUGIN`](#custom-cliff-plugins-add-plugin)
* [`custom-cliff plugins:inspect PLUGIN...`](#custom-cliff-pluginsinspect-plugin)
* [`custom-cliff plugins install PLUGIN`](#custom-cliff-plugins-install-plugin)
* [`custom-cliff plugins link PATH`](#custom-cliff-plugins-link-path)
* [`custom-cliff plugins remove [PLUGIN]`](#custom-cliff-plugins-remove-plugin)
* [`custom-cliff plugins reset`](#custom-cliff-plugins-reset)
* [`custom-cliff plugins uninstall [PLUGIN]`](#custom-cliff-plugins-uninstall-plugin)
* [`custom-cliff plugins unlink [PLUGIN]`](#custom-cliff-plugins-unlink-plugin)
* [`custom-cliff plugins update`](#custom-cliff-plugins-update)

## `custom-cliff goodbye PERSON`

Says goodbye to someone

```
USAGE
  $ custom-cliff goodbye PERSON

ARGUMENTS
  PERSON  Person to say goodbye to

DESCRIPTION
  Says goodbye to someone
```

_See code: [src/commands/goodbye/index.ts](https://github.com/tomoriDev/poc-cli/https://github.com/tomoriDev/poc-cli/blob/v1.0.2/src/commands/goodbye/index.ts)_

## `custom-cliff hello PERSON`

Say hello

```
USAGE
  $ custom-cliff hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ custom-cliff hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/tomoriDev/poc-cli/https://github.com/tomoriDev/poc-cli/blob/v1.0.2/src/commands/hello/index.ts)_

## `custom-cliff hello world`

Say hello world

```
USAGE
  $ custom-cliff hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ custom-cliff hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/tomoriDev/poc-cli/https://github.com/tomoriDev/poc-cli/blob/v1.0.2/src/commands/hello/world.ts)_

## `custom-cliff help [COMMAND]`

Display help for custom-cliff.

```
USAGE
  $ custom-cliff help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for custom-cliff.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.32/src/commands/help.ts)_

## `custom-cliff plugins`

List installed plugins.

```
USAGE
  $ custom-cliff plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ custom-cliff plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/index.ts)_

## `custom-cliff plugins add PLUGIN`

Installs a plugin into custom-cliff.

```
USAGE
  $ custom-cliff plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into custom-cliff.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CUSTOM_CLIFF_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CUSTOM_CLIFF_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ custom-cliff plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ custom-cliff plugins add myplugin

  Install a plugin from a github url.

    $ custom-cliff plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ custom-cliff plugins add someuser/someplugin
```

## `custom-cliff plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ custom-cliff plugins inspect PLUGIN...

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
  $ custom-cliff plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/inspect.ts)_

## `custom-cliff plugins install PLUGIN`

Installs a plugin into custom-cliff.

```
USAGE
  $ custom-cliff plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into custom-cliff.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CUSTOM_CLIFF_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CUSTOM_CLIFF_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ custom-cliff plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ custom-cliff plugins install myplugin

  Install a plugin from a github url.

    $ custom-cliff plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ custom-cliff plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/install.ts)_

## `custom-cliff plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ custom-cliff plugins link PATH [-h] [--install] [-v]

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
  $ custom-cliff plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/link.ts)_

## `custom-cliff plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ custom-cliff plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ custom-cliff plugins unlink
  $ custom-cliff plugins remove

EXAMPLES
  $ custom-cliff plugins remove myplugin
```

## `custom-cliff plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ custom-cliff plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/reset.ts)_

## `custom-cliff plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ custom-cliff plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ custom-cliff plugins unlink
  $ custom-cliff plugins remove

EXAMPLES
  $ custom-cliff plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/uninstall.ts)_

## `custom-cliff plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ custom-cliff plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ custom-cliff plugins unlink
  $ custom-cliff plugins remove

EXAMPLES
  $ custom-cliff plugins unlink myplugin
```

## `custom-cliff plugins update`

Update installed plugins.

```
USAGE
  $ custom-cliff plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/update.ts)_
<!-- commandsstop -->

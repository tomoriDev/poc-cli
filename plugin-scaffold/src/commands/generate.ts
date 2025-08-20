// filepath: d:\Desarrollo\fem-workspace\plugin-scaffold\src\commands\generate.ts
import {Args, Command, Flags} from '@oclif/core'
import fs from 'fs-extra'
import inquirer from 'inquirer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export default class Generate extends Command {
  static args = {
    name: Args.string({description: 'Name of the project to generate', required: true}),
  }
  static description = 'Scaffold a new project (shell or microfrontend)'
  static examples = ['<%= config.bin %> <%= command.id %> my-new-app --type=shell']
  static flags = {
    type: Flags.string({options: ['shell', 'microfront']}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Generate)

    let {type} = flags
    const {name} = args

    // 1. Preguntar si el tipo no fue especificado con una bandera
    if (!type) {
      const response = await inquirer.prompt([
        {
          choices: ['shell', 'microfront'],
          message: 'Select a project type to generate:',
          name: 'type',
          type: 'list',
        },
      ])
      type = response.type
    }

    // 2. Definir rutas
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const templateDir = path.resolve(__dirname, `../../templates/${type}`)
    const targetDir = path.join(process.cwd(), name)

    // 3. Verificar si la plantilla existe
    if (!fs.existsSync(templateDir)) {
      this.error(`Template for "${type}" not found.`, {exit: 1})
    }

    // 4. Verificar si el directorio de destino ya existe
    if (fs.existsSync(targetDir)) {
      this.error(`Directory "${name}" already exists.`, {exit: 1})
    }

    // 5. Copiar los archivos de la plantilla al destino
    try {
      await fs.copy(templateDir, targetDir)
      this.log(`Successfully created ${type} project at ${targetDir}`)
    } catch (error) {
      this.error(error as Error, {exit: 1})
    }
  }
}

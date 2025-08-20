import {Args, Command} from '@oclif/core'

export default class World extends Command {
  static args = {
    name: Args.string({description: 'Name to say hello to', required: false}),
  }
  static description = 'Say hello world'
  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ]
  static flags = {}

  async run(): Promise<void> {
    const {args} = await this.parse(World)
    const name = args.name ?? 'world'
    this.log(`hello world and hello ${name}!!!! (./src/commands/hello/world.ts)`)
  }
}

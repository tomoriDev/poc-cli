import {Args, Command} from '@oclif/core'

export default class Goodbye extends Command {
  static args = {
    person: Args.string({description: 'Person to say goodbye to', required: true}),
  }
  static description = 'Says goodbye to someone'

  public async run(): Promise<void> {
    const {args} = await this.parse(Goodbye)
    this.log(`goodbye ${args.person} from my custom-cli!`)
  }
}

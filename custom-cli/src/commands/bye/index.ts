import {Command} from '@oclif/core'
import inquirer from 'inquirer'

export default class Bye extends Command {
  static description = 'Says goodbye to a selected person using inquirer'

  public async run(): Promise<void> {
    const response = await inquirer.prompt([
      {
        choices: ['World', 'Friend', 'Everyone'],
        message: 'Who would you like to say goodbye to?',
        name: 'name',
        type: 'list',
      },
    ])

    this.log(`goodbye ${response.name}!`)
  }
}

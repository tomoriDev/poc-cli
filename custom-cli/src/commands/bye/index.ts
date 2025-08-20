import {Command} from '@oclif/core'
import inquirer from 'inquirer'

export default class Bye extends Command {
  static description = 'Says goodbye after asking a series of questions'

  public async run(): Promise<void> {
    const answers = await inquirer.prompt([
      {
        choices: ['World', 'Friend', 'Everyone'],
        message: 'Who would you like to say goodbye to?',
        name: 'target',
        type: 'list',
      },
      {
        choices: ['Formally', 'Casually', 'Loudly'],
        message: 'How should we say it?',
        name: 'manner',
        type: 'list',
      },
      {
        message: 'Are you sure you want to proceed?',
        name: 'confirm',
        type: 'confirm',
      },
    ])

    if (answers.confirm) {
      let message = ''
      switch (answers.manner) {
        case 'Casually': {
          message = `See ya, ${answers.target}!`
          break
        }

        case 'Formally': {
          message = `Goodbye, ${answers.target}. It was a pleasure.`
          break
        }

        case 'Loudly': {
          message = `GOODBYE, ${answers.target.toUpperCase()}!!!`
          break
        }
      }

      this.log(message)
    } else {
      this.log('Operation cancelled.')
    }
  }
}

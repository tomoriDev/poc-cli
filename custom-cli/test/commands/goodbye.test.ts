import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('goodbye', () => {
  it('runs goodbye cmd', async () => {
    const {stdout} = await runCommand('goodbye')
    expect(stdout).to.contain('hello world')
  })

  it('runs goodbye --name oclif', async () => {
    const {stdout} = await runCommand('goodbye --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})

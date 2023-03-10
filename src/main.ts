/* eslint-disable object-shorthand */

import * as core from '@actions/core'
import * as github from '@actions/github'
//import {DeployData} from './deployDataModel'

import {recordDeployment} from './recordDeployment'

async function run(): Promise<void> {
  try {
    const projectName: string = core.getInput('project')
    const deployEnv: string = core.getInput('deploy-env')
    const tagName: string = core.getInput('tag-name')
    const version: string = core.getInput('version')
    const branch: string = core.getInput('branch')

    const event = github.context.payload
    const commitData = event.commits[0]

    const deployData = {
      project: projectName,
      deployEnv: deployEnv,
      tagName: tagName,
      branch: branch,
      version: version,
      timestamp: new Date().toUTCString(),
      commit: {
        id: commitData.id,
        userName: commitData.author.username,
        branchURL: event.repository?.branches_url,
        commitURL: event.repository?.commits_url
      }
    }

    await recordDeployment(deployData)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
      core.error(error)
    }
  }
}

run()

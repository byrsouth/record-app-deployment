/* eslint-disable sort-imports */
/* eslint-disable filenames/match-regex */
import * as core from '@actions/core'
import {DeployData} from './deployDataModel'
import * as https from 'https'

export async function recordDeployment(deployData: DeployData): Promise<void> {
  const options = {
    protocol: 'https:',
    hostname: 'httpappdeployment.azurewebsites.net',
    path: '/api/httpappdeployment',
    method: 'POST'
  }

  const request = https.request(options, res => {
    core.info(`status-code: ${res.statusCode}`)
    res.on('data', data => {
      core.info(data)
    })
  })

  request.write(deployData)
}

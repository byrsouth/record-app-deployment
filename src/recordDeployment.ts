/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable filenames/match-regex */
import * as core from '@actions/core';
//import {DeployData} from './deployDataModel'
import * as httpm from '@actions/http-client'

export async function recordDeployment(deployData: unknown): Promise<void> {
   const _http: httpm.HttpClient = new httpm.HttpClient();
    await _http.post(
      'https://httpappdeployment.azurewebsites.net/api/httpappdeployment',
      JSON.stringify(deployData)
   );
   core.info(JSON.stringify(deployData));
}



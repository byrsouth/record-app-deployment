/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable sort-imports */
/* eslint-disable filenames/match-regex */
import * as core from '@actions/core';
import { DeployData } from './deployDataModel';
import * as httpm from '@actions/http-client';

export async function recordDeployment(deployData: DeployData): Promise<void> {
   const _http: httpm.HttpClient = new httpm.HttpClient();
    _http.post(
      'https://httpappdeployment.azurewebsites.net/api/httpappdeployment',
      JSON.stringify(deployData)
   );
 //  const message: string | undefined = res.message.statusMessage;
   //core.info(JSON.stringify(message));
}

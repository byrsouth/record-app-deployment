import * as core from '@actions/core';
import { DeployData } from './deployDataModel';

export async function recordDeployment(deployData: DeployData) {
   core.info(JSON.stringify(deployData));
}

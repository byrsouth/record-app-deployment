import * as core from '@actions/core';
import * as github from '@actions/github';
import { DeployData } from './deployDataModel';

import { recordDeployment } from './recordDeployment';

async function run(): Promise<void> {
   try {
      const projectName: string = core.getInput('project');
      const deployEvn: string = core.getInput('deploy-env');
      const tagName: string = core.getInput('tag-name');

      const event = github.context.payload;
      const commitData = event.commits[0];

      let deployData: DeployData = {
         project: projectName,
         deployEvn: deployEvn,
         tagName: tagName,
         commit: {
            id: commitData.id,
            userName: commitData.author.userName,
            branch: event.repository?.default_branch,
            branchURL: event.repository!.branches_url,
            commitURL: event.repository!.commits_url,
         },
      };

      await recordDeployment(deployData);

      core.info(JSON.stringify(deployData));
   } catch (error) {
      if (error instanceof Error) {
         core.setFailed(error.message);
         core.error(error);
      }
   }
}

run();

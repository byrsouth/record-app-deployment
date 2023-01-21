/* eslint-disable filenames/match-regex */
export interface DeployData {
  project: string
  deployEnv: string
  tagName: string
  version: string
  branch: string
  commit: {
    id: string
    userName: string
    branchURL: string
    commitURL: string
  }
}

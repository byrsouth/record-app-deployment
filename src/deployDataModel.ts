export interface DeployData {
   project: string;
   deployEnv: string;
   tagName: string;
   version :string
   commit: {
      id: string;
      userName: string;
      branch: string;
      branchURL: string;
      commitURL: string;
   };
}

export interface DeployData {
   project: string;
   deployEvn: string;
   tagName: string;
   commit: {
      id: string;
      userName: string;
      branch: string;
      branchURL: string;
      commitURL: string;
   };
}
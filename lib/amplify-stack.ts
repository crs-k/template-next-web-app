import * as cdk from "aws-cdk-lib";
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import { Construct } from "constructs";

export interface CdkInfraStack extends cdk.StackProps {
  owner: string;
  repository: string;
  role: string;
  domain: string;
}

export class AmplifyInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CdkInfraStack) {
    super(scope, id, props);

    // Amplify Application
    const amplifyApp = new amplify.App(this, "next-js-amplify", {

      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: props.owner,
        repository: props.repository,
        oauthToken: cdk.SecretValue.secretsManager("github/pat/crs-k", {
          jsonField: "githubPat",
        }),
        
      }),
      role: cdk.aws_iam.Role.fromRoleArn(this,'service-role',props.role) // necessary for explictly defining a service role that can create other resources as needed.
    });

    const main =  amplifyApp.addBranch("main", {autoBuild: true}); 

    amplifyApp.addCustomRule({
      source: '/<*>',
      target: '/index.html',
      status: amplify.RedirectStatus.NOT_FOUND_REWRITE,
    });

     const domain = amplifyApp.addDomain(props.domain, {
      enableAutoSubdomain: true, // subdomains auto registered for branches
      autoSubdomainCreationPatterns: ['*'], // regex for branches that should auto registered as subdomains
    });
    domain.mapRoot(main); // map main branch to domain root
    domain.mapSubDomain(main, 'www'); 
  } 

}
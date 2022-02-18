import * as cdk from 'aws-cdk-lib';
import {AmplifyInfraStack} from '../lib/amplify-stack';
import {Aspects} from 'aws-cdk-lib';
import {AwsSolutionsChecks} from 'cdk-nag';

const app = new cdk.App();

const infraStack = new AmplifyInfraStack(
  app,
  `next-${app.node.tryGetContext('github_repository')}`,
  {
    env: {
      account: process.env.aws_account || app.node.tryGetContext('aws_account'),
      region: process.env.aws_region || app.node.tryGetContext('aws_region')
    },
    owner: process.env.github_owner || app.node.tryGetContext('github_owner'),
    repository: process.env.github_repository || app.node.tryGetContext('github_repository'),
    role: process.env.aws_role || app.node.tryGetContext('aws_role'),
    domain: process.env.aws_domain || app.node.tryGetContext('aws_domain')
  }
);

Aspects.of(app).add(new AwsSolutionsChecks({verbose: true}));
/* NagSuppressions.addStackSuppressions(infraStack, [
  {id: 'AwsSolutions-S3', reason: 'Default encryption cannot be applied on client-side buckets'},
  {id: 'AwsSolutions-IAM4', reason: 'IAM permission risk understood.'},
  {id: 'AwsSolutions-IAM5', reason: 'IAM permission risk understood.'}
]); */

// example of adding a tag - please refer to AWS best practices for ideal usage
cdk.Tags.of(infraStack).add(
  'Project',
  `Amplify -  ${app.node.tryGetContext('github_repository')} Deployment`
);

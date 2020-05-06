import { Octokit } from '@octokit/rest';

export async function foo() {
  const comment = {
    repo: 'some repo',
    owner: 'some owner',
    issue_number: 100,
    body: `Thank you for creating this issue!`,
  };
  await createIssueComment(comment);
}

export async function createIssueComment(comment: any) {
  const auth = process.env.githubkey;
  const octokit = new Octokit({ auth });
  const response = await octokit.issues.createComment(comment);
  return response;
}

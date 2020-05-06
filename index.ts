import * as Octokit from '@octokit/rest';

export async function foo() {
  const comment: Octokit.Octokit.IssuesCreateCommentParams = {
    repo: 'some repo',
    owner: 'some owner',
    issue_number: 100,
    body: `Thank you for creating this issue!`,
  };
  await createIssueComment(comment);
}

export async function createIssueComment(comment: Octokit.Octokit.IssuesCreateCommentParams) {
  const auth = process.env.githubkey;
  const octokit = new Octokit.Octokit({ auth });
  const response = await octokit.issues.createComment(comment);
  return response;
}

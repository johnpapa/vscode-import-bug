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
  /**
   * This is odd using Octokit.Octokit.
   *
   * Step 0) npm install
   * Step 1) put your cursor on the function name.
   * Step 2) open the Quick Tips
   * Step 3) move to another file
   * Step 4) Notice the import statement does not come over.
   */
  const octokit = new Octokit.Octokit({ auth });
  const response = await octokit.issues.createComment(comment);
  return response;
}

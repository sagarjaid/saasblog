import { Octokit } from 'octokit';

export default async function handler(req, res) {
    try {
        // const { owner, repo, token } = req.body; // Assuming you pass owner, repo, and token in the request body

        const owner = "sagarjaid"

        const repo = "my-app"

        const token = "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"


        const octokit = new Octokit({
            auth: token // GitHub personal access token with repo scope
        });

        const { data: defaultBranch } = await octokit.rest.repos.get({
            owner,
            repo,
        });

        const { data: lastCommit } = await octokit.rest.repos.getCommit({
            owner,
            repo,
            ref: defaultBranch.default_branch,
        });

        const { data: newCommit } = await octokit.rest.git.createCommit({
            owner,
            repo,
            message: 'Empty commit',
            tree: lastCommit.commit.tree.sha,
            parents: [lastCommit.sha],
        });

        await octokit.rest.git.updateRef({
            owner,
            repo,
            ref: `heads/${defaultBranch.default_branch}`,
            sha: newCommit.sha,
            force: true,
        });

        res.status(200).json({ message: 'Empty commit pushed successfully!' });
    } catch (error) {
        console.error('Error occurred while pushing empty commit:', error);
        res.status(500).json({ error: 'Failed to push empty commit' });
    }
}

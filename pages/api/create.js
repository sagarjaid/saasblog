import { Octokit } from 'octokit';


export default async function handler(req, res) {


    // https://github.com/transitive-bullshit/



    const template_repo = "sagar"

    const newRepoName = "copy-my-app-2"

    const originalOwner = "sagarjaid"

    const template_owner = "sagarjaid"

    const token = "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"


    const octokit = new Octokit({
        auth: token // GitHub personal access token with repo scope
    });

    try {

        const repores = await octokit.request(`GET /repos/${template_owner}/${template_repo}`, {
            owner: template_owner,
            repo: template_repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        const x = repores.data

        console.log(x, "xxx");


        const forkResponse = await octokit.request(`POST /repos/${template_owner}/${template_repo}/generate`, {
            owner: template_owner,
            name: newRepoName,
            description: 'This is your clonoe first repository',
            include_all_branches: false,
            'private': false,
            headers: {
                'content-type': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        res
            .status(200)
            .json({ success: true, data: forkResponse.data });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ success: false, message: "Failed to create a repository copy" });
    }
}
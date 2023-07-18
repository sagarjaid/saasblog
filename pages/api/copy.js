import { Octokit } from 'octokit';


export default async function handler(req, res) {


    // https://github.com/transitive-bullshit/



    const originalRepo = "nextjs-notion-starter-kit"

    const newRepoName = "nextjs-notion-starter-kit-sagar"

    const originalOwner = "transitive-bullshit"

    const newOwner = "sagarjaid"

    // try {

    const token = "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"




    //     // Create a new repository copy
    //     const response = await octokit.repos.createUsingTemplate({
    //         template_owner: owner, // Replace with the original repository's owner
    //         template_repo: originalRepo,
    //         name: newRepoName,
    //     });

    //     res.status(200).json({ success: true, data: response.data });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ success: false, message: "Failed to create a repository copy" });
    // }

    const octokit = new Octokit({
        auth: token // GitHub personal access token with repo scope
    });

    try {

        const forkResponse = await octokit.request(`POST /repos/${originalOwner}/${originalRepo}/forks`, {
            owner: newOwner,
            repo: originalRepo,
            name: newRepoName,
            default_branch_only: true,
            headers: {
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
import axios from 'axios';
import { Octokit } from 'octokit';


export default async function handler(req, res) {

    console.log("i  API handler got called");

    const nameOfBlog = req.body

    console.log(nameOfBlog, "nameOfBlog");

    const template_repo = "blog"

    const newRepoName = nameOfBlog

    const originalOwner = "sagarjaid"

    const template_owner = "sagarjaid"

    const token = process.env.GT

    const vercelToken = process.env.VT // Get the Vercel token from an environment variable


    console.log(token, "G token");
    console.log(vercelToken, "vercelToken");


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


        //setp 1: make copy of template and initlaize user blog repo. 

        console.log(`POST /repos/${template_owner}/${template_repo}/generate`);

        const repoRes = await octokit.request(`POST /repos/${template_owner}/${template_repo}/generate`, {
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

        const repoData = repoRes.data

        console.log(`blog ${nameOfBlog} is created`);
        console.log(repoData);



        // seyp 2: create a project on vercel


        let project;
        if (repoData) {
            project = {
                name: newRepoName,
                framework: "nextjs",
                "gitRepository": {
                    "repo": newRepoName,
                    "type": "github"
                },
            }
        };


        const createProjectResponse = await axios.post(
            "https://api.vercel.com/v9/projects",
            project,
            {
                headers: {
                    Authorization: `Bearer ${vercelToken}` // Use the Vercel token variable
                }
            }
        );

        console.log(createProjectResponse, "createProjectResponse");

        const projectId = createProjectResponse.data.id;

        // setp 3: manually commit & trigger deployment

        if (projectId) {

            const { data: defaultBranch } = await octokit.rest.repos.get({
                owner: template_owner,
                repo: newRepoName,
            });

            const { data: lastCommit } = await octokit.rest.repos.getCommit({
                owner: template_owner,
                repo: newRepoName,
                ref: defaultBranch.default_branch,
            });

            const { data: newCommit } = await octokit.rest.git.createCommit({
                owner: template_owner,
                repo: newRepoName,
                message: 'New Empty commit Added',
                tree: lastCommit.commit.tree.sha,
                parents: [lastCommit.sha],
            });

            await octokit.rest.git.updateRef({
                owner: template_owner,
                repo: newRepoName,
                ref: `heads/${defaultBranch.default_branch}`,
                sha: newCommit.sha,
                force: true,
            });

            console.log('Empty commit pushed successfully!');


            // setTimeout(async () => {

            //     const result = await fetch(`https://api.vercel.com/v4/aliases?projectId=${projectId}`, {
            //         "headers": {
            //             "Authorization": `Bearer ${vercelToken}`
            //         },
            //         "method": "get"
            //     });
            //     const data = await result.json();
            //     console.log("res send to UI");
            //     res.status(200).json(data);
            // }, 5000);
        }

        res.status(200).json({ projectId: projectId });

    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ success: false, message: "Failed to create a repository copy" });
    }
}
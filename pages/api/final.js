import axios from 'axios';

export default async function createDeploy(req, res) {

    const vercelToken = process.env.YOUR_VERCEL_TOKEN || "fvD4zbpsmp2QurqraGFmbyCe"; // Get the Vercel token from an environment variable

    try {
        const result = await fetch("https://api.vercel.com/v9/projects?teamId=team_ynYEKu02y6rwnKcElVglhHvw", {
            "body": {
                "name": "newapp",
                "buildCommand": "npm run build",
                "framework": "nextjs",
                "gitRepository": {
                    "repo": "my-app",
                    "type": "github"
                },
                "installCommand": "npm install",
                "publicSource": true,
            },
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer fvD4zbpsmp2QurqraGFmbyCe"
            },
            "method": "post"
        });

        console.log(result.urlList, "result");
        const data = await result.json();
        res.status(200).json(data);
    }
    catch (error) {
        res.send(error);
        console.error(error);
    }
}


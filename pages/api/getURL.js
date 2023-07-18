import axios from 'axios';
import { Octokit } from 'octokit';


export default async function handler(req, res) {

    console.log("i  API handler got called");

    const projectId = req.body

    const token = process.env.GT

    const vercelToken = process.env.VT // Get the Vercel token from an environment variable


    console.log(token, "G token");
    console.log(vercelToken, "vercelToken");


    const octokit = new Octokit({
        auth: token // GitHub personal access token with repo scope
    });

    try {


        const result = await fetch(`https://api.vercel.com/v4/aliases?projectId=${projectId}`, {
            "headers": {
                "Authorization": `Bearer ${vercelToken}`
            },
            "method": "get"
        });
        const data = await result.json();
        console.log("res send to UI");
        res.status(200).json(data);



    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ success: false, message: "Failed to create a repository copy" });
    }
}
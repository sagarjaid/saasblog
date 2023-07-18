import axios from 'axios';

export default async function createDeploy(req, res) {
    try {
        const vercelToken = process.env.YOUR_VERCEL_TOKEN || "fvD4zbpsmp2QurqraGFmbyCe"; // Get the Vercel token from an environment variable

        // const project = {
        //     name: "my-appx", // Replace with your project name
        //     framework: "nextjs",
        //     "gitRepository": {
        //         "repo": "my-app",
        //         "type": "github"
        //     },
        // };

        // const createProjectResponse = await axios.post(
        //     "https://api.vercel.com/v9/projects",
        //     project,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${vercelToken}` // Use the Vercel token variable
        //         }
        //     }
        // );

        // console.log(createProjectResponse, "createProjectResponse");

        // const projectId = createProjectResponse.data.id;

        const projectId = 'prj_rFxtPByFY7OuQDJipYUbtxZPaAEs'





        // // Step 3: Deploy to Vercel


        // Step 4: Wait for deployment to finish

        // const getDeploymentStatus = async () => {

        //     const dep = await fetch(`https://api.vercel.com/v6/deployments?projectId=${projectId}`, {
        //         "headers": {
        //             "Authorization": `Bearer ${vercelToken}`
        //         },
        //         "method": "get"
        //     });
        //     console.log(dep, "dep");



        //     const data = await dep.json();

        //     // const deploymentId = data.deployments[0].uid


        //     res.status(200).json(data);
        // };

        // // Start checking deployment status
        // getDeploymentStatus();


        const result = await fetch(`https://api.vercel.com/v4/aliases?projectId=${projectId}`, {
            "headers": {
                "Authorization": `Bearer ${vercelToken}`
            },
            "method": "get"
        });
        const data = await result.json();
        res.status(200).json(data);


        const deploymentId = "dpl_64gmsp7mBafYqELJ4RFkd9yKenSe"

    } catch (error) {
        res.send("An error occurred.");
        console.error(error);
    }
}

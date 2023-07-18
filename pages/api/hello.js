

import axios from 'axios';

export default async function createDeploy(req, res) {
  try {
    const vercelToken = process.env.YOUR_VERCEL_TOKEN || "fvD4zbpsmp2QurqraGFmbyCe"; // Get the Vercel token from an environment variable

    const project = {
      name: "my-app", // Replace with your project name
      framework: "nextjs",
      "gitRepository": {
        "repo": "my-app",
        "type": "github"
      },
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

    const projectId = createProjectResponse.data.id;

    // Step 3: Deploy to Vercel
    const deployResponse = await axios.post(
      `https://api.vercel.com/v9/projects/${projectId}/deployments`,
      {
        target: "production"
      },
      {
        headers: {
          Authorization: `Bearer ${vercelToken}` // Use the Vercel token variable
        }
      }
    );

    const deploymentId = deployResponse.data.id;

    // Step 4: Wait for deployment to finish
    const getDeploymentStatus = async () => {
      const deploymentResponse = await axios.get(
        `https://api.vercel.com/v9/projects/${projectId}/deployments/${deploymentId}`,
        {
          headers: {
            Authorization: `Bearer ${vercelToken}` // Use the Vercel token variable
          }
        }
      );

      const status = deploymentResponse.data.status;
      if (status === "ready") {
        res.send(`Project deployed successfully. URL: ${projectId}`);
      } else if (status === "error") {
        res.send("Deployment failed.");
      } else {
        setTimeout(getDeploymentStatus, 3000); // Check deployment status again after 3 seconds
      }
    };

    // Start checking deployment status
    getDeploymentStatus();
  } catch (error) {
    res.send("An error occurred.");
    console.error(error);
  }
}



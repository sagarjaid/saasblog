// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');

export default async function handler(req, res) {

  try {
    const result = await fetch("https://api.vercel.com/v2/domains/convertlly.com/records", {
      "body": {
        "name": "subdomain",
        "type": "A",
        "value": 'blog'
      },
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer fvD4zbpsmp2QurqraGFmbyCe"
      },
      "method": "post"
    });

    const data = await result.json();
    res.status(200).json(data);
  } catch (error) {
    // Handle the error here
    console.error(error);
    // You can also send an error response to the client if needed
    res.status(500).json({ error: "Internal Server Error" });
  }

}





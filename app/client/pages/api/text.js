const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateText = async (req, res) => {
    const { userPrompt, botName, botType } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Me: ${userPrompt}.\n
        ${botName} (${botType}):`,
        max_tokens: 128,
        temperature: 0.5,
    });
    res.status(200).json({ 
        message: response.data.choices[0].text 
    })
};

export default generateText;

// const bufferToBase64 = (buffer) => {
//   let arr = new Uint8Array(buffer);
//   const base64 = btoa(
//     arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
//   )
//   return `data:image/png;base64,${base64}`;
// };

// app.post('/chat', async (req, res) => {
//     const { userPrompt, botName, botType } = req.body;
//     console.log(`received server:`, userPrompt, botName, `(${botType})`)
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: `Me: ${userPrompt}.\n
//         ${botName} (${botType}):`,
//         max_tokens: 128,
//         temperature: 0.5,
//     });
//     res.json({
        
//     })
// });

// app.post('/wish', async (req, res) => {
//     const { userPrompt, userTokens } = req.body;
//     console.log(`prompt received on server`, userPrompt)
//     console.log(`tokens received on server`, userTokens)
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: `You are Saige, an award-winning Hollywood screenwriter, expert at creating immerseive game lore and storylines, and engaging content. \n
//         Me: ${userPrompt}.`,
//         max_tokens: userTokens, // TODO: add a default = 128, if userTokens not provided
//         temperature: 0.5,
//     });
//     res.json({
//         message: response.data.choices[0].text
//     })
// });

// app.post('/dream', async (req, res) => {
//     console.log('input req', req.body);
//     const input = req.body.promptPost;

//     const response = await fetch(
//         `https://api-inference.huggingface.co/models/SOV3/gemscape-characters-anime-style`, 
//         {
//             headers: {
//                 Authorization: `Bearer ${process.env.HF_AUTH_KEY}`,
//                 'Content-Type': 'application/json',
//                 'x-use-cache': 'false'
//             },
//             method: 'POST',
//             body: JSON.stringify({
//                 inputs: input,
//             }),
//         }
//     )

//     // Check for different statuses to send proper payload
//     if (response.ok) {
//         const buffer = await response.arrayBuffer();
//         const base64 = bufferToBase64(buffer);
//         res.status(200).json({ image: base64 });
//     } else if (response.status === 503) {
//         const json = await response.json();
//         res.status(503).json(json);
//     } else {
//         res.status(response.status).json({ error: response.statusText });
//     }

// })

// app.post('/art', async (req, res) => {
//     console.log('input req', req.body);
//     const input = req.body.promptPost;

//     const response = await fetch(
//         `https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1`, 
//         {
//             headers: {
//                 Authorization: `Bearer ${process.env.HF_AUTH_KEY}`,
//                 'Content-Type': 'application/json',
//                 'x-use-cache': 'false'
//             },
//             method: 'POST',
//             body: JSON.stringify({
//                 inputs: input,
//             }),
//         }
//     )

//     // Check for different statuses to send proper payload
//     if (response.ok) {
//         const buffer = await response.arrayBuffer();
//         const base64 = bufferToBase64(buffer);
//         res.status(200).json({ image: base64 });
//     } else if (response.status === 503) {
//         const json = await response.json();
//         res.status(503).json(json);
//     } else {
//         res.status(response.status).json({ error: response.statusText });
//     }

// })

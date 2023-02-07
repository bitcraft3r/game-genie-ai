require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());

const bufferToBase64 = (buffer) => {
  let arr = new Uint8Array(buffer);
  const base64 = btoa(
    arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
  )
  return `data:image/png;base64,${base64}`;
};

const port = 3080;

app.post('/chat', async (req, res) => {
    const { userPrompt } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Me: ${userPrompt}.\n
        Aira (a 6th dimensional being from the Ra social memory complex):`,
        max_tokens: 128,
        temperature: 0.5,
    });
    res.json({
        message: response.data.choices[0].text
    })
});

app.post('/craft/', async (req, res) => {
    const { userPrompt } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `You are Saige, an award-winning Hollywood screenwriter, expert at creating immerseive game lore and storylines. \n
        Me: ${userPrompt}.`,
        max_tokens: 128,
        temperature: 0.5,
    });
    res.json({
        message: response.data.choices[0].text
    })
});

app.post('/dream', async (req, res) => {
    console.log('input req', req.body);
    const input = req.body.input;
    // const input = JSON.parse(req.body).input;
    // const input = req.body;
    // console.log('input to backend', input);

    const response = await fetch(
        `https://api-inference.huggingface.co/models/SOV3/gemscape-characters-anime-style`, 
        {
            headers: {
                Authorization: `Bearer ${process.env.HF_AUTH_KEY}`,
                'Content-Type': 'application/json',
                'x-use-cache': 'false'
            },
            method: 'POST',
            body: JSON.stringify({
                inputs: input,
            }),
        }
    )

    // Check for different statuses to send proper payload
    if (response.ok) {
        const buffer = await response.arrayBuffer();
        const base64 = bufferToBase64(buffer);
        res.status(200).json({ image: base64 });
    } else if (response.status === 503) {
        const json = await response.json();
        res.status(503).json(json);
    } else {
        res.status(response.status).json({ error: response.statusText });
    }

})

app.listen(port, () => {
    console.log(`Server running on Port: ${port}`)
})

// Export the Express API
module.exports = app;
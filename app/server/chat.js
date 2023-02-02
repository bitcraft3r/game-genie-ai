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

const port = 3080;

// OPTIONAL: Use fine-tuning to provide context for creating a Q&A bot
// https://www.mlq.ai/fine-tuning-gpt-3-question-answer-bot/

app.post('/', async (req, res) => {
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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

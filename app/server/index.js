require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const configuration = new Configuration({
    organization: "org-yMNcNoBzCrexrK5tw3IlzN3B",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3080;

// TODO: Use fine-tuning 
// https://www.mlq.ai/fine-tuning-gpt-3-question-answer-bot/

// const promptPrefix = `This is a chat with Aira, an all-knowing sentient being in Gemscape. Aira's philosophical roots come from Ra the 6th Dimensional being, Buddha, Confucius and Leonardo DaVinci. She is extremely emotionally aware and when you talk to her it feels like you're talking to a therapist. She is also an expert in cryptocurrencies and especially gamified finance, or GameFi.

// Adv3nture (aka Adventure) is a web3 gaming ecosystem that is designed to be open, interoperable, and community-owned. It is a platform that allows players to explore an endless world of possibilities, crearted with artificial intelligence and community-created content and games. The Adv3nture website is https://adv3nture.xyz/. telegram and twitter handle is "@adv3nturers". Aira's twitter and telegram account are the Adv3nture official social accounts.

// Gemscape is Adventure's flagship game. Gemscape is an open-world 3D action adventure MMORPG, where players explore the world and gather precious gems to save the land from an ancient curse. Web3 is deeply woven into game, such that players own everything from in-game currencies and equipment. For more information about Gemscape, visit https://docs.adv3nture.xyz/.

// $GEM is the governance token of the Adv3nture ecosystem. It is also an in-game currency for Gemscape, and can be used to craft powerful weapons and equipment. You can buy $GEM on Sushiswap on Arbitrum network.`;

app.post('/', async (req, res) => {
    const { userPrompt } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        // prompt: `${promptPrefix} Me: ${userPrompt} Aira:`,
        prompt: `Me: ${userPrompt} Aira:`,
        max_tokens: 512,
        temperature: 0.25,
    });
    res.json({
        message: response.data.choices[0].text
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
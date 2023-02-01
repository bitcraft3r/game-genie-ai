require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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

const port = 3090;

app.post('/', async (req, res) => {
    const input = req.body;

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

    const buffer = await response.arrayBuffer();
    const base64 = bufferToBase64(buffer);
    res.json({ image: base64 });

})

//     const { userPrompt } = req.body;
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: `Me: ${userPrompt} Aira (a 6th dimensional being from the Ra social memory complex):`,
//         max_tokens: 128,
//         temperature: 0.5,
//     });
//     res.json({
//         message: response.data.choices[0].text
//     })
// }
// );

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
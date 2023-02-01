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
                // 'x-use-cache': 'false'
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
    console.log(`Dream server listening at http://localhost:${port}`)
})

// const generateImage = async () => {
//     console.log('input req', req.body);
//     const input = JSON.parse(req.body).input;
//     // const input = req.body;
//     // console.log('input to backend', input);

//     const response = await fetch(
//         `https://api-inference.huggingface.co/models/SOV3/gemscape-characters-anime-style`, 
//         {
//             headers: {
//                 Authorization: `Bearer ${process.env.HF_AUTH_KEY}`,
//                 'Content-Type': 'application/json',
//                 // 'x-use-cache': 'false'
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
// }

// export default generateImage;
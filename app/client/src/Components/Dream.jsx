import React from 'react'
import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

const Dream = () => {

  const maxRetries = 20;

  const [input, setInput] = useState('');
  const [img, setImg] = useState(''); 
  const [isGenerating, setIsGenerating] = useState(false);
  const [finalPrompt, setFinalPrompt] = useState('');
  const [retry, setRetry] = useState(0);
  const [retryCount, setRetryCount] = useState(maxRetries);

  const [width, setWidth] = useState(window.innerWidth);

  const sleep = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const generateImage = async () => {

    // Add this check to make sure there is no double click
    if (isGenerating && retry === 0) return;

    // Set loading has started
    console.log("generating...");
    setIsGenerating(true);

    // If this is a retry request, take away retryCount
    if (retry > 0) {
      setRetryCount((prevState) => {
        if (prevState === 0) {
          return 0;
        } else {
          return prevState - 1;
        }
      });
      setRetry(0);
    }

    console.log(`input from frontend`, JSON.stringify({ input }));  // {"input":"user prompt here"}

    // fetch request
    // const response = await fetch('https://aira-chatbot-openai-react-backend.vercel.app:3080/dream', {
    const response = await fetch('https://ggai-server.web.app:3080/dream', {
    // const response = await fetch('http://localhost:3080/dream', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();
    console.log(data);

    if (response.status === 503) {
      console.log("Model is still loading...");
      setRetry(data.estimated_time);
      return;
    }

    if (!response.ok) {
      console.log(`Error: ${data.error}`);
      setIsGenerating(false);
      return;
    }

    setFinalPrompt(input);
    setInput('');

    // Set image data into state property
    setImg(data.image);
    console.log('img', img);

    setIsGenerating(false);

  }

  const handleSave = () => {
    let url = `${img}`;
    let str = `${finalPrompt}`;
    str = str.replaceAll(',', '').replace(/\s+/g, '-').toLowerCase(); // remove comma, replace space with dash, make all lowercase
    console.log(str); 
    saveAs(url, `insprAI-${str}.png`);
  }

  useEffect(() => {
    const runRetry = async () => {
      if (retryCount === 0) {
        console.log(`Model still loading after ${maxRetries} retries. Try request again in 5 minutes.`);
        setRetryCount(maxRetries);
        return;
        }

      console.log(`Trying again in ${retry} seconds.`);

      await sleep(retry * 1000);

      await generateImage();
    };

    if (retry === 0) {
      return;
    }

    runRetry();
  }, [retry]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerWidth])

  return (
    <div className="container">
      <div className="header">
        <div className="header-title">
          <h1>Dream 🧙</h1>
        </div>
        <div className="header-subtitle">
          <h2>Dream up any image and generate it from text</h2>
        </div>
      </div>
      <div>
        <div className="dream-container">
          <code>/dream </code>
          <textarea className="dream-box" value={input} placeholder="goddess adventurer, anime style, symmetrical facing front, beautiful nature landscape background" onChange={onChange} />
          <div className="dream-buttons">
            <div 
              className={
                isGenerating ? 'generate-button loading' : 'generate-button'
              }
              onClick={generateImage}
            >
              <div className="generate">
                {isGenerating ? (
                  <div className="loader-container">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <button>Generate</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        {img && (
          <div className="output-content">
            <img 
              src={img} 
              width={
                (width < 640) ? "100%" : 512
              }
              alt={input} 
            />
            <p>{finalPrompt}</p>
            <button onClick={handleSave}>Download Image</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dream
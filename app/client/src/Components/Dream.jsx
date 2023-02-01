import React from 'react'
import { useState, useEffect } from 'react';

const Dream = () => {
  // Don't retry more than 20 times
  const maxRetries = 20;

  const [input, setInput] = useState('');
  const [img, setImg] = useState(''); 
  const [retry, setRetry] = useState(0);
  const [retryCount, setRetryCount] = useState(maxRetries);
  const [isGenerating, setIsGenerating] = useState(false);
  const [finalPrompt, setFinalPrompt] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const generateAction = async () => {
    // Add this check to make sure there is no double click
    if (isGenerating && retry === 0) return;

    // Set loading has started
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

    // Add the fetch request
    const response = await fetch('http://localhost:3090', {
      method: 'POST',
      headers: {
        'Content-Type': 'image/jpeg',
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();

    // If model still loading, drop that retry time
    if (response.status === 503) {
      // Set the estimated_time property in state
      setRetry(data.estimated_time);
      return;
    };

    // If another error, drop error
    if (!response.ok) { // ok == 200
      console.log(`Error: ${data.error}`);
      // Stop loading
      setIsGenerating(false);
      return;
    };

    // Set final prompt here
    setFinalPrompt(input);
    // Remove content from input box
    setInput('');

    // Set image data into state property
    setImg(data.image);

    // Everything is all done -- stop loading!
    setIsGenerating(false);

  };
  
  const sleep = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  useEffect(() => {
    const runRetry = async () => {
      if (retryCount === 0) {
        console.log(`Model still loading after ${maxRetries} retries. Try request again in 5 minutes.`);
        setRetryCount(maxRetries);
        return;
        }

      console.log(`Trying again in ${retry} seconds.`);

      await sleep(retry * 1000);

      await generateAction();
    };

    if (retry === 0) {
      return;
    }

    runRetry();
  }, [retry]);

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
          <input className="dream-box" value={input} placeholder="goddess adventurer, anime style, symmetrical facing front, beautiful nature landscape background" onChange={onChange} />
          <div className="dream-buttons">
            <a 
              className={
                isGenerating ? 'generate-button loading' : 'generate-button'
              }
              onClick={generateAction}
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
            </a>
          </div>
        </div>
      </div>
      <div className="image-container">
        {img && (
          <div className="output-content">
            <img src={img} width={512} height={512} alt={input} />
            <p>{finalPrompt}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dream
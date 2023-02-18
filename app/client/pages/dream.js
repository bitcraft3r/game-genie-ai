import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import Button from "../components/Button";
import FormImg from "../components/FormImg";
import PNG from "../components/PNG";

const Dream = () => {

    const maxRetries = 20;

    const [input, setInput] = useState('');
    const [img, setImg] = useState(''); 
    const [isGenerating, setIsGenerating] = useState(false);
    const [finalPrompt, setFinalPrompt] = useState('');
    const [retry, setRetry] = useState(0);
    const [retryCount, setRetryCount] = useState(maxRetries);

    // const [width, setWidth] = useState(window.innerWidth);

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

        let promptPost;

        if (Math.random() < 0.5) promptPost = "beautiful female goddess adventurer, anime style, symmetrical facing front, beautiful nature landscape background";
        else promptPost = "handsome male god adventurer, anime style, symmetrical facing front, beautiful nature landscape background"

        // console.log(`input from frontend`, JSON.stringify({ promptPost }));  // {"input":"user prompt here"}

        // fetch request
        const response = await fetch('api/image', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ promptPost }),
        });

        const data = await response.json();
        // console.log(data);

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
        // console.log('img', img);

        setIsGenerating(false);

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

    // useEffect(() => {
    //     const handleResize = () => setWidth(window.innerWidth);
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //     window.removeEventListener('resize', handleResize)
    //     }
    // }, [window.innerWidth])
    
    return (
        <>
        <Navbar />
        <div className="container">
            <div className="header">
                <div className="header-title">
                <h1>Dream 🧞</h1>
                </div>
                <div className="header-subtitle">
                <h2>Generate your own anime-style pfp</h2>
                </div>
            </div>
            <div>
                <div className="dream-container">
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
                        <>
                        <Button name="Randomize" type="dice" prompt="roll" />
                        </>
                        )}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <br />
            <div className="image-container">
                {img && (
                <div className="output-content">
                    <Image 
                    src={img} 
                    // width={
                    //     (width < 640) ? "100%" : 512
                    // }
                    width="500"
                    height="500"
                    alt={input} 
                    />
                    <p>{finalPrompt}</p>
                    <PNG img={img} finalPrompt="roll" slug="dream" />
                </div>
                )}
            </div>
            <FormImg 
                suffix="adventurer, anime style, symmetrical facing front, beautiful nature landscape background"
                placeholder="beautiful female goddess, crown with gems and gold" 
                slug="dream" 
                server="image" 
            />
            </div>
        <Footer />
        </>
    );
}

export default Dream;
import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [output, setOutput] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Final Prompt:`, `promptPrefix ${input} promptSuffix`);

        setInput("");
        setIsLoading(true);

        // await
        const response = await fetch("http://localhost:3080/craft", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userPrompt: input
            })
        });

        const data = await response.json();
        
        // console.log(`returned data`, data.message);
        setOutput(data.message);

        setIsLoading(false);

    }

    return (
        <div>
            <div className="container">
                <p>{output}</p>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={input}
                        placeholder="Write your prompt..."
                        onChange={(e) => setInput(e.target.value)}
                        className="form-input"
                    ></textarea>
                    <br />
                    {isLoading ? (
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <button>Generate</button>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Form
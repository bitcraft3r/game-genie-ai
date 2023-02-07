import React from 'react'
import { useState } from 'react';

const Form = ({ prefix, placeholder }) => {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [output, setOutput] = useState("");
    const [finalPrompt, setFinalPrompt] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        let finalInput = `${prefix} ${input}`;
        console.log(`final prompt`, finalInput);

        setFinalPrompt(input)
        setInput("");
        setIsLoading(true);

        // await
        const response = await fetch("http://localhost:3080/craft", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userPrompt: finalInput
            })
        });

        const data = await response.json();
        
        // console.log(`returned data`, data.message);
        setOutput(data.message);

        setIsLoading(false);

    }

    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={input}
                        placeholder={placeholder}
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
            <div>
                <p>Input: {finalPrompt}</p>
                <p>Output: {output}</p>
            </div>
        </div>
    )
}

export default Form
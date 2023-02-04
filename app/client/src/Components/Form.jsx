import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Final Prompt:`, `promptPrefix ${input} promptSuffix`);

        setInput("");
        setIsLoading(true);

        // await


        setIsLoading(false);

    }

    return (
        <div>
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
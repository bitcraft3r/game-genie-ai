import React from 'react'
import { useState } from 'react';
import CSV from './CSV';

const Form = ({ prefix, placeholder, tokens, slug }) => {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [chatLog, setChatLog] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let finalInput = `${prefix} ${input}`;
        console.log(`prefix + userPrompt`, finalInput);
        
        setIsLoading(true);
        
        const response = await fetch("http://localhost:3080/craft", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userPrompt: finalInput,
                userTokens: tokens
            })
        });

        const data = await response.json();

        let chatLogNew = [...chatLog, {
            input: `${input}`, output: `${data.message}`
        }]
        
        setChatLog(chatLogNew);

        setInput("");
        setIsLoading(false);

    }

    return (
        <div>
            <div className="messages-container">
                <div className="messages-log">
                    <p>Chat Log</p>
                    {chatLog.map((message, index) => {
                        return (
                            <div key={index}>
                                <div className="messages-item">
                                    Me: {message.input}
                                </div>
                                <div className="messages-item">
                                    Genie: <code>{message.output}</code>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
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
            <CSV slug={slug} data={chatLog} />
        </div>
    )
}

export default Form
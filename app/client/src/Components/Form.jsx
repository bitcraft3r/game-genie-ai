import React from 'react'
import { useState } from 'react';
import CSV from './CSV';
import Button from './Button';
import userPFP from '../assets/adventurer.png'
import saigePFP from '../assets/saige.png'

const Form = ({ prefix, placeholder, tokens, slug }) => {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [chatLog, setChatLog] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let finalInput = `${prefix} ${input}`;
        console.log(`prefix + userPrompt`, finalInput);
        
        setIsLoading(true);
        
        // const response = await fetch("https://ggai-server.web.app:3080/wish", {
        const response = await fetch("http://localhost:3080/wish", {
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
                    <div className="messages-item">
                        <img src={saigePFP} />
                        Saige: <code>Your wish is my command!</code>
                    </div>
                    {chatLog.map((message, index) => {
                        return (
                            <div key={index}>
                                <div className="messages-item">
                                    <img src={userPFP} />
                                    Me: {message.input}
                                </div>
                                <div className="messages-item">
                                    <img src={saigePFP} />
                                    Saige: <code>{message.output}</code>
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
                        <Button name="Generate" type="text" />
                    )}
                </form>
            </div>
            <CSV slug={slug} data={chatLog} />
        </div>
    )
}

export default Form
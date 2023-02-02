import React from 'react';
import { useState } from 'react';

const Chat = () => {
    const [input, setInput] = useState("");
    const [chatLog, setChatLog] = useState([
        { user: "Aira", message: "Greetings! I am Aira from the 6th dimension. I am here to help you with any questions or tasks you may have. Please let me know how I can be of assistance."},
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const clearChat = () => {
        setChatLog([]);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input);
        let chatLogNew = [...chatLog, {
            user: "Me", message: `${input}`
        }]
        setInput("");
        setChatLog(chatLogNew);

        // const messages = chatLogNew.map((message) => message.message).join("\n");
        setIsLoading(true);

        const response = await fetch("https://insprai-server-production.up.railway.app:3080/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userPrompt: input
            })
        });
        const data = await response.json();
        setChatLog([...chatLogNew, 
            { user: "Aira", message: `${data.message}` }
        ])
        setIsLoading(false);
        console.log(data.message);
    }

    return (
        <div className="container">
            <div className="header">
                <div className="header-title">
                    <h1>Chat 👾</h1>
                </div>
                <div className="header-subtitle">
                    <h2>Ask Aira anything</h2>
                </div>
            </div>
            <div className="messages-container">
                <div className="messages-log">
                    {chatLog.map((message, index) => {
                        return (
                            <div key={index} className="messages-item">{message.user}: {message.message}</div>
                        )
                    })}
                </div>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        rows="1"
                        value={input}
                        placeholder="Chat with Aira..."
                        onChange={(e) => setInput(e.target.value)}
                        className="form-input"
                    ></input>
                    {isLoading ? (
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <button>Submit</button>
                    )}
                </form>
            </div>
            <div>
                <button onClick={clearChat}>Clear</button>
            </div>
        </div>
    )
};

export default Chat;
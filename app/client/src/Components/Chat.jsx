import React from 'react';
import { useState } from 'react';

const Chat = () => {
    const [input, setInput] = useState("");
    const [chatLog, setChatLog] = useState([
        { user: "User", message: "What is this website about?"},
        { user: "Aira", message: "Hi, I'm Aira, your personal AI assistant. Ask me any question to get started."},
    ]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        let chatLogNew = [...chatLog, {
            user: "User", message: `${input}`
        }]
        setInput("");
        setChatLog(chatLogNew);
    }

    return (
        <div className="chat-container">
            <div className="messages-container">
                <div className="messages-log">
                    {chatLog.map((message, index) => {
                        return (
                            <div key={index}>{message.user}: {message.message}</div>
                        )
                    })}
                </div>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        rows="1"
                        value={input}
                        placeholder="Ask a question"
                        onChange={(e) => setInput(e.target.value)}
                        className="form-input"
                    ></input>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Chat;
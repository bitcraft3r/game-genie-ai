import React from 'react';
import { useState } from 'react';

const Chat = () => {
    const [input, setInput] = useState("");
    const [chatLog, setChatLog] = useState([
        // { user: "Me", message: "What is this website about?"},
        { user: "Aira", message: "Hi, I'm Aira from Gemscape. Ask me any question to get started."},
    ]);

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

        const response = await fetch("https://aira-chatbot-backend.vercel.app/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // message: messages
                userPrompt: input
            })
        });
        const data = await response.json();
        setChatLog([...chatLogNew, 
            { user: "Aira", message: `${data.message}` }
        ])
        console.log(data.message);
    }

    return (
        <div className="chat-container">
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
                        placeholder="Ask a question"
                        onChange={(e) => setInput(e.target.value)}
                        className="form-input"
                    ></input>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                <button onClick={clearChat}>Clear</button>
            </div>
        </div>
    )
};

export default Chat;
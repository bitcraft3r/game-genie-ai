import React from 'react';
import { useState } from 'react';
import CSV from './CSV';
import userPFP from '../assets/adventurer.png'
import airaPFP from '../assets/aira.png'

const Chat = () => {
    const [settingsName, setSettingsName] = useState("Aira");
    const [settingsType, setSettingsType] = useState("a 6th dimensional being from the Ra social memory complex");

    const [input, setInput] = useState("");
    const [chatLog, setChatLog] = useState([
        { user: `${settingsName}`, message: `Greetings! I am ${settingsName}, ${settingsType}. I am here to help you with any questions or tasks you may have. Please let me know how I can be of assistance.`},
    ]);
    const [isLoading, setIsLoading] = useState(false);


    // Q: do i need useEffect?

    // useEffect(() => {

    // }, [settingsName, settingsType])

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

        // const response = await fetch("https://aira-chatbot-openai-react-backend.vercel.app:3080/chat", {
        // const response = await fetch("https://ggai-server.web.app:3080/chat", {
        const response = await fetch("http://localhost:3080/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userPrompt: input,
                botName: settingsName,
                botType: settingsType

            })
        });
        const data = await response.json();
        setChatLog([...chatLogNew, 
            { user: `${settingsName}`, message: `${data.message}` }
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
                    <h2>Ask {settingsName} anything</h2>
                </div>
            </div>
            <div className="messages-container">
                <div className="messages-log">
                    {chatLog.map((message, index) => {
                        return (
                            <div key={index} className="messages-item">
                                {message.user === "Me" ? <img src={userPFP} /> : <img src={airaPFP} /> }
                                {" "}
                                {message.user}: {message.message}
                                </div>
                        )
                    })}
                </div>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        rows="1"
                        value={input}
                        placeholder={`Chat with ${settingsName}...`}
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
                <CSV slug="chat" data={chatLog} />
                <button onClick={clearChat}>Clear</button>
            </div>
            <br />
            <div>
                <p>Settings</p>
                <p>Name: 
                    <input 
                        placeholder="Aira"
                        onChange={(e) => setSettingsName(e.target.value)}
                        value={settingsName}
                        className="form-input"
                    ></input>
                </p>
                <p>Type: 
                    <input 
                        placeholder="a 6th dimensional being from the Ra social memory complex"
                        onChange={(e) => setSettingsType(e.target.value)}
                        value={settingsType}
                        className="form-input"
                    ></input>
                </p>
            </div>
        </div>
    )
};

export default Chat;
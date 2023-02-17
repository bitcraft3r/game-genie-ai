import { useState } from 'react';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from '../components/Button';
import userPFP from '../assets/adventurer.png';
import airaPFP from '../assets/aira.png';

const Chat = () => {
    const [settingsName, setSettingsName] = useState("Aira");
    const [settingsType, setSettingsType] = useState("a 6th dimensional being from the Ra social memory complex");

    const [input, setInput] = useState("");
    const [chatLog, setChatLog] = useState([
        { user: `${settingsName}`, message: `Greetings! I am ${settingsName}, ${settingsType}. I am here to help you with any questions or tasks you may have. Please let me know how I can be of assistance.`},
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [latestInput, setLatestInput] = useState("");

    const clearChat = () => {
        setChatLog([]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input);
        setLatestInput(input);
        let chatLogNew = [...chatLog, {
            user: "Me", message: `${input}`
        }]
        setInput("");
        setChatLog(chatLogNew);
        setIsLoading(true);

        const response = await fetch('/api/text', {
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
        <>
        <Navbar />
        <div className="container">
            <div className="container">
                <div className="header">
                    <div className="header-title">
                        <h1>Chat 🧞‍♀️</h1>
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
                                    {message.user === "Me" ? <Image src={userPFP} alt="user pfp" width="50" /> : <Image src={airaPFP} alt="ai pfp" width="50" /> }
                                    {" "}
                                    {message.user}: {message.message}
                                    </div>
                            )
                        })}
                    </div>
                </div>
                <div className="container">
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
                            <Button name="Submit" type="text" prompt={input} />
                        )}
                    </form>
                </div>
                <div>
                    {/* <CSV slug="chat" data={chatLog} prompt={latestInput} /> */}
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
        </div>
        <Footer />
        </>
    );
};

export default Chat;
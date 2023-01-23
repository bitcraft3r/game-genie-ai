import React from 'react';
import { useState } from 'react';

const Input = () => {
    const [input, setInput] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }

    return (
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
    )
};

export default Input;
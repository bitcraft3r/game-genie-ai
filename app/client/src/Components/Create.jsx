import React from 'react';
import { Link } from 'react-router-dom';

const Create = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="header-title">
                <h1>Create 🪄</h1>
            </div>
            <div className="header-subtitle">
                <h2>Create content effortlessly with AI tools</h2>
            </div>
        </div>
        <div className="create-container">
            <div>
                <h3><Link to="/create/branding">Branding</Link></h3>
                <div><Link to="/create/branding/linkedin">LinkedIn Bio</Link></div>
                <div><Link to="/create/branding/twitter">Twitter Bio</Link></div>
                <div><Link to="/create/branding/marketing">Marketing Copy</Link></div>
                <div><Link to="/create/branding/elevator">Elevator Pitch</Link></div>
            </div>
            <div>
                <h3><Link to="/create/word">Word Wizard</Link></h3>
                <div><Link to="/create/word/summarize">Summarize</Link></div>
                <div><Link to="/create/word/thread">Twitter Threads</Link></div>
                <div><Link to="/create/word/blog">Blog Post</Link></div>
                <div><Link to="/create/word/email">Write Emails</Link></div>
                <div><Link to="/create/word/grammar">Grammar Check</Link></div>
            </div>
            <div>
                <h3><Link to="/create/hr">HR</Link></h3>
                <div><Link to="/create/hr/description">Job Description</Link></div>
                <div><Link to="/create/hr/interview">Interview Questions</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Create
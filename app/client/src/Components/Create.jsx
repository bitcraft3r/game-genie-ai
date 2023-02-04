import React from 'react';
import Section from './Section';

const brandArr = [
    { slug: "linkedin", title: "LinkedIn Bio" },
    { slug: "twitter", title: "Twitter Bio" },
    { slug: "marketing", title: "Marketing Copy" },
    { slug: "elevator", title: "Elevator Pitch" },
];

const copyArr = [
    { slug: "summary", title: "Summarize" },
    { slug: "blog", title: "Blog Post" },
    { slug: "thread", title: "Twitter Thread" },
    { slug: "email", title: "Write Emails" },
    { slug: "freestyle", title: "Freestyle Writer" },
];

const hrArr = [
    { slug: "description", title: "Job Description" },
    { slug: "interview", title: "Interview Questions" },
]

const gameArr = [
    { slug: "story", title: "Lore & Storylines" },
    { slug: "character", title: "Characters" },
    { slug: "quest", title: "Quests" },
    { slug: "art", title: "Art" },
]

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
            <div><Section arr={brandArr} heading="Branding" slug="brand" description="Optimize your brand image and voice" /></div>
            <div><Section arr={copyArr} heading="Copywriting" slug="copy" description="Generate professional copy to increase conversion" /></div>
            <div><Section arr={hrArr} heading="Hiring" slug="hr" description="Save 100s of hours with our HR tools" /></div>
            <div><Section arr={gameArr} heading="Gaming" slug="game" description="Create engaging and immersive game content" /></div>
        </div>
    </div>
  )
}

export default Create
import React from 'react';
import Section from './Section';

const brandArr = [
    { slug: "linkedin", title: "LinkedIn Bio", description: "Optimize your brand image and voice" },
    { slug: "twitter", title: "Twitter Bio", description: "Twitter bio description here" },
    { slug: "marketing", title: "Marketing Copy", description: "Marketing copy description here" },
    { slug: "elevator", title: "Elevator Pitch", description: "Elevator pitch description here" },
];

const copyArr = [
    { slug: "summary", title: "Summarize", description: "Generate professional copy to increase conversion" },
    { slug: "blog", title: "Blog Post", description: "Copy blog description here" },
    { slug: "thread", title: "Twitter Thread", description: "Copy thread description here" },
    { slug: "email", title: "Write Emails", description: "Copy email description here" },
    { slug: "freestyle", title: "Freestyle Writer", description: "Copy freestyle description here" },
];

const hrArr = [
    { slug: "description", title: "Job Description", description: "Save 100s of hours with our HR tools" },
    { slug: "interview", title: "Interview Questions", description: "Interview description here" },
]

const gameArr = [
    { slug: "story", title: "Lore & Storylines", description: "Create engaging and immersive game content" },
    { slug: "character", title: "Characters", description: "Game character description here" },
    { slug: "quest", title: "Quests", description: "Game quest description here" },
    { slug: "art", title: "Art", description: "Game art description here" },
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
            <div><Section arr={brandArr} heading="Branding" slug="brand" /></div>
            <div><Section arr={copyArr} heading="Copywriting" slug="copy" /></div>
            <div><Section arr={hrArr} heading="Hiring" slug="hr" /></div>
            <div><Section arr={gameArr} heading="Gaming" slug="game" /></div>
        </div>
    </div>
  )
}

export default Create
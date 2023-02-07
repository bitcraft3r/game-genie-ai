import React from 'react';
import Section from './Section';

const conceptArr = [
    { slug: "idea", title: "Game Idea", description: "Generate a name and description for your next game" },
    { slug: "campaign", title: "Campaigns & Quests", description: "Create quests, puzzels and other campaigns" },
]

const storyArr = [
    { slug: "lore", title: "Lore", description: "Create an immersive lore for your game" },
    { slug: "storyline", title: "Storyline", description: "Create monologue/dialogues and other engaging stories" },
    { slug: "character", title: "Characters", description: "Create characters for your game, from origin story to strengths" },
]

const artArr = [
    { slug: "character", title: "Characters", description: "Generate art for your game characters" },
    { slug: "equipment", title: "Equipment", description: "Generate art for your game equipment" },
    { slug: "environment", title: "Environment", description: "Generate art for your game world and environment" },
]

const contentArr = [
    { slug: "instagram", title: "Instagram Post", description: "Generate an engaging instagram post" },
    { slug: "twitter", title: "Twitter Post", description: "Generate an engaging twitter post" },
    { slug: "thread", title: "Twitter Thread", description: "Generate an engaging twitter thread" },
]

const Craft = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="header-title">
                <h1>Craft 🪄</h1>
            </div>
            <div className="header-subtitle">
                <h2>Create imaginative worlds, immersive stories, and viral content</h2>
            </div>
        </div>
        <div className="create-container">
            <div><Section arr={conceptArr} heading="Concept" slug="concept" /></div>
            <div><Section arr={storyArr} heading="Story" slug="story" /></div>
            <div><Section arr={artArr} heading="Art" slug="art" /></div>
            <div><Section arr={contentArr} heading="Content" slug="content" /></div>
        </div>
    </div>
  )
}

export default Craft
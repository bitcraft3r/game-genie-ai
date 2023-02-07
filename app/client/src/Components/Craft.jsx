import React from 'react';
import Section from './Section';

const conceptArr = [
    { slug: "idea", title: "Game Idea", description: "Generate a name and description for your next game", prefix: "Generate a name and description of a game that includes the following:" },
    { slug: "name", title: "Name Generator", description: "Generate name ideas for your next game", prefix: "Suggest 10 cool names for a game/startup about:" },
    { slug: "campaign", title: "Campaigns & Quests", description: "Create quests, puzzels and other campaigns", prefix: "Suggest idea for an online quest and game that is engaging and includes:" },
]

const storyArr = [
    { slug: "lore", title: "Lore", description: "Create an immersive lore for your game", prefix: "Create an immersive lore and origin story for my game:" },
    { slug: "storyline", title: "Storyline", description: "Create monologue/dialogues and other engaging stories", prefix: "Create a storyline for my game:" },
    { slug: "character", title: "Characters", description: "Create characters for your game, from origin story to strengths", prefix: "Create a character for my game, include it's name, strengths and weaknesses, and a short origin story:" },
]

const artArr = [
    { slug: "character", title: "Characters", description: "Generate art for your game characters", prefix: "game character art" },
    { slug: "equipment", title: "Equipment", description: "Generate art for your game equipment", prefix: "game equipment art" },
    { slug: "environment", title: "Environment", description: "Generate art for your game world and environment", prefix: "game world environment art" },
]

const contentArr = [
    { slug: "instagram", title: "Instagram Post", description: "Generate an engaging instagram post", prefix: "Create text for an instagram post about:" },
    { slug: "twitter", title: "Twitter Post", description: "Generate an engaging twitter post", prefix: "Create text for a twitter post about:" },
    { slug: "thread", title: "Twitter Thread", description: "Create a twitter thread that is engaging, informational and engaging about:" },
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
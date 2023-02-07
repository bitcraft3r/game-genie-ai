import React from 'react';
import Section from './Section';

const conceptArr = [
    { type: "text", tokens: 128, slug: "idea", title: "Game Idea", description: "Generate a name and description for your next game", placeholder: "Describe your game. E.g. mmorpg, like world of warcraft, web3 and blockchain, free-to-play", prefix: "Generate a name and description of a game that includes the following:" },
    { type: "text", tokens: 64, slug: "name", title: "Name Generator", description: "Generate name ideas for your next game", placeholder: "Describe your game. E.g. real-time strategy game and resource planning, like starcraft, web3 and blockchain, play-to-earn", prefix: "Suggest 10 cool names for a game/startup about:" },
    { type: "text", tokens: 128, slug: "campaign", title: "Campaigns & Quests", description: "Create quests, puzzles and other campaigns", placeholder: "Describe your quest or campaign. E.g. online treasure hunt, partnership between Treasure DAO and Adv3nture, 100K GEM prize, high user engagement", prefix: "Suggest idea for an online quest and game that is engaging and includes:" },
]

const storyArr = [
    { type: "text", tokens: 512, slug: "lore", title: "Lore", description: "Create an immersive lore for your game", placeholder: "Describe your game. E.g. MMORPG named Gemscape, where players collaborate in an open world, interoperable and community-owned.", prefix: "Create an immersive lore and origin story for my game:" },
    { type: "text", tokens: 256, slug: "storyline", title: "Storyline", description: "Create monologue/dialogues and other engaging stories", placeholder: "Describe your game and context of the story. E.g. Gemscape MMORPG, opening monologue when player first enters the game, encouraging player to start an adventure.", prefix: "Create a storyline for my game:" },
    { type: "text", tokens: 256, slug: "character", title: "Characters", description: "Create characters for your game, from origin story to strengths", placeholder: "Describe your game character. E.g. Princess sorceress, earth element, loves decentralization and her pet donkey", prefix: "Create a character for my game, provide a name, 3 strengths and 3 weaknesses in point form, and a short origin story:" },
]

const artArr = [
    { type: "art", tokens: 128, slug: "character", title: "Characters", description: "Generate art for your game characters", placeholder: "goddess adventurer, anime style, symmetrical front facing, beautiful nature landscape background, concept art, digital painting", prefix: "game character art" },
    { type: "art", tokens: 128, slug: "equipment", title: "Equipment", description: "Generate art for your game equipment", placeholder: "dragonskin wand of akashic flames, unreal engine, blender 3d model, ultra realistic, intricate", prefix: "game equipment art" },
    { type: "art", tokens: 128, slug: "environment", title: "Environment", description: "Generate art for your game world and environment", placeholder: "village, fantasy game world environment, 3d render, unreal engine, ultra realistic", prefix: "game world environment art" },
]

const contentArr = [
    { type: "text", tokens: 64, slug: "instagram", title: "Instagram Post", description: "Generate an engaging instagram post", placeholder: "Describe the post. E.g. check out my latest #AiArt created with @GameGenieAi for my pixel art game", prefix: "Create text for an instagram post about:" },
    { type: "text", tokens: 64, slug: "twitter", title: "Twitter Post", description: "Generate an engaging twitter post", placeholder: "Describe the post. E.g. Created stories and art for my web3 game on @GameGenieAi", prefix: "Create text for an engaging twitter post about:" },
    { type: "text", tokens: 256, slug: "thread", title: "Twitter Thread", description: "Generate an engaging twitter thread", placeholder: "Describe the twitter thread. E.g. Why game developers should use AI tools to tell better stories", prefix: "Create a twitter thread that is engaging, informational and educational. Describe each point in detail, and add a concrete example, numbers or statistics. Don't be repetitive. It is about:" },
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
import React from 'react';
import Section from './Section';
import { conceptArr, storyArr, artArr, contentArr } from '../constants';

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
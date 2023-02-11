import React, { useContext } from 'react';
import Section from './Section';
import { AppContext } from '../context';

const Wish = () => {

    // get global state props
    const contextProps = useContext(AppContext);
    const itemsArr = contextProps[0];

    // split into multiple separate arrays based on the section type
    // new arrays to be passed into Section component as props
    const conceptArr = itemsArr.filter((e, i) => {
        return e.data.section === "concept";
    })
    const storyArr = itemsArr.filter((e, i) => {
        return e.data.section === "story";
    })
    const artArr = itemsArr.filter((e, i) => {
        return e.data.section === "art";
    })
    const contentArr = itemsArr.filter((e, i) => {
        return e.data.section === "content";
    })

  return (
    <div className="container">
        <div className="header">
            <div className="header-title">
                <h1>Wish 🧞‍♂️</h1>
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

export default Wish
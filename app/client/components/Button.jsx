import React from 'react';
import { db } from '../firebase/clientApp';
import { doc, updateDoc, increment } from 'firebase/firestore';
import Action from './Action';

const Button = ({ name, type, prompt }) => {

    const statsRef = doc(db, "statistics", "downloads");

    // check for data's `type`, then increment relevant counter
    const updateCount = async () => {
        if (type === "text") {
            await updateDoc(statsRef, {
                countChat: increment(1)
            });            
        } else if (type === "image") {
            await updateDoc(statsRef, {
                countDream: increment(1)
            });
        } else if (type === "dice") {
            await updateDoc(statsRef, {
                countDice: increment(1)
            });
        } else if (type === "tweet") {
            await updateDoc(statsRef, {
                countTweet: increment(1)
            });
        } else console.log("item type does not match")
    };

    // Call `addAction` function in Child <Action /> component
    const handleChildSubmit = async () => {
        console.log(`calling handleChildSubmit`)
    }

    let currentAction;
    let currentType;

    // conditional for setting props to be passed down to <Action /> for tracking
    if (type === "text") {
        currentAction = "generate";
        currentType = "text";
    } else if (type === "image" || type === "dice") {
        currentAction = "generate";
        currentType = "image";
    } else if (type === "tweet") {
        currentAction = "share";
        currentType = "tweet";
    }


    return (
        <div onClick={() => {
            updateCount();
            handleChildSubmit();
        }}>
            <Action type={currentType} action={currentAction} prompt={prompt} handleParentSubmit={handleChildSubmit} buttonName={name} />
        </div>
    )
};

export default Button;
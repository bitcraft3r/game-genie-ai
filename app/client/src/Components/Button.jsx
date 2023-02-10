import React from 'react';
import { db } from '../firebase';
import { doc, updateDoc, increment } from 'firebase/firestore';
import Action from './Action';

const Button = ({ name, type, prompt }) => {

    const statsRef = doc(db, "statistics", "downloads");

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
        } else console.log("item type does not match")

        // send payload to <Action />, then
        // call addAction child function

    };

    let currentType;
    if (type === "text") currentType = "text";
    else if (type === "image" || type === "dice") currentType = "image";

    let currentAction = "generate";

    return (
        <button onClick={updateCount}>
            <Action type={currentType} action={currentAction} prompt={prompt} />
            {name}
        </button>
    )
};

export default Button;
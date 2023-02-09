import React from 'react';
import { db } from '../firebase';
import { doc, updateDoc, increment } from 'firebase/firestore';

const Button = ({ name, type }) => {

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
        } else console.log("item type does not match")
    };

    return (
        <button onClick={updateCount}>
            {name}
        </button>
    )
};

export default Button;
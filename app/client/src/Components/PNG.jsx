import React from 'react';
import { saveAs } from 'file-saver';
import { db } from '../firebase';
import { doc, updateDoc, increment } from 'firebase/firestore';
import Action from './Action';

const PNG = (props) => {

    const statsRef = doc(db, "statistics", "downloads");

    // Atomically increment the count of CSV downloads.
    const updateCountPNG = async () => {
        await updateDoc(statsRef, {
            countPNG: increment(1)
        });
    };

    const handleSave = () => {
        let url = `${props.img}`;
        let str = `${props.finalPrompt}`;
        str = str.replaceAll(',', '').replace(/\s+/g, '-').toLowerCase(); // remove comma, replace space with dash, make all lowercase
        console.log(str); 
        saveAs(url, `GGAI-${props.slug}-${str}.png`);

        updateCountPNG();
    }

    const handleChildSubmit = async () => {
        console.log(`calling handleChildSubmit`)
    }

    return (
        <div onClick={handleSave}>
            <Action type="image" action="download" prompt={props.finalPrompt} handleParentSubmit={handleChildSubmit} buttonName="Download Image" />
        </div>
    )
}

export default PNG
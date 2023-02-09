import React from 'react';
import { saveAs } from 'file-saver';
import { db } from '../firebase';
import { doc, updateDoc, increment } from 'firebase/firestore';

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

    return (
        <div>
            <button onClick={handleSave}>Download Image</button>
        </div>
    )
}

export default PNG
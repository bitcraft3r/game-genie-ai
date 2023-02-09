import React from 'react';
import { saveAs } from 'file-saver';

const PNG = (props) => {

    const handleSave = () => {
        let url = `${props.img}`;
        let str = `${props.finalPrompt}`;
        str = str.replaceAll(',', '').replace(/\s+/g, '-').toLowerCase(); // remove comma, replace space with dash, make all lowercase
        console.log(str); 
        saveAs(url, `GGAI-${str}.png`);
      }

    return (
        <div>
            <button onClick={handleSave}>Download Image</button>
        </div>
    )
}

export default PNG
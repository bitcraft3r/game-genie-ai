import React from 'react'
import { CSVLink } from "react-csv";
import { db } from '../firebase';
import { doc, updateDoc, increment } from 'firebase/firestore';
import Action from './Action';

const CSV = ({ slug, data, prompt }) => {

    // Get date in YYYY-MM-DD format
    // https://stackoverflow.com/a/29774197
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString().split('T')[0];
    const statsRef = doc(db, "statistics", "downloads");

    // Atomically increment the count of CSV downloads.
    const updateCountCSV = async () => {
        await updateDoc(statsRef, {
            countCSV: increment(1)
        });
    };

    const handleChildSubmit = async () => {
        console.log(`calling handleChildSubmit`)
    }

    return (
        <CSVLink 
                data={data}
                filename={`GGAI-${slug}-${formattedDate}.csv`}
                target="_blank"
            >
            <div onClick={updateCountCSV}>
                <Action type="text" action="download" prompt={prompt} handleParentSubmit={handleChildSubmit} buttonName="Download CSV" />
            </div>
        </CSVLink>
    )
}

export default CSV
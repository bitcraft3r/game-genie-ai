import React from 'react'
import { CSVLink } from "react-csv";
import { db } from '../firebase';
import { doc, updateDoc, increment } from 'firebase/firestore';

const CSV = ({ slug, data }) => {

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

    return (
        <CSVLink 
                data={data}
                filename={`GGAI-${slug}-${formattedDate}.csv`}
                target="_blank"
            >
            {/* <button onClick={() => setCounterCSV(counterCSV+1)}> */}
            <button onClick={updateCountCSV}>
                Download CSV
            </button>
        </CSVLink>
    )
}

export default CSV
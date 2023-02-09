import React, { useContext } from 'react'
import { CSVLink } from "react-csv";
import { AppContext } from '../context';

const CSV = ({ slug, data }) => {

    const [counterCSV, setCounterCSV] = useContext(AppContext);

    // Get date in YYYY-MM-DD format
    // https://stackoverflow.com/a/29774197
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString().split('T')[0];

    return (
        <button onClick={() => setCounterCSV(counterCSV+1)}>
            <CSVLink 
                data={data}
                filename={`GGAI-${slug}-${formattedDate}.csv`}
                target="_blank"
            >
                Download CSV
            </CSVLink>
        </button>
    )
}

export default CSV
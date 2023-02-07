import React from 'react'
import { CSVLink } from "react-csv";

const CSV = ({ slug, data }) => {

    // Get date in YYYY-MM-DD format
    // https://stackoverflow.com/a/29774197
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString().split('T')[0];

    return (
        <button>
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
import React, { useContext } from 'react'
import { AppContext } from '../context';

const Footer = () => {

    const [counterCSV] = useContext(AppContext);

    return (
        <div className="footer">
            CSV Downloaded: {counterCSV}
        </div>
    )
}

export default Footer
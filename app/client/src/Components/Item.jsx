import React from 'react'
import { useLocation } from 'react-router';

const Item = (props) => {
    const location = useLocation();
    const propsData = location.state;
    console.log(propsData);

    return (
        <div className="container">
            <h1>{propsData.heading}</h1>
            <h2>{propsData.description}</h2>
            <div className="container">
                /create/{propsData.slugA}/{propsData.slugB}
            </div>
        </div>
    )
}

export default Item
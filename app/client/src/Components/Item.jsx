import React from 'react'
import { useLocation } from 'react-router';
import Form from './Form';

const Item = (props) => {
    const location = useLocation();
    const propsData = location.state;
    console.log(propsData);

    return (
        <div className="container">
            <h1>{propsData.heading}</h1>
            <h2>{propsData.description}</h2>
            <div className="container">
                /craft/{propsData.slugA}/{propsData.slugB}
                <Form />
            </div>
        </div>
    )
}

export default Item
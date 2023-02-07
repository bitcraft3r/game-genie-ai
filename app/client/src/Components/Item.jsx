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
                <p>promptPrefix: <code>{propsData.prefix}</code></p>
                {propsData.type === "text" ? <Form prefix={propsData.prefix} placeholder={propsData.placeholder} tokens={propsData.tokens} /> : <p>Coming Soon...</p> }
            </div>
        </div>
    )
}

export default Item
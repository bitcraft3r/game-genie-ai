import React from 'react'
import { useLocation } from 'react-router';
import Form from './Form';

const Item = () => {
    const location = useLocation();
    const propsData = location.state;
    console.log(`propsData in Items.jsx`, propsData);
    console.log(`promptPrefix in Items.jsx`, propsData.prefix);

    // console.log(`props in Items.jsx`, props);

    return (
        <div className="container">
            <h1>{propsData.heading}</h1>
            <h2>{propsData.description}</h2>
            <div className="container">
                {propsData.type === "text" ? <Form prefix={propsData.prefix} placeholder={propsData.placeholder} tokens={propsData.tokens} slug={propsData.slug} /> : <p>Coming Soon...</p> }
            </div>
        </div>
    )
}

export default Item
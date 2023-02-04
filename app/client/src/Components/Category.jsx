import React, { useEffect } from 'react'
import { Link, useParams, useLocation } from "react-router-dom";

const Category = (props) => {

    const location = useLocation();
    const propsData = location.state;

    let { id } = useParams();

    const items = propsData.arr.map((e, i) => {
        return (
            <div key={`${e.category}-${i}-${e.slug}`}>
                <Link to={`/create/${id}/${e.slug}`}>{e.title}</Link>
            </div>
        )
    })

    return (
        <div className="container">
            <h1>{propsData.heading}</h1>
            <h2>{propsData.description}</h2>
            <div>
                {items}
            </div>
        </div>
    )
}

export default Category
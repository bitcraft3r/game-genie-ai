import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ arr, heading, slug }) => {

    const items = arr.map((e, i) => {
        return (
            <div key={`${e.category}-${i}-${e.slug}`}>
                <Link to={`/create/${slug}/${e.slug}`}>{e.title}</Link>
            </div>
        )
    })

  return (
    <div>
        <h3><Link to={`/create/${slug}`}>{heading}</Link></h3>
        {items}
    </div>
  )
}

export default Category
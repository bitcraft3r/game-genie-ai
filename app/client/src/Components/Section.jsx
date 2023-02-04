import React from 'react';
import { Link } from 'react-router-dom';


const Section = ({ arr, heading, slug, description }) => {
    
    // https://www.positronx.io/react-router-dom-send-or-get-props-state-with-link-tutorial/
    
    const categoryData = {
        heading: heading,
        slug: slug,
        arr: arr,
        description: description
    }

    const items = arr.map((e, i) => {
        return (
            <div key={`${e.category}-${i}-${e.slug}`}>
                <Link to={`/create/${slug}/${e.slug}`}>{e.title}</Link>
            </div>
        )
    })

  return (
    <div>
        <h3><Link to={`/create/${slug}`} state={categoryData}>{heading}</Link></h3>
        {items}
    </div>
  )
}

export default Section
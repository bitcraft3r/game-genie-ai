import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ arr, heading, slug }) => {
        
    const items = arr.map((e, i) => {
        return (
            <div key={`${e.category}-${i}-${e.slug}`}>
                <Link 
                    to={`/craft/${slug}/${e.slug}`} 
                >
                    {e.title}
                </Link>
            </div>
        )
    })

  return (
    <div>
        <h3>{heading}</h3>
        {items}
    </div>
  )
}

export default Section
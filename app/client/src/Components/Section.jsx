import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ arr, heading }) => {
        
    const items = arr.map((e, i) => {
        return (
            <div key={`${e.data.section}-${i}-${e.data.slug}`}>
                <Link 
                    to={`/craft/${e.data.section}/${e.data.slug}`} 
                >
                    {e.data.title}
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
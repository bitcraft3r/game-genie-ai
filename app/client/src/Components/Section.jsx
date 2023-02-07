import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ arr, heading, slug }) => {
        
        const items = arr.map((e, i) => {
            
            // https://www.positronx.io/react-router-dom-send-or-get-props-state-with-link-tutorial/
            const itemData = {
            heading: e.title,
            description: e.description,
            prefix: e.prefix,
            type: e.type,
        }

        return (
            <div key={`${e.category}-${i}-${e.slug}`}>
                <Link 
                    to={`/craft/${slug}/${e.slug}`} 
                    state={itemData}
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
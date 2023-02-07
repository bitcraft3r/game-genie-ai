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
            placeholder: e.placeholder,
            tokens: e.tokens,
            slug: e.slug,
        }

        return (
            <div key={`${e.category}-${i}-${e.slug}`}>
                {/* PROBLEM: Item component is not getting the propsData from Section component if item page loaded directly. */}
                {/* Render <Item /> Component directly */}
                {/* or useEffect on Item.jsx to pull props? */}
                {/* or data must go directly to Item.jsx? */}
                {/* or useContext to add itemData to a global state */}
                {/* https://blog.devgenius.io/beginners-guide-to-reacts-context-api-d2fafc89404f */}
                {/* useContext - context.js to get data ; or populate in the Header */}
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
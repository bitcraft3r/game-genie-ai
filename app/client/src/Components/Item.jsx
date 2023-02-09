import React, { useContext } from 'react'
import { useLocation } from 'react-router';
import Form from './Form';
import { AppContext } from '../context';

/**
 * Problem:
 * - Item.jsx gets props passed from Section.jsx.
 * - Without the props, Item.jsx does not render properly.
 *      - If enter URL directly to individual item page, it will have an error, because the page did not receive props.
 * 
 * Solution:
 * 
 * Get relevant individual item data, for the item that matches the url path.
 * - useLocation().pathname => gets current url path.
 * - Array of all individual items available in global state (useContext).
 * - Each item object contains `section` and `slug` to compare with the url path.
 * - Find the one item /section/slug that matches url path, and return that item data.
 * 
 * With this, individual item pages will render without error no matter if I navigate to it by:
 * a) Going from /craft/ and clicking on each individual item, or
 * b) Going to /craft/section/slug by entering the url directly.
 * 
 * */ 


const Item = () => {
    const location = useLocation();
    // get current pathname e.g. /craft/concept/idea
    const locationPathname = location.pathname;
    
    // get all individual items from global context
    const contextProps = useContext(AppContext);
    
    const comparePaths = (e) => {
        // match pathnames from useContext vs useLocation
        let contextPathname = `/craft/${e.data.section}/${e.data.slug}`;
        return contextPathname === locationPathname;
    }

    // get the itemData for when pathnames match
    const currentItem = contextProps[2].find(comparePaths);
    const itemData = currentItem.data;

    return (
        <div className="container">
            <h1>{itemData.title}</h1>
            <h2>{itemData.description}</h2>
            <div className="container">
                {itemData.type === "text" ? <Form prefix={itemData.prefix} placeholder={itemData.placeholder} tokens={itemData.tokens} slug={itemData.slug} /> : <p>Coming Soon...</p> }
            </div>
        </div>
    )
}

export default Item
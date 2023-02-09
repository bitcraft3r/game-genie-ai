import React, { createContext } from 'react';
import { itemsArr } from './constants';

export const AppContext = createContext();

const AppProvider = (props) => {

    const items = itemsArr.map((e, i) => {
        const data = {
            section: e.section,
            slug: e.slug,
            title: e.title,
            description: e.description,
            prefix: e.prefix,
            suffix: e.suffix,
            type: e.type,
            placeholder: e.placeholder,
            tokens: e.tokens,
        }
        return (
                {data}
        )
    })

    return (
        // What is passed into value will be availalbe throughout app
        <AppContext.Provider value={ [ items ] }>
            {props.children}
        </AppContext.Provider>
    )
};

export default AppProvider;
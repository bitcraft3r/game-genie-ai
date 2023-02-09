import React, { createContext, useState } from 'react';
import { itemsArr } from './constants';

export const AppContext = createContext();

const AppProvider = (props) => {

    const [counterCSV, setCounterCSV] = useState(0);
    const [counterPNG, setCounterPNG] = useState(0);

    const items = itemsArr.map((e, i) => {
        const data = {
            section: e.section,
            slug: e.slug,
            title: e.title,
            description: e.description,
            prefix: e.prefix,
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
        <AppContext.Provider value={ [counterCSV, setCounterCSV, items, counterPNG, setCounterPNG ] }>
            {props.children}
        </AppContext.Provider>
    )
};

export default AppProvider;
 import React from 'react';


const FilterStockContext = React.createContext({
    filterText: '',
    inStockOnly: false,
});

function FilterStockProvider({children}) {
    const [filterText, setFilterText] = React.useState('');
    const [inStockOnly, setInStockOnly] = React.useState(false);

    const handleFilterTextChange = filterTextPassed => {
        setFilterText(filterTextPassed);
    }
    const handleInStockChange = inStockOnlyPassed => {
        setInStockOnly(inStockOnlyPassed);
    }

    const context = {
        filterText,
        handleFilterTextChange,
        inStockOnly,
        handleInStockChange
    }

    return <FilterStockContext.Provider value={context}>{children}</FilterStockContext.Provider>;
}

export {FilterStockContext, FilterStockProvider};
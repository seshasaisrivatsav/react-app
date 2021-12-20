import React from 'react';
import FilterableProductTable from "./FilterableProductTable";
import {FilterStockProvider} from "./FilterInStockContext";

const Think = () => {
    const apiData = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},

        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    ];

    apiData.sort((obj1, obj2) => {
        if (obj1.category > obj2.category) {
            return -1;
        } else {
            return 1;
        }
        return 0;
    })

    return (
        <FilterStockProvider>
            <FilterableProductTable products={apiData} />
        </FilterStockProvider>
    );
};

export default Think;
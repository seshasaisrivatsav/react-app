import React from 'react';
import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';
import { FilterStockContext } from "./FilterInStockContext";

export default ({ products }) => {
    const filterStockContext = React.useContext(FilterStockContext);

    const rows = [];
    let lastCategory = null;
    products.forEach((product, index) => {
        // remove if we don't find search result
        if (product.name.indexOf(filterStockContext.filterText) === -1) {
            return;
        }
        // if `inStockOnly` filter is selected and product not in stock
        if (filterStockContext.inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(<ProductCategory key={`${index}-category`} category={product.category} />);
        }
        rows.push(<ProductRow key={`${index}-product`} product={product}/>);
        lastCategory = product.category;
    });

    return (
      <div>
          <table>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
          </table>
      </div>
    );
}
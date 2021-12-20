import React from 'react';
import { FilterStockContext } from "./FilterInStockContext";

const SearchBar = (props) => {
    const filterStockContext = React.useContext(FilterStockContext);
    return (
      <div>
          <form>
              <input type='text' placeholder='search' value={filterStockContext.filterText} onChange={(e) => {filterStockContext.handleFilterTextChange(e.target.value)}} />
              <p>
                  <input type='checkbox' checked={props.inStockOnly} onChange={ e => filterStockContext.handleInStockChange(e.target.value) } />
                  { ' ' }
                  Only show products in stock
              </p>
          </form>
      </div>
    );
};

export default SearchBar;
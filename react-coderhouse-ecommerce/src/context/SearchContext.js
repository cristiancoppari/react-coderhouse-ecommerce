import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchedProducts, setSearchedProducts] = useState([]);

  const searchProductsHandler = (searchValue) => {
    setSearchedProducts(() => searchValue.toLowerCase());
  }

  return (
    <SearchContext.Provider value={{ searchProductsHandler, searchedProducts }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
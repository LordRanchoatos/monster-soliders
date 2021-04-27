import React from 'react';
import './SearchField.styles.css'

const SearchField = ({handleSearch, placeholder}) => {
    return(
        <input 
            type='search'
            className='search' 
            placeholder={placeholder} 
            onChange={handleSearch}
        />
    )
}

export default SearchField;
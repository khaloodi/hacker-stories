import React from 'react'

const Search = (props) => {

  return (
    <>
      <label htmlFor='search'>Search: </label>
      <input 
        id='search' 
        type='text' 
        value={props.searchTerm} // when search term is changed, this forces the input field to use the value from React's state via props
        onChange={props.onSearch}/>

      <p>
            Searching for: <strong>{props.searchTerm}</strong>
      </p>
    </>
  )
}

export default Search
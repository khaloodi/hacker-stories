import React from 'react'

const Search = (props) => {

  return (
    <>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={props.onSearch}/>

      <p>
            Searching for: <strong>{props.searchTerm}</strong>
      </p>
    </>
  )
}

export default Search
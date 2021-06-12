import React from 'react'

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange}/>

      <p>
            Seaching for: <strong>{searchTerm}</strong>
      </p>
    </>
  )
}

export default Search
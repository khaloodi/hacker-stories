import React from 'react'
import List from './List'

const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ]

  const [searchTerm, setSearchTerm] = React.useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="App">
      <h1>Hacker Stories</h1>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange}/>

      <hr />

      <p>
        Seaching for: <strong>{searchTerm}</strong>
      </p>

      <List list = {stories}/>
    </div>
  );
}

export default App;

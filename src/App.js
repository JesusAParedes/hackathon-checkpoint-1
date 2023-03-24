import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import image from './image.webp'

/*
fetches data and holds it in state
passes data as props to ListArticles
passes methods as props to Search Form
*/

function App() {
  const[searches, setSearches] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value)
    axios(`http://hn.algolia.com/api/v1/search?query=${e.target.value}`)
    .then(res => {
      console.log(res.data.hits)
      setSearches(res.data.hits)
    })

    
  }

  return (

    <div className="App">
      <img src={image}/>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box>
      <div>
      <TextField id="outlined-basic" label="Search stories by title, url, or author" variant="outlined" onChange={handleChange} />
      </div>
      
      <form>
        Search
        <select>
          <option>All</option>
          <option value='story'>Stories</option>
          <option value='comment'>Comments</option>
        </select>
        by
        <select>
          <option value='poll'>Popularity</option>
          <option>Date</option>
        </select>
        for
        <select>
        <option>All Time</option>
          <option>Last 24h</option>
          <option>Past Week</option>
          <option>Past Month</option>
          <option>Past Year</option>
        </select>
      </form>
      
      {searches.map((search,index) => (
        <p key={index}> 
        <a href={search.title}>{search.title}
        </a> 
        </p>
      ))}

    </div>
  );
}

export default App;

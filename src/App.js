import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListArticles from './ListArticles';
import SearchForm from './SearchForm';

function App() {
  const [searches, setSearches] = useState([]);
  const [query, setQuery] = useState('')
  const [tags, setTags] = useState('')
  const [filterDate, setFilterDate] = useState()


  //fetches data and holds it in state
  useEffect(
    () => {
     const fetchData = async () => {
        const results = await axios(`https://hn.algolia.com/api/v1/search?query=${query}&tags=${tags}`)
        setSearches(results.data.hits)
      }
      fetchData()
    }, [tags, query]
  )


  const handleDate = (e) => {
    const days = e.target.value;
    const milliseconds = days * 24 * 60 * 60 * 1000;
    console.log('milliseconds', milliseconds)
    
    console.log('right now', Date.now())
    console.log(searches.map(search => {
      return Date.parse(search.created_at)
    }))

    console.log(Date.now() - milliseconds)

    const filteredDate = searches.filter(search => {
      if(milliseconds === 0) {
        return searches
      }
      if((Date.now() - milliseconds) < Date.parse(search.created_at)) {
        return search
      }
    })

    console.log(filteredDate)
    setFilterDate(filteredDate)

  }

 /*
 passes methods as props to Search Form & 
 passes data as props to ListArticles
 */
  return (
    <div className="App">
      <SearchForm 
      onChange={handleDate}
      query={query}
      setQuery={setQuery}
      setTags={setTags}
      />
      <ListArticles 
      searches={searches}
      filterDate={filterDate}
       />
    </div>
  );
}

export default App;

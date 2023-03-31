import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListArticles from './ListArticles';
import SearchForm from './SearchForm';

function App() {
  const [searches, setSearches] = useState([]);
  const [query, setQuery] = useState('')
  const [tags, setTags] = useState('')
  const [year, setYear] = useState(0)


  //fetches data and holds it in state
  useEffect(
    () => {
     const fetchData = async () => {
        const results = await axios(`https://hn.algolia.com/api/v1/search?query=${query}&tags=${tags}`)

       const object = results.data.hits.filter(result => {
          if(year === 0) {
            return result
          } else
          if ((Date.now() - year) < Date.parse(result.created_at)) {
            return result
          }
        })

        setSearches(object)
        
      }
      fetchData()
    }, [tags, query]
  )


  const handleDate = (e) => {
    const milliseconds = e.target.value * 24 * 60 * 60 * 1000;
    setYear(milliseconds)
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
       />
    </div>
  );
}

export default App;

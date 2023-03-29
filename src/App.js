import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListArticles from './ListArticles';
import SearchForm from './SearchForm';

/*
fetches data and holds it in state
passes data as props to ListArticles
passes methods as props to Search Form
*/

function App() {
  const[searches, setSearches] = useState([]);
  const[query, setQuery] = useState('')
  const[tags, setTags] = useState('')

  useEffect(
    () => {
     const fetchData = async () => {
        const results = await axios(`http://hn.algolia.com/api/v1/search?query=${query}&tags=${tags}`)
        console.log(results.data);
        console.log(tags)
        setSearches(results.data.hits)
      }
      fetchData()
    }, [tags, query]
  )

  const handlePopular = (e) => {
    const popular = searches;
    // popular.sort((a, b) => {
    //   console.log(a);
    //   return b.num_comments - a.num_comments;
    // })
    setSearches(
      popular.sort((a, b) => {
        console.log(a);
        return b.num_comments - a.num_comments;
      })

    )
  }

  return (
    <div className="App">
      
      <SearchForm 
      onChange={handlePopular}
      query={query}
      setQuery={setQuery}
      setTags={setTags}
      />

      <ListArticles searches={searches} />

    </div>
  );
}

export default App;

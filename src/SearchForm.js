import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import image from './image.webp'

/*
Search by tag, date, author, title
uses methods passed as props to store filtered data in App
*/

function SearchForm(props) {

    const { query, setQuery, setTags, handlePopular } = props

    return (
    <div>
        <header>
            <img src={image}
            alt=''
            style={{ width: '48px' }}/>
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
            noValidate
            autoComplete="off"
            >
            </Box>
            <div>
                <TextField 
                id="outlined-basic" 
                label="Search stories by title, url, or author" variant="outlined" 
                value={query} 
                type='text' 
                onChange={e => setQuery(e.target.value)} />
            </div>
        </header>
        
        <form>
            Search
            <select onChange={(e) => {setTags(e.target.value)}}>
                <option value=''>All</option>
                <option value='story'>Story</option>
            </select>
            by
            <select>
                <option value='comment' onChange={handlePopular}>Popularity</option>
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
    </div>
    )
}

export default SearchForm
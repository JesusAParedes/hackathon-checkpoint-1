import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import image from './image.webp'
import './SearchForm.css'

/*
Search by tag, date, author, title
uses methods passed as props to store filtered data in App
*/

function SearchForm(props) {

    const { query, setQuery, setTags, onChange } = props

    return (
    <div>
        <header className='header'>
            <img src={image}
            alt=''
            className='H_logo'
            />
            <div className='SearchHeader'>
               Search
                <br />
                Hacker News
            </div>
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
            noValidate
            autoComplete="off"
            >
            </Box>
            <div>
                <TextField
                style={{ width: '100%' }}
                id="outlined-basic" 
                label="Search stories by title, url, or author" variant="outlined" 
                value={query} 
                type='text' 
                onChange={e => setQuery(e.target.value)} />
            </div>
            <div>
                {/* <svg 
                xmlns='http://www.w3.org/2000/svg'
                className='SVG'/> */}
                <span>Settings</span>
            </div>
        </header>
        
        <form>
            Search
            <select onChange={(e) => {setTags(e.target.value)}}>
                <option value=''>All</option>
                <option value='story'>Story</option>
            </select>
            {/* by
            <select>
                <option value='comment' onChange={handlePopular}>Popularity</option>
                <option>Date</option>
            </select> */}
            for
            <select onChange={onChange}>
                <option value=''>All Time</option>
                <option value='1'>Last 24h</option>
                <option value='7'>Past Week</option>
                <option value='30'>Past Month</option>
                <option value='365'>Past Year</option>
            </select>
        </form>
    </div>
    )
}

export default SearchForm
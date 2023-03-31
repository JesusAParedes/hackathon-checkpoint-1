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
                <span>Settings</span>
            </div>
        </header>
        
        <form>
            Search
            <select onChange={(e) => {setTags(e.target.value)}}>
                <option value=''>All</option>
                <option value='story'>Story</option>
            </select>
            from
            <select onChange={onChange}>
                <option value='0'>All Time</option>
                <option value='365'>Last Year</option>
                <option value='730'>Last 2 Years</option>
                <option value='1095'>Last 3 Years</option>
            </select>
        </form>
    </div>
    )
}

export default SearchForm
import React from 'react';
import './DisplayArticleCard.css'
const moment = require('moment')

/* 
Renders props into a stylish view for the user
Title is clickable & opens a new tab to the url of the article
Displays points, author, date created, & url
Make it beautiful!!!
*/

function DisplayArticleCard(props) {
    const{ search, index } = props;
    let date = moment(search.created_at).format('MM-DD-YYYY')
    
    return (
    <section className='data'>
        <div className='title'>
            <p key={index}> 
                <a href={search.url}
                target="_blank">{search.title} 
                </a>
                <span className='url'>
                    ({search.url})
                </span>
            </p>
        </div>
    
        <article className='meta'>
                <span className='separator'>
                    {search.points} points | 
                </span>
                <span>
                   Author: {search.author} |
                </span>
                <span>
                   Created: {date} |
                </span>
                <span>
                    {search.num_comments} comments
                </span>
        </article> 
    </section>
    )
}

export default DisplayArticleCard
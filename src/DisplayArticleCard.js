import React from 'react';
const moment = require('moment')

/* 
Renders props into a stylish view for the user
Title is clickable & opens a new tab to the url of the article
Displays points, author, date created, & url
Make it beautiful!!!
*/

function DisplayArticleCard(props) {
    const{ search, index } = props;
    
    return (
    <div>
        <div>
            <p key={index}> 
                <a href={search.title}>{search.title} 
                </a>
                <span>
                    ({search.url})
                </span>
            </p>
        </div>
    
        <div>
                <span>
                    {search.points} points | 
                </span>
                <span>
                    {search.author} |
                </span>
                <span>
                    {search.created_at} |
                </span>
                <span>
                    {search.num_comments} comments
                </span>
        </div> 
    </div>
    )
}

export default DisplayArticleCard
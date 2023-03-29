import React from 'react';
import DisplayArticleCard from './DisplayArticleCard';
/* 
Maps over props passed to it from App and pass props to DisplayArticleCard to render each card
Make it beautiful
**Bonus** Add sort to list most recent/alphabetical
*/

function ListArticles(props) {

    const{ searches } = props;

    return (
        searches.map((search,index) => (
            <div>
              <DisplayArticleCard 
              search={search} 
              index={index}/>
            </div>
          ))
    ) 
    
}


export default ListArticles
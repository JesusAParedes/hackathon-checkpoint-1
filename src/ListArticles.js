import React from 'react';
import DisplayArticleCard from './DisplayArticleCard';

/* 
Make it beautiful
**Bonus** Add sort to list most recent/alphabetical
*/

function ListArticles(props) {
    const{ searches } = props;

    /*
    Maps over props passed to it from App &
    Pass props to DisplayArticleCard to render each card
    */

    return (
      searches.map((search,index) => (
            <div>
              <DisplayArticleCard 
              search={search}
              index={index}
              />
            </div>
          ))
          )
}

export default ListArticles
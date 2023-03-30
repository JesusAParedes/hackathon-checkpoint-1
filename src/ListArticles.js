import React from 'react';
import DisplayArticleCard from './DisplayArticleCard';

/* 
Make it beautiful
**Bonus** Add sort to list most recent/alphabetical
*/

function ListArticles(props) {
    const{ searches, filterDate } = props;

    /*
    Maps over props passed to it from App &
    Pass props to DisplayArticleCard to render each card
    */

    return (
      filterDate.map((search,index) => (
            <div>
              <DisplayArticleCard 
              search={search}
              filterDate={filterDate} 
              index={index}/>
            </div>
          )))  
}

export default ListArticles
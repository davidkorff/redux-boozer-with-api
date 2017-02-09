import React from 'react';
import NavBar from './nav_bar';
import CocktailsIndex from './cocktails_index';
import CocktailsShow from './cocktails_show';

export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        <div className='container'>
          <CocktailsIndex />
          <CocktailsShow />
        </div>

      </div>
    )
};

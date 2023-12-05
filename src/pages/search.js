import React from 'react';
import "./search.css";
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  return (
    <form className='search'>
        <div className='search__input'>
            <SearchIcon className='search__icon'/>hello bishnu
            <input/>
            <MicIcon/>

        </div>
        <div className='search__buttons'>
            <button type='button' variant='outlined'>Google Search</button>
            <button variant='outlined'>i am felling lucky</button>

        </div>
    </form>
  )
}

export default Search;
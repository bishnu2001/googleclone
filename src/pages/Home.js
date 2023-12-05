import React from 'react';
import "./Home.css";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import Search from './search';
function Home() {
  return (
    <div className='home'>
        <div className='home__header'>
            <div className='home_left'>
                <p>About</p>
                <p>Store</p>

            </div>
            <div className='home_right'>
                <p>Gmail</p>
                <p>Images</p>
                <AppsIcon/>
                <Avatar alt='photo' src='./image/photo.png'/>
            </div>
        </div>
        <div className='home__body'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' alt='photo' height="100px"/>
            <div className='home__bodyinput'>
                <Search/>

            </div>
        </div>

    </div>
  )
}

export default Home;
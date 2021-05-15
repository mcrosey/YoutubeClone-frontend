import React, { Component } from 'react';
import { ReactComponent as Menu } from '../assets/Images/menu.svg';
import { ReactComponent as Icon }from '../assets/Images/icon.svg';
import { ReactComponent as Logo } from '../assets/Images/logo.svg';
import { ReactComponent as SearchSVG } from '../assets/Images/search.svg';
import { ReactComponent as SearchBtnSVG} from '../assets/Images/search.svg';
import { ReactComponent as NewVideoSVG} from '../assets/Images/newVideo.svg';
import { ReactComponent as AppsSVG } from '../assets/Images/apps.svg';
import { ReactComponent as NotificationsSVG} from '../assets/Images/notifications.svg';
import './Header.css';


export default class Homepage extends Component {


render() {
    return (
       <header class="top">
            <button class="back_btn">
            <Icon />
            </button>
            <button class="menu" >
            <Menu />
            </button>
            <button class="logo" >
            <Logo />
           </button>

            <div class="search">
                <input type="text" name="search" placeholder="Search"/>
                <button class="search_btn">
                <SearchSVG />
                </button>
            </div>

            <button class="search_btn">
               <SearchBtnSVG />
            </button>

            <button class="new_video">
               <NewVideoSVG />
            </button>
            <button class="apps">
                <AppsSVG />
            </button>

            <button class="notifications">
                <NotificationsSVG />
            </button>

            <button class="user_avatar">
                <img src="https://i.postimg.cc/J4cs2tcg/team.png" 
                width="250" 
                height="250" 
                alt="Man free icon" 
                title="Man free icon" />
            </button>
        </header>
    )
}
}


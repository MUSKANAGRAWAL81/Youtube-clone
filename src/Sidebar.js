import React from 'react'
import './Sidebar.css';
import SideBarRow from './SideBarRow';
import {  ExpandMoreOutlined, History, Home, OndemandVideo, Subscriptions, ThumbUpAltOutlined, VideoLibraryOutlined, WatchLater, Whatshot } from '@mui/icons-material';
function Sidebar() {
    return (
        <div className='sidebar'>
            

            <SideBarRow selected = {"selected"} Icon = {Home} title = 'Home' />
            <SideBarRow Icon = {Whatshot} title = 'Trending' />
            <SideBarRow Icon = {Subscriptions} title = 'Subscription' />
            <hr/>
            <SideBarRow Icon = {VideoLibraryOutlined} title = 'Library' />
            <SideBarRow Icon = {History} title = 'History' />
            <SideBarRow Icon = {OndemandVideo} title = 'Your Vedios' />
            <SideBarRow Icon = {WatchLater} title = 'Watch Later' />
            <SideBarRow Icon = {ThumbUpAltOutlined} title = 'Liked Vedios' />
            <SideBarRow Icon = {ExpandMoreOutlined} title = 'Show more' />
            <hr />
            
        </div>
    )
}

export default Sidebar

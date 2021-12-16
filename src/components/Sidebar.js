import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebar.css'

function Sidebar({avatar}) {
    const recentItem = (topic)=>(<div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>);

    return (
        <div className='sidebar'>
            {/* Sidebar Top */}
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                <Avatar src={avatar} className='sidebar__avatar'/>
                <h2>Sagar Shiroya</h2>
                <h4>sagar.shiroya8@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">64</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">773</p>
                </div>
            </div>

            {/* Sidebar Bottom */}
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react')}
                {recentItem('php')}
                {recentItem('career')}
                {recentItem('development')}
                {recentItem('blockchain')}
            </div>
        </div>
    )
}

export default Sidebar

import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({ name, description, message, photoUrl, avatar }) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar src={avatar}/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpOutlinedIcon} title='Like' color='grey'/>
                <InputOption Icon={ChatOutlinedIcon} title='Comment' color='grey'/>
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='grey'/>
                <InputOption Icon={SendOutlinedIcon} title='Send' color='grey'/>
            </div>
        </div>
    )
}

export default Post

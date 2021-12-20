import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    });

    const sendPost = (event)=>{
        event.preventDefault();
        
        input && db.collection('posts').add({
            name: 'Sagar Shiroya',
            description: 'Software Engineer',
            message: input,
            photoUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEgXrSsg-5I4g/profile-displayphoto-shrink_400_400/0/1543072699529?e=1645056000&v=beta&t=3rDbTMtBcTUgqneHRqIlUe2zwYLNOoYQHmuAls20uSI',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('New post added');
        setInput("");
    }
    return (
        <div className='feed'>

            {/* Create Post Input Container */}
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" onChange={(event)=>{setInput(event.target.value)}}/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    {/* Contains Photo, Video, Event, Write article  */}
                    <InputOption title='Photo' Icon={ImageIcon} color='#70b5f9'/>
                    <InputOption title='Video' Icon={SubscriptionsIcon} color='#7fc15e'/>
                    <InputOption title='Event' Icon={EventNoteIcon} color='#e7a33e'/>
                    <InputOption title='Write article' Icon={CalendarViewDayIcon} color='#fc9295'/>
                </div>
            </div>

            {/* Posts Feed */}
            {posts.map(({id, data:{name,description,message,photoUrl}})=>(
                <Post 
                name={name} 
                description={description}
                message={message} 
                avatar={photoUrl}
                // photoUrl={photoUrl}
                key= {id} />
            ))}
            {/* <Post 
            name='Sagar Shiroya' 
            description='Software Engineer' 
            message="Are you looking for a job in Germany as a software developer?

            Germany is a great country to work in, with good work-life balance and better salary. AND there are over 100k open positions at the moment.
            
            If you want to learn how to get a job in Germany as a software developer in up to 2 months and with visa sponsorship, watch our 30-minute video training now.
            
            Hi, I’m Jörg from Berlin, Co-Founder of Find a job in Germany, tech recruiter and career coach. After our training you know exactly how you have to apply for jobs successfully and start a career in Germany." 
            avatar='https://media-exp1.licdn.com/dms/image/C5603AQEgXrSsg-5I4g/profile-displayphoto-shrink_400_400/0/1543072699529?e=1645056000&v=beta&t=3rDbTMtBcTUgqneHRqIlUe2zwYLNOoYQHmuAls20uSI' /> */}
        </div>
    )
}

export default Feed

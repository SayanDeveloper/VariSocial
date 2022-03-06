import React from 'react';
import { Link } from 'react-router-dom';

function ProfileFriends() {
    const handle = (event) => {
        console.log(event.target.value);
        event.target.value = "✓";
    }
    return (
        <div className='profile-friend-list'>
            <h2>Friends list</h2>
            <div className='each'>
                <Link to="/profile">
                    <img src='./Images/6.jpg' />
                </Link>
                <Link to="/profile">
                    <h4>Friends name</h4>
                </Link>
                <button className='add-friend-btn' onClick={e => handle(e)}>+</button>
            </div>
            <div className='each' onClick={handle}>
                <Link to="/profile">
                    <img src='./Images/6.jpg' />
                </Link>
                <Link to="/profile">
                    <h4>Friends name</h4>
                </Link>
                <button className='add-friend-btn'>+</button>
            </div>
            <div className='each' onClick={handle}>
                <Link to="/profile">
                    <img src='./Images/6.jpg' />
                </Link>
                <Link to="/profile">
                    <h4>Friends name</h4>
                </Link>
                <button className='add-friend-btn'>+</button>
            </div>
            <div className='each' onClick={handle}>
                <Link to="/profile">
                    <img src='./Images/6.jpg' />
                </Link>
                <Link to="/profile">
                    <h4>Friends name</h4>
                </Link>
                <button className='add-friend-btn'>+</button>
            </div>
            <div className='see-more-friends'>
                See More
            </div>
        </div>
    )
};

export default ProfileFriends;

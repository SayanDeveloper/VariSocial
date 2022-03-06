import React from 'react';
import Post from './Post';
import ProfileFriends from './ProfileFriends';

function Profile() {
    return (
        <div className='profile-detail-page body'>
            <div className='profile-bg'>
                <img src='./images/background.png' />
            </div>
            <div className='prof-real-det'>
                <img src='./images/6.jpg' />
                <h2>User's Name</h2>
                <h4>@username</h4>
                <div className='profile-det-bio'>User's bio</div>
            </div>
            <div className='profile-page-rest'>
                <div className='profile-post'>
                    <h2>Uploaded Posts</h2>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <ProfileFriends />
            </div>
        </div>
    )
};

export default Profile;

import React from 'react';
import Sidebar from './Sidebar';
import FriendCard from './FriendCard';

function Friends() {
    return (
        <div className='body'>
            <Sidebar />
            <div className='friends_req_list'>
                <div className='friends_req'>
                    <h2>Friend Requests</h2>
                    <FriendCard />
                </div>
                <div className='friends_sug'>
                    <h2>Friends Suggestions</h2>
                    <h4>Feature is coming soon...</h4>
                </div>
            </div>
        </div>
    )
}

export default Friends

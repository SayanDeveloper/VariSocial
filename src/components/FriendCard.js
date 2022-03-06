import React from 'react'
import frDp from '../assets/6.jpg';

function FriendCard() {
    return (
        <div className='friend_card'>
            <img src={frDp} alt="friend_dp" />
            <div className='fr-card-det'>
                <h3>Friend's Name</h3>
                <div>Friend's Info</div>
            </div>
            <div className='fr-req-op'>
                <button>Accept</button>
                <button>Ignore</button>
            </div>
        </div>
    )
}

export default FriendCard

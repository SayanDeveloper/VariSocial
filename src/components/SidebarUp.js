import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../features/userSlice';
import bg from '../assets/background.png';
import dp from '../assets/6.jpg';

function SidebarUp() {
    const user = useSelector(selectUser);

    return (
        <div className='sidebar-up'>
            <div className='profile_bg_sidebar'>
                <img src={bg} />
            </div>
            <div className='prof-det-side'>
                <div className='prof-img-side'>
                    <img src={dp} />
                </div>
                <div className='prof-name-side'>{user.displayName}</div>
                <div className='prof-bio-side text-center'>
                    Your Profile Bio
                </div>
                <Link to="/profile" className='full-profile-side text-center'>
                    View Full Profile
                </Link>
            </div>
        </div>
    )
}

export default SidebarUp

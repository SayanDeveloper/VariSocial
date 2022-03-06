import React from 'react';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <div className='LeftHead'>
                <h1>VariSocial</h1>
                <div className='search'>
                    <input type="text" placeholder='Search...' />
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
            <div className='RightHead'>
                <NavLink to="/" className='each'>
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/friends" className='each'>
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <span>Friends</span>
                </NavLink>
                <div className='each'>
                    <i className="fa fa-bell" aria-hidden="true"></i>
                    <span>Notifications</span>
                </div>
                <div className='each'>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>
                        Me <i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header

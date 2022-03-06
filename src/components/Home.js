import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import RightWidget from './RightWidget';

function Home() {
    return (
        <div className='body'>
            <Sidebar />
            <Feed />
            <RightWidget />
        </div>
    )
}

export default Home

import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../features/userSlice';
import dp from '../assets/6.jpg';
import specialDp from '../assets/special.jpg';

function Post({message, name, dateTime, image}) {
    const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [overall, setOverall] = useState("Just Now");
    setTimeout(() => {
        const d = new Date(dateTime.seconds*1000);
        const hour = d.toTimeString().substr(0, 5);
        const date = d.getDate();
        const month = monthArr[d.getMonth()];
        setOverall(`${date} ${month} ${hour}`);
    }, 100);


    const user = useSelector(selectUser);

    return (
        <div className='post_card'>
            <div className='post-head'>
                <div className='left'>
                    <img src={name == 'Sayan Samanta' ? specialDp : dp} className='post-dp' />
                    <div className='user'>
                        <div className={`name ${name == 'Sayan Samanta' ? "special" : ""}`}>{name}</div>
                        <div className='time'>{overall} <i className="fa fa-globe" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className='right'></div>
            </div>
            <div className='post-body'>
                {`${message}`}
                <div className='post-img-container'>
                    <img src={image}/>
                </div>
            </div>
            <hr />
            <div className='post-foot'></div>
        </div>
    )
}

export default Post

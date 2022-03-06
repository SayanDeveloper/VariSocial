import React, {useState, useEffect, useContext} from 'react';
import dp from '../assets/6.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../features/userSlice';
// components
import Post from './Post';
import Preloader from './Preloader';
import PhotoUpload from './PhotoUpload';
// firebase imports
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { onSnapshot, orderBy, query } from "firebase/firestore"; 
import { collection, addDoc } from 'firebase/firestore';
import { DataContext } from '../context';

function Feed() {
    // states
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // Context api
    const {photoUp, videoUp} = useContext(DataContext);
    const [photoUpOpen, setPhotoUpOpen] = photoUp;
    const [videoUpOpen, setVideoUpOpen] = videoUp;

    // redux user
    const user = useSelector(selectUser);

    useEffect(() => {
        var arr = [];
        const collectionRef = collection(db, "posts");
        const q = query(collectionRef, orderBy("date", "asc"));
        onSnapshot(q, (doc) => {
            arr = [];
            doc.forEach((d) => {
                arr.push(d.data());
            });
            setPosts(arr);
            console.log("loaded man");
        });
        setLoading(false);
    }, []);

    console.log(posts);

    function uploadData(e) {
        e.preventDefault();
        if (input === "") {
            alert("Please enter a message");
            return;
        }
        addDoc(collection(db, "posts"), {
            name: user.displayName,
            message: input,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            photoUrl: "",
        });
        setInput("");
    }

    return (
        <>
        {loading ? <Preloader /> : ""}
        {photoUpOpen ? <PhotoUpload /> : ""}
        <div className='feed'>
            <div className='post_field'>
                <div className='first'>
                    <div className='pic'>
                        <img src={dp} alt='dp' />
                    </div>
                    <div>
                        <textarea type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Write your text here...' />
                    </div>
                    <button type='button' onClick={uploadData}>Post</button>
                </div>
                <div className='second'>
                    <div className='photo' onClick={e => setPhotoUpOpen(true)}>
                        <img src="https://img.icons8.com/color/48/000000/image.png" alt='PhotoUp'/>
                        Photo
                    </div>
                    <div className='video'>
                        <img src="https://img.icons8.com/color/48/000000/video-file.png" alt='video'/>
                        Video
                    </div>
                    <div className='post'>
                        <img src="https://img.icons8.com/color/48/000000/instapaper.png" alt='article'/>
                        Article
                    </div>
                </div>
            </div>
            <hr className='line_top' />
            <div className='all_post'>
                {posts.map((each, index) => 
                    <Post key={index} message={each.message} name={each.name} dateTime={each.date} image={each.photoUrl} />
                ).reverse()}
                {/* <Post />
                <Post /> */}
            </div>
        </div>
        </>
    )
}

export default Feed

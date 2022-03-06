import React, {useState, useEffect, useContext, useRef} from 'react';
import { DataContext } from '../context';
import '../styles/photoUpWin.css';
import Preloader from './Preloader';
// reduc imports
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../features/userSlice';
// firebase imports
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { onSnapshot, orderBy, query } from "firebase/firestore"; 
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function PhotoUpload() {
    const {photoUp} = useContext(DataContext);
    const [photoUpOpen, setPhotoUpOpen] = photoUp;
    const [uploaded, setUploaded] = useState(false);
    const [filename, setFilename] = useState("");
    const [fileExt, setFileExt] = useState("");
    const [caption, setCaption] = useState("");
    const [loading, setLoading] = useState(false);

    // ref hooks
    const fileUploadInput = useRef();
    const upLabel = useRef();
    const upField = useRef();
    const previewImg = useRef();

    // redux
    const user = useSelector(selectUser);

    function fNameFetch(e) {
        var broken = e.target.value.split("\\");
        var extBroke = e.target.value.split(".");
        var lenName = broken.length;
        var lenExt = extBroke.length;
        setFileExt(extBroke[lenExt - 1]);
        if (extBroke[lenExt - 1] == "jpeg" || 
            extBroke[lenExt - 1] == "jpg" ||
            extBroke[lenExt - 1] == "png") {
            console.log(typeof extBroke[lenExt - 1]);
            setFilename(broken[lenName-1]);
            console.log(URL.createObjectURL(e.target.files[0]));
            setTimeout(() => {
                previewImg.current.src = URL.createObjectURL(e.target.files[0]);
            },100);
            // return alert("Please upload image format only.");
        }   else {
            alert("Please upload image only");
        }
    }

    const photoUpRef = useRef();
    const PhotoWinDisAnim = () => {
        photoUpRef.current.style.transition = "0.4s";
        photoUpRef.current.style.transform = "translateY(-40px)";
        photoUpRef.current.style.opacity = "0";
        setTimeout(() => setPhotoUpOpen(false), 200);
    }

    const fileUpload = () => {
        setLoading(true);
        const storage = getStorage();

        // Create the file metadata
        const metadata = {
            contentType: 'image/'+fileExt
        };

        var file = fileUploadInput.current.files[0];

        const storageRef = ref(storage, 'profiles/'+filename);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed',
            (snapshot) => {
                // progress
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
                if (progress == 100) {
                    setUploaded(true);
                }
            },
            (err) => {
                alert(err);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // alert(downloadURL);
                    addDoc(collection(db, "posts"), {
                        name: user.displayName,
                        message: caption,
                        date: firebase.firestore.FieldValue.serverTimestamp(),
                        photoUrl: downloadURL,
                    });
                    setPhotoUpOpen(false);
                    setLoading(false);
                })
            }
        )

    }


    return (
        <div className='photoUpContainer'>
            {/* uploading preloader animation */}
            {/* <div className='uploading-bg'></div>
            <div className='uploading-content'>
                <i class="fa fa-rocket" aria-hidden="true"></i>
                <div className='upload-track'>Uploading 0%</div>
            </div> */}
            {loading ? <Preloader /> :  ""}

            <div className='bg-black'></div>
            <div className='photoUpWin' ref={photoUpRef}>
                <i className="fa fa-times" onClick={PhotoWinDisAnim} aria-hidden="true"></i>
                <div className='main-content'>
                    <textarea 
                    type="text" 
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                    placeholder='Write something about the photo...' 
                    />
                    {/* <div className='photoUpFileName'>{filename}</div> */}
                    {filename ? 
                    <img src='' className='previewImg' alt='preview' ref={previewImg} />
                    :
                    <>
                        <label htmlFor='photoUpLabel' ref={upLabel} className='uploadClickPlace'>
                            Click Here to Upload Image
                        </label>
                    </>
                }
                <input id='photoUpLabel' ref={upField} onChange={fNameFetch} type="file" ref={fileUploadInput} accept="image/*" />
                </div>
                <div className='uploadFooter'>
                    <button type='button' onClick={fileUpload}>Post</button>
                </div>
            </div>
        </div>
    )
};

export default PhotoUpload;
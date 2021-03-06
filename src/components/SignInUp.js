import React, {useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import '../styles/login.css';
import Preloader from './Preloader';
// Firebase imports
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { onSnapshot, orderBy, query } from "firebase/firestore"; 
import { collection, addDoc } from 'firebase/firestore';

function SignInUp() {
    // States
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [logPass, setLogPass] = useState("");
    const [logEmail, setLogEmail] = useState("");
    const [regPass, setRegPass] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    // Refs
    const signIn = useRef();
    const signUp = useRef();

    // Functions
    function signInShow() {
        signUp.current.style.opacity = "0";
        signUp.current.style.zIndex = "0";
        setTimeout(() => {
            signIn.current.style.zIndex = "1";
            signUp.current.style.display = "none";
            signIn.current.style.display = "block";
            signIn.current.style.opacity = "1";
        }, 200);
    }

    function signUpShow() {
        signIn.current.style.opacity = "0";
        signIn.current.style.zIndex = "0";
        setTimeout(() => {
            signUp.current.style.zIndex = "1";
            signIn.current.style.display = "none";
            signUp.current.style.display = "block";
            signUp.current.style.opacity = "1";
        }, 200);
    }

    const loginToApp = (e) => {
        e.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(auth, logEmail, logPass)
        .then((userAuth) => {
            // Signed in 
            // ...
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }));
            console.log(userAuth.user.displayName);
        })
        .catch((err) => {
            alert(err);
        });
        setLoading(false);
    }

    const register = (e) => {
        e.preventDefault();
        if (!name) {
            return alert("Please enter your full name.");
        }
        if (name == "Sayan Samanta" || name == "sayan samanta") {
            setName("");
            return alert("Banchod nijer name lekh sala");
        }
        // if (!userName) {
        //     return alert("Please enter a username.");
        // }
        setLoading(true);

        createUserWithEmailAndPassword(auth, regEmail, regPass)
        .then((userAuth) => {
            updateProfile(auth.currentUser, {
                displayName: name,
            })
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
            }));
            console.log("name", name);
            setLoading(false);
            // alert("User Created");
        }).catch((err) => alert(err));
    }

    return (
        <>
            {loading ? <Preloader /> : ""}
        <main id="login-page" className='body'>
            <img src="./Images/login-img.png" alt="" />
            <div className="form-side">
                <h2>
                    Welcome to VariSocial
                </h2>
                <div className="form-container">
                    <div className="for-sign-up" ref={signUp}>
                        <h2>Sign Up</h2>
                        <form action="">
                            <div>
                                <input 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                                />
                                <label htmlFor="">Full Name</label>
                            </div>
                            <div>
                                <input 
                                type="text" 
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required 
                                />
                                <label htmlFor="">Username</label>
                            </div>
                            <div>
                                <input 
                                type="text" 
                                value={regEmail}
                                onChange={(e) => setRegEmail(e.target.value)}
                                required 
                                />
                                <label htmlFor="">Email</label>
                            </div>
                            <div>
                                <input 
                                type="password" 
                                value={regPass}
                                onChange={(e) => setRegPass(e.target.value)}
                                required 
                                />
                                <label htmlFor="">Password</label>
                            </div>
                            <button onClick={register}>Create an account</button>
                        </form>
                        <div className="text-center" id="dynamic-text">
                            Have an account? <button onClick={signInShow}><b>Sign In</b></button>
                        </div>
                    </div>
                    <div className="for-login" ref={signIn}>
                        <h2>Sign In</h2>
                        <form action="">
                            <div>
                                <input 
                                type="text" 
                                value={logEmail}
                                onChange={(e) => setLogEmail(e.target.value)}
                                required 
                                />
                                <label htmlFor="">Email</label>
                            </div>
                            <div>
                                <input 
                                type="password"
                                value={logPass}
                                onChange={(e) => setLogPass(e.target.value)}
                                required 
                                />
                                <label htmlFor="">Password</label>
                            </div>
                            <button onClick={loginToApp}>Login</button>
                        </form>
                        <div className="text-center" id="dynamic-text">
                            Don't have an account? <button onClick={signUpShow}><b>Sign Up</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default SignInUp;

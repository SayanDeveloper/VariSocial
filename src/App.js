import React, {useState, useEffect} from 'react';
import './App.css';
import { DataProvider } from './context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import Header from './components/Header';
import Home from './components/Home';
import Friends from './components/Friends';
import Profile from './components/Profile';
import SignInUp from './components/SignInUp';
import Preloader from './components/Preloader';
import Notifications from './components/Notifications';

function App() {
  const user = useSelector(selectUser);
  const [loading,setLoading] = useState(true);

  const dispatch = useDispatch();
  window.onclick = function(e) {
    console.log(e.target.classList);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user signed in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
        console.log(userAuth);
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="App">
      {loading ? <Preloader /> : ""}

      {!user ? (
        <SignInUp />
      ) : (
        <DataProvider>
          <Router>
          <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/friends" element={<Friends />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/notifications" element={<Notifications />} />
            </Routes>
          </Router>
        </DataProvider>
      )}

      
    </div>
  );
}

export default App;

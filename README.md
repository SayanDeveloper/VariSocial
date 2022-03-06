# VariSocial

### What is the use of this repo?
We will create a social media platform(work in progress).

### What is the goal of this repo?
We have created this repository to learn about how a social media platform works basically.

### Tech Stacks Used :
- HTML
- CSS
- Js
- React.js
- Firestore

### Installations and usage

- First fork the repo
- Install Node.Js in your machine
- Then open terminal in the directory of this repo
- Type ```npm install``` to install all dependencies
- Then create a file named ```firebase.js``` in ```/src``` folder.
- Now copy the below code in that file
  ```
  import { initializeApp } from 'firebase/app';
  import { getFirestore } from 'firebase/firestore';
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  const firebaseConfig = {
    // Your firebase app config data
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {db, auth};
  ```
- Now in terminal of this repo's root folder type ```npm start``` to run the project in dev mode.

### Who can contribute?
Anyone can contribute in this repo if you have sound knowledge of react.js and firebase firestore

##### Happy Coding 

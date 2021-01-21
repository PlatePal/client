import firebase from 'firebase'
const firebaseConfig = {
    apiKey: process.env,
    authDomain: "platepal.firebaseapp.com",
    projectId: "platepal",
    storageBucket: "platepal.appspot.com",
    messagingSenderId: "989624818914",
    appId: "1:989624818914:web:32dd13ed6cc8e0e6d092bb"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;

// you have to npm install firebase --dev and npm install @react-native-firebase/auth
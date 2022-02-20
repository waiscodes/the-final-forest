import firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
};

const fire = firebase.initializeApp(firebaseConfig);

export const auth = fire.auth();
export const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const db = fire.firestore();
export const storage = fire.storage();
export default fire;

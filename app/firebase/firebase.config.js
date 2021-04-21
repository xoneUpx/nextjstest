import firebase from 'firebase/app'; 
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

     var firebaseConfig = {
         apiKey: process.env.API_KEY,
             authDomain: "nextjs-ff550.firebaseapp.com",
                 projectId: "nextjs-ff550",
                     storageBucket: "nextjs-ff550.appspot.com",
                         messagingSenderId: "497761042761",
                             appId: "1:497761042761:web:4512581d561ec546f45a98"
                               };
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
export const firestore = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const getUserWithUsername = async (username) =>{
  const usersRef =  firestore.collection('users');  
  const query =  usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  console.log('doc', userDoc)
  return userDoc;
} 
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

import { auth, firestore } from '../firebase/firebase.config.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react';

const userData = () =>{
  const [user] = useAuthState(auth);
  const [username, setUsername] = React.useState(null);
  //async needed?
  React.useEffect(async ()=> {
    let unsubscribe;
    if (user) {
      const ref = await firestore.collection('users').doc(user.uid); 
      unsubscribe = ref.onSnapshot((doc)=>{
        setUsername(doc.data()?.username)
      })
    }
    else {
      setUsername(null);
    }
    return unsubscribe;
  }, [user]);
  console.log('datauser done'); 
  console.log(username);
  return {user, username}
  }
export default userData;
export const postToJson = (doc) => {
  const data = doc.data();
  return {
    ...data, createdAt: data?.createdAt.toMillis() || 0, updatedAt: data?.updatedAt.toMillis() || 0, 
  }

  
}
export const groupQuery = (name) => {
  const query = firestore.collectionGroup(name);
  console.log('query', query)
  return query;
}

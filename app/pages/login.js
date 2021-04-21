import React from 'react';
import Link from 'next/link';
import Login from '../components/Login.js';
import LinkPage from '../components/LinkPage.js';
import { firestore, auth, googleAuthProvider } from '../firebase/firebase.config.js';
import UserContext from '../lib/context.js';
import  debounce  from 'lodash.debounce';


const SignInButton= () =>{
   const signInWithGoogle = async () =>{
     try {
      await auth.signInWithPopup(googleAuthProvider);
   } catch(err) {
    console.log(err)
   }
};
  return (
    <button onClick={signInWithGoogle}>
    Google
    </button>
 ); 

}
const SignOutButton = () =>{
  return (
<button onClick={()=>auth.signOut()}>Signout
    </button>
  )
}
const UsernameForm = (props) =>{
  const { user, username } = React.useContext(UserContext);
  const [isValid, setIsValid] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const [usernameValue, setUsernameValue] = React.useState('');
  const onSubmit = async (e) => {
    e.preventDefault(); 
    const userDoc = firestore.doc(`users/${user.uid}`)
    const usernameDoc = firestore.doc(`usernames/${usernameValue}`)
    const batch = firestore.batch();
    batch.set(userDoc, {username: usernameValue, displayName: user.displayName})
    batch.set(usernameDoc, { uid: user.uid, })
    await batch.commit();
    
  }
  const onChange = (e) => {
    const value = e.target.value;
    setUsernameValue(value);
    //setIsValid(true);
  }
  React.useEffect(()=>{
    checkUser(usernameValue)
  }, [usernameValue])
  const checkUser = React.useCallback(debounce(async (name) =>{
    const ref = firestore.doc(`usernames/${name}`)
    const { exist } = await ref.get();
    console.log('checking firebase')
    setIsValid(!exist)

  }, 500),[]);
  return (
    !username && (<form onSubmit={onSubmit}>
      <input name="username" placeholder="noname" value={usernameValue} onChange={onChange}>
      </input>
      <button type="submit" className="" disabled={!isValid}>
      Accept
      </button>

    </form>

  ))

}
const LoginPage = (props)=>{
  const { user, username } = React.useContext(UserContext);
  return (
    <>
 <Login /> 
    <div>
  {
      (user) ?
        (!username ? <UsernameForm username={username} />: <SignOutButton />) :
        <SignInButton />
     } 
    
    </div>


  
<LinkPage path='/' refs='login' text='back home' />
  </>)}
export default LoginPage;

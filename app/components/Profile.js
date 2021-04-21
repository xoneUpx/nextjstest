import Link from 'next/link';
import React from 'react';
const Profile = (props)=> {
  return (
    <>
    <div>
    <h1>Profile Page</h1>
    <p>user is { props.user.username }</p>
    <p>user is { props.user.displayName }</p>
    </div> 
    </>
  )
}
export default Profile;

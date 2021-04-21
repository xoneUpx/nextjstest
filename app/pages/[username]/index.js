import React from 'react';
import Profile from '../../components/Profile.js';
import Posts from '../../components/Posts.js';
import { getUserWithUsername } from '../../firebase/firebase.config.js';
import { postToJson } from '../../lib/hooks.js';

const UserProfile =(props) => {
  return (
    <>
  <Profile user={props.user}/>
  <Posts posts={props.posts}/>
    </>
  ) 
}
export async function getServerSideProps({ query }) {
  const { username } =query;
  const userDoc = await getUserWithUsername(username);
  let user = null;
  let posts = null;
  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref.collection('posts').where('published', '==', true).orderBy('createdAt', 'desc').limit(5);
    posts = (await postsQuery.get()).docs.map(postToJson)
  }
  else {
    user = 'no'
  }

  return (
  {
    props: { user, posts },
  }
 )
}
export default UserProfile;

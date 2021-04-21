import Link from 'next/link';
import React from 'react';
import { getUserWithUsername, firestore } from '../../firebase/firebase.config.js'
import { groupQuery, postToJson } from '../../lib/hooks.js'
import  PostItem  from '../../components/PostItem.js'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import Metatags from '../../components/Metatags.js'

const Post = (props)=> {
  const postRef = firestore.doc(props.path);
  const [realpost] = useDocumentData(postRef) 
  const post = realpost || props.post;
  console.log('in post', post)
  return (
    <>
    <Metatags title={post.title} />
    <PostItem post={post} />
    <span>{post.content}</span>
    </>
  )
}
export const getStaticProps = async ({ params}) =>
{
  const { username, slug } = params;
  const userDoc = await getUserWithUsername(username);
  console.log(username)
  let post;
  let path;
  if (userDoc) {
    const postRef = userDoc.ref.collection('posts').doc(slug);
    post = postToJson(await postRef.get())
    path = postRef.path;
  
  }
  return (
    { props: { post, path},
      revalidate: 100,
    }
  )

}
export const getStaticPaths = async () =>{
  const snap = await groupQuery('posts').get();
  const paths = snap.docs.map(doc=>{
    const { username, slug } = doc.data();
    return (
      {params: { username, slug }}
    )
  })

  return (
    {
      paths,
      fallback: 'blocking',
      
    }
  )
  
}
export default Post;

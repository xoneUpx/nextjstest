
import Link from 'next/link';
import React from 'react';
import PostItem from './PostItem.js';
const Posts = (props)=> {
  console.log('props', props.posts)
  return (
    <div>
    <h1>Posts</h1>
    {props.posts ? props.posts.map((post)=>{
      return (<PostItem post={post} key={post.slug} admin={props.admin} />
    )}) : <p>no posts</p>}
    {props.children}
    <p>end</p>
    </div> 
  )
}
export default Posts;

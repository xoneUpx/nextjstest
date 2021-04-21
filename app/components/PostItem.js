import Link from 'next/link';
import React from 'react';
import styles from '../styles/Post.module.css';

const PostItem = ({ post, admin=false})=> {
  console.log('post', post)
  return (
    <div className={styles.card}>
    <h1>Post</h1>
    {post.title}
    <Link href={`${post.username}`}>
    <a>by @{post.username}</a>
    </Link>
    </div> 
  )
}
export default PostItem;

import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header.js'
import Main from '../components/Main.js'
import Content from '../components/Content.js'
import Posts from '../components/Posts.js'
import Loader from '../components/Loader.js'
import { useRouter } from 'next/router';
import { groupQuery, postToJson } from '../lib/hooks.js'
import { fromMillis } from '../firebase/firebase.config.js'

//export async function getStaticProps() {
//  console.log('props');
//  //return { props: { content: {items: "lol"}, query: { refs }}}
//  return { props: { content: {items: "lol"}, }}
//}
export const getServerSideProps = async (props) =>{
  //get all posts
  const postsQuery = groupQuery('posts').where('published', '==', true).orderBy('createdAt', 'desc').limit(10)
  //const postsQuery = firestore.collectionGroup('posts').where('published', '==', true)
  const posts = (await postsQuery.get()).docs.map(postToJson)

  return (
    { props: { posts } }
  )
}

export default function Home(props) {
  const router = useRouter();
  console.log(router.query.refs);
  const [posts,setPosts] = React.useState(props.posts)
  const [loading,setLoading] = React.useState(false)
  const getMore = async () =>{
    setLoading(true);
    const last = posts[posts.length-1]
    const cursor = typeof last.createdAt==='number' ? fromMillis(last.createdAt) : last.createAt;
    const query = groupQuery('posts').where('published','==', true).orderBy('createdAt', 'desc').startAfter(cursor).limit(10);
    const newPosts = (await query.get()).docs.map((doc)=>{
      return doc.data();
    })
    setPosts(posts.concat(newPosts))
    setLoading(false)
  }
  return (
    <div className={styles.container}>
    <Header refr="home">
      <Head>
        <title>lol Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Header>
    <Main props={props}>
    {/* <Content items={props.content.items}/> */}
    <Posts posts={props.posts} />
    {
    !loading && <button onClick={getMore}>get more</button>
    }
    <Loader show={loading} />
    </Main>
</div>)}

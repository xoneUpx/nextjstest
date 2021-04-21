import React from 'react'
import { useRouter } from 'next/router'
import  userContext  from '../../lib/context.js'
import AuthCheck from '../../components/AuthCheck.js'
import Posts from '../../components/Posts.js'
import { auth, serverTimestamp, firestore } from '../../firebase/firebase.config.js'
import { useCollection } from 'react-firebase-hooks/firestore';
import kebabCase from 'lodash.kebabcase'
import toast from 'react-hot-toast'

const AdminPost = (props) =>{
  return (
    <AuthCheck>
    <PostList />
    <CreatePost />
    </AuthCheck>

  )
}
const CreatePost = (props) => {
  const router = useRouter();
  const  { username } = React.useContext(userContext);
  const [ title, setTitle] = React.useState('');
  const slug = encodeURI(kebabCase(title))
  const createPost = async (e) =>{
    e.preventDefault();
    const uid = auth.currentUser.uid;
    const ref = firestore.collection('users').doc(uid).collection('posts').doc(slug);
    const data = {
      title, slug, username, uid, published: false, content: 'placeholder', createdAt: serverTimestamp(), updatedAt: serverTimestamp(),
    }
    await ref.set(data)
    toast.success('created!')
    setTitle('')
    router.push(`/admin/${slug}`)
  }

  return (
  <>
    <form onSubmit = {createPost}>
    <input
    value={title}
    placeholder='lol'
    onChange = {(e) => {
      setTitle(e.target.value)
    }}
    
    />
    <button type="submit">
    Create
    </button>
    <p>
    Slug: {slug}
    </p>

    </form>
    </>
  )
  
}
const PostList = (props) => {
  const ref = firestore.collection('users').doc(auth.currentUser.uid).collection('posts');
  const query = ref.orderBy('createdAt');
  const [querySnapshot] = useCollection(query);
  const posts = querySnapshot?.docs.map(post => { return post.data()})
  return (
    <>
    <Posts posts={posts } admin />
    </>
  )

  }
export default AdminPost;

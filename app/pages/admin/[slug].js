import React from 'react';
import AuthCheck from '../../components/AuthCheck.js'
import ImageUploader from '../../components/ImageUploader.js'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useDocumentData } from 'react-firebase-hooks/firestore' 
import {firestore, auth, serverTimestamp } from '../../firebase/firebase.config.js'

const Edit = (props)=>{
  return (
    <>
    <AuthCheck>
    <PostManager />
    </AuthCheck>
    </>
  )
}
const PostManager = (props) => {
  const [preview, setPreview] = React.useState(false)
  const router = useRouter();
  const { slug } = router.query;
  const refPost = firestore.collection('users').doc(auth.currentUser.uid).collection('posts').doc(slug);
  const [post] = useDocumentData(refPost);
  return (
   <> 
    {
      post && 
      (<>
        <PostForm refPost={ refPost } defaultValues={post} preview={preview} />

        </>)
  
  }
  </>)
  
}
const PostForm = ({defaultValues,refPost,preview }) =>{
  const { handleSubmit, register, errors, formState, watch, reset } = useForm({defaultValues, mode: 'onChange'});
  const {isValid, isDirty } = formState; 
  const updatePost =async ({ content, published })=>{
    await refPost.update(
      {
        content, published, updatedAt: serverTimestamp() 
      }
    )
    reset({ content, published })
  }
  return (
    <form onSubmit={handleSubmit(updatePost)} >
    { preview && (
      <div>
      {watch('content')}
      </div>
    )
    }
    <div>
    <textarea name="content" {...register("content", {minLength:  10, required: true})}>
    </textarea>
    <ImageUploader />
    {
      formState.errors.content && (<p>error</p>)
    }
    <fieldset>
    <input name="published" type="checkbox" {...register("published")} />
    <label>Published</label>
    </fieldset>
    <button type="submit" disabled={!isDirty || !isValid}>
    Save
    </button>

    </div>
    </form>
  )
}
export default Edit; 

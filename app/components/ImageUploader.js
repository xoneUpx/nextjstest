import React, { useState } from 'react';
import  { auth, storage, STATE_CHANGED}  from '../firebase/firebase.config.js'
import Loader from './Loader.js'

const ImageUploader = (props)=>{
  const [ uploading, setUploading] = useState(false);
  const [ progress, setProgress] = useState(0);
  const [ downloadURL, setDownloadURL] = useState(null);
  const uploadFile = async (e) =>{
    const file = Array.from(e.target.files)[0]
    const extension = file.type.split('/')[1]
    const ref=storage.ref(`uploads/${auth.currentUser.uid}/${Date.now()}.${extension}`)
    setUploading(true)
    const task = ref.put(file)
    task.on(STATE_CHANGED, (snap)=>{
      const pct = ((snap.bytesTransferred / snap.totalBytes)*100).toFixed(0)
      setProgress(pct);
      task.then((d) => ref.getDownloadURL())
      .then(url => { setDownloadURL(url); setUploading(false)})
    })
  }
  return (
    <>
    <Loader show={uploading} />
    {uploading && <h2>{progress}%</h2>}
    {!uploading && <div><label>upload<input type="file" onChange={uploadFile} accept="image/x-png,image/gif,image/jpeg" /></label></div>}
    {downloadURL && <code>{`![alt](${downloadURL})`}</code>}
    </>
  )
}
export default ImageUploader;

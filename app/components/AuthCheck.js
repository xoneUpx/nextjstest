import React, { useContext } from 'react';
import  UserContext  from '../lib/context.js'
import Link from 'next/link'

const AuthCheck = (props)=>{
  const { username } = useContext(UserContext)
  return (
    username ? props.children : props.fallback || 
    <Link href="/login">
    <a>login first!</a>
    </Link>
  )
}
export default AuthCheck;

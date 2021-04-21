import React from 'react';
import Link from 'next/link';
const Main = (props)=> {
  return (
    <div>
    <h1>Main</h1>
    {props.children}
    <Link href="/lulz">
    <a>go to route</a>
    </Link>
    </div> 
  )
}
export default Main;

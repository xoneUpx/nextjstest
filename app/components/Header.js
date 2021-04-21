import Link from 'next/link';
import React from 'react';
import Loader from './Loader.js';
const Header = (props)=> {
  return (
    <div>
    <Loader show={false} />
    <h1>Header</h1>
    {props.children}
    <Link href="/header">
    <a>header from { props.refr }</a>
    </Link>
    </div> 
  )
}
export default Header;

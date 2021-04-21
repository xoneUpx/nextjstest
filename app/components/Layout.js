import React from 'react';
import Style from '../styles/Layout.js';
const Layout= (props)=> {
  return (
    <>
    <header>layout test</header> 
    {props.children}
    <style jsx>
    {Style}
    </style>
    </>
  )
}
export default Layout;

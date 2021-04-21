import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import importer from '../lib/import-from-backend.js';
import toast from 'react-hot-toast';

const Lulz = (props)=> { 
  return (<div>
    <h1>lulz { props.items}</h1><Link href="/"><a>home</a></Link>
    <style jsx>{
    `h1 {
    color: white; 
    }`
  }</style>
    <button onClick={()=> toast('test')}>
    test
    </button>
    </div>)}
export const getStaticProps = async () => {console.log('props'); const items= await importer("/test"); return { props: { items}}};
//export const getStaticProps = async () => { const items = await axios.get('http://test-backend:9900/'); return { props: { items}} };
export default Lulz;

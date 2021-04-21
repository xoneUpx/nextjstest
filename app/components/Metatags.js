import React from 'react';
import Head from 'next/head';

//add metatags for seo and sharing?
const Metatags = (props)=>{
  return (
    <Head>
    <title>{props.title}</title>
    </Head>
  )
}
export default Metatags;

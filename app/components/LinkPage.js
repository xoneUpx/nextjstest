import React from 'react';
import Link from 'next/link';

const LinkPage = (props) => { 
  return (<Link href={{
    pathname: props.path,
    query: { refs: props.refs},
  }}>
  <a>{props.text}</a>
  </Link>
  )}
export default LinkPage;

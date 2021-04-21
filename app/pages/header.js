import React from 'react';
import Link from 'next/link';
import header from '../styles/header.module.css' ;
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link_material from '@material-ui/core/Link';

const Header = (props)=> {
  return (
    <div className={header.header}>
    <Container >
    <Box>
    <ul>{ props.items.map((item) => { return <li key={item.id}><Link_material>{ item.data }</Link_material></li>})}</ul>
    {props.children}
    </Box>
    </Container>
    </div> 
  )
}
const Test = () => {  return  [{ id:1, data: "test"}]};
export  const getStaticProps = async () =>  {  const items = await Test(); console.log("items", items); return { props: { items }}}
export default Header;

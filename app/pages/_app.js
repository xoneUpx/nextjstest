import '../styles/globals.css';
import Layout from '../components/Layout.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react';
import Nav from '../components/Nav.js';
import { Toaster } from 'react-hot-toast';
import UserContext from '../lib/context.js';
import  userData  from '../lib/hooks.js';

Router.onRouteChangeStart = (url) => {
  console.log('change', url);
  NProgress.start();
}
Router.onRouterChangeComplete = () => {
  console.log('done');
  NProgress.done();
}
Router.onRouterChangeError = () =>{
  NProgress.done();
}
function MyApp({ Component, pageProps }) {
  const useData = userData();
  return (
    <UserContext.Provider value={useData}>
    <Layout>
    <Toaster />
    <Nav />
    <Head>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <h1>Head</h1>
    <CssBaseline />
    <Component {...pageProps} /></Layout>
  </UserContext.Provider>
)}

export default MyApp

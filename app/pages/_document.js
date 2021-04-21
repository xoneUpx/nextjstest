import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
//import 'nprogress/nprogress.css';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
          const initialProps = await Document.getInitialProps(ctx)
          return { ...initialProps }
        }

    render() {
          return (
                  <Html lang="en">
                    <Head>
                    <meta charSet="utf-8" />
                    </Head>
                    <body style={{background: 'red'}}>
                      <Main />
                      <NextScript />
                    </body>

                  </Html>
                )
        }
}

//export default MyDocument

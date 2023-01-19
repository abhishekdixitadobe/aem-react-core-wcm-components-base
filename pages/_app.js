import Head from "next/head";
import Script from 'next/script';
import React from 'react';


export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <Component {...pageProps} />
   </div>
  )
}

import React from "react";
import Head from "next/head";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

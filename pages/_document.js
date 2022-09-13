import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark" lang="en">
         <Head>
            <meta name="description" content="Pissar nocode token generator" />
            <link rel="icon" href="/verified.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ramaraja&display=swap" rel="stylesheet" /> */}
    </Head>
        <body className="bg-[#447a63] text-white max-w-md md:max-w-6xl mx-auto font-serif">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
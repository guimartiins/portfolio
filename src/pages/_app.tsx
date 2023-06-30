'use-client'

import { NavBar } from 'components/Navbar'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/global.css'
import { ThemeProvider } from 'next-themes'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App

import 'styles/globals.css'
import {Button, Navbar, Text, NextUIProvider} from '@nextui-org/react';
import {Box} from "../components/Box";
import Footer from "../components/Footer";
import Head from "next/head";

function Application({ Component, pageProps }) {

  return (
      <NextUIProvider>
          <Box
              css={{
                  maxW: "100%"
              }}
          >
              <Navbar isBordered={false} variant="sticky">
                  <Navbar.Brand>
                      <Text b color="inherit">
                          <code>liam.griffiths</code>
                      </Text>
                  </Navbar.Brand>
                  <Navbar.Content variant="underline">
                      <Navbar.Link href="/">Home</Navbar.Link>
                      <Navbar.Link href="/thoughts">Thoughts</Navbar.Link>
                      <Navbar.Link href="/experience">Experience</Navbar.Link>
                  </Navbar.Content>
              </Navbar>
              <div className="container">

                  <Head>
                      <title>Liam Griffiths</title>
                      <link rel="icon" href="/favicon.ico" />
                  </Head>

                  <main>

                <Component {...pageProps} />

                  </main>
                  <Footer />
              </div>
          </Box>
      </NextUIProvider>
  )
}

export default Application;
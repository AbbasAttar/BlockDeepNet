import { LoginContext } from "../components/LoginContext";
import { useState } from "react";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { Container } from "semantic-ui-react";

function myApp({ Component, pageProps }) {
  const [userName, setUserName] = useState("");
  const [userPAddress, setUserPAddress] = useState("");
  return (
    <LoginContext.Provider
      value={{ userName, userPAddress, setUserName, setUserPAddress }}
    >
      <Container style={{ margin: "20px" }}>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
            integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ=="
            crossOrigin="anonymous"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
      </Container>
      <Footer />
    </LoginContext.Provider>
  );
}

export default myApp;

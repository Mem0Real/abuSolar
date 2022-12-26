import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/f2";

export default function Layout({ children }) {
  const [width, height] = useDeviceSize();

  return (
    <>
      <Head>
        <title>Abu Solar Technology</title>
        <meta name="description" content="Solar Systems Provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar width={width} height={height} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer width={width} height={height} />
      </footer>
    </>
  );
}

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};

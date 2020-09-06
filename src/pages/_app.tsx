import React from "react";
import "../global.css";
import { AppProps } from "next/app";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default MyApp;

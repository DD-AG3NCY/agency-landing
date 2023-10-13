import React from "react";
import { NextPage } from "next";
import Layout from "../components/layout";
import "@gordo-d/d-d-ui-components/styles.css";
import "../styles/globals.css";

const defaultLayout = (page) => {
  return <Layout>{page}</Layout>;
};

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? defaultLayout;
  return <div id="ui-root">{getLayout(<Component {...pageProps} />)}</div>;
}

export default App;

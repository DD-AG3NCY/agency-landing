import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

import "@gordo-d/d-d-ui-components/styles.css";
import "../styles/globals.css";

import Layout from "../components/layout";
import React from "react";

const defaultLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultLayout;
  return <div id="ui-root">{getLayout(<Component {...pageProps} />)}</div>;
}

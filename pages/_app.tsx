import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

import "../styles/globals.css";
import "@gordo-d/d-d-ui-components/styles.css";

import Layout from "../components/layout";
import { Page } from "@/types/pages";
import React from "react";

const defaultLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

type AppPropsWithLayout = AppProps & {
  Component: any;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultLayout;
  return <div id="ui-root">{getLayout(<Component {...pageProps} />)}</div>;
}

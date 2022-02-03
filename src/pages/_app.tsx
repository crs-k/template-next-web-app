import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import React from 'react';
import '../styles/globals.css';
import {ThemeProvider} from 'next-themes';
import type {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import Layout from '@/components/Layout';
import NavBar from '@/components/Nav';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);
  return getLayout(
    <>
      <ThemeProvider attribute="class">
        <Layout>
          <NavBar />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

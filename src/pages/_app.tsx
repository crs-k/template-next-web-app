import '@/styles/globals.css';
import type {AppProps} from 'next/app';

import {ThemeProvider} from 'next-themes';
import {lightTheme, darkTheme} from '../themes/lightDark';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';

import type {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';

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
      <ThemeProvider
        defaultTheme="light"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <Layout>
          <Sidebar />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

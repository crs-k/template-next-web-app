import '@/styles/globals.css';
import type {ReactElement, ReactNode} from 'react';
import type {AppProps} from 'next/app';
import type {NextPage} from 'next';
import {SessionProvider} from 'next-auth/react';
import {ThemeProvider} from 'next-themes';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({
  Component,
  pageProps: {session, ...pageProps}
}: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <SessionProvider
      session={session}
      // Re-fetch session every 5 minutes
      refetchInterval={5 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={true}
    >
      {getLayout(
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </SessionProvider>
  );
}

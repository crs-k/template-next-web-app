import {SessionProvider} from 'next-auth/react';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';
import type {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import '@/styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) {
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

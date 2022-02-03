import React, {ReactNode} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({children, title = 'This is the default title'}: Props) => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        |{' '}
        <Link href="/api/users">
          <a>Users API</a>
        </Link>
      </nav>
    </header>
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      {children}
    </main>
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} className="h-4 ml-2" />
      </a>
    </footer>
  </div>
);

export default Layout;

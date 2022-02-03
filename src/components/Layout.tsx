import React, {ReactNode} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({children, title = 'This is the default title'}: Props) => {
  //const {theme} = useTheme();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>{children}</main>
      <footer>
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
};

export default Layout;

import Link from 'next/link';
import Head from 'next/head';

const AboutPage = () => (
  <div>
    <Head>
      <title>About</title>
      <meta property="og:title" content="About" key="title" />
    </Head>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </div>
);

export default AboutPage;

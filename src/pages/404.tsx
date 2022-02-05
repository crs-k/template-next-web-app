import Link from 'next/link';
import {Layout} from '../components/Layout';

const Custom404 = () => (
  <Layout title="404">
    <h1>404 - Page Not Found</h1>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default Custom404;

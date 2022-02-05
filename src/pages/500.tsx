import Link from 'next/link';
import {Layout} from '../components/Layout';

const Custom500 = () => (
  <Layout title="404">
    <h1>500 - Server-side error occurred</h1>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default Custom500;

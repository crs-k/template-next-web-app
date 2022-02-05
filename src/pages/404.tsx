import {Layout} from '../components/Layout';
import Link from 'next/link';

export default function Custom404(): JSX.Element {
  return (
    <Layout title="404">
      <h1>404 - Page Not Found</h1>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
}

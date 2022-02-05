import {Layout} from '../components/Layout';
import Link from 'next/link';

export default function Custom500(): JSX.Element {
  return (
    <Layout title="404">
      <h1>500 - Server-side error occurred</h1>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
}

import {Layout} from '../components/Layout';
import Link from 'next/link';

export default function Page(): JSX.Element {
  return (
    <Layout title="About">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
}

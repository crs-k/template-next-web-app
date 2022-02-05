import {getSession, useSession} from 'next-auth/react';
import {GetServerSideProps} from 'next';
import {Layout} from '../components/Layout';
import type {Session} from 'next-auth';

export default function Page(): JSX.Element {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  // This is possible because of the shared context configured in `_app.js` that
  // is used by `useSession()`.

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {data: session, status} = useSession();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loading = status === 'loading';

  return (
    <Layout>
      <h1>Server Side Rendering</h1>
      <p>
        This page uses the universal <strong>getSession()</strong> method in{' '}
        <strong>getServerSideProps()</strong>.
      </p>
      <p>
        Using <strong>getSession()</strong> in <strong>getServerSideProps()</strong> is the
        recommended approach if you need to support Server Side Rendering with authentication.
      </p>
      <p>
        The advantage of Server Side Rendering is this page does not require client side JavaScript.
      </p>
      <p>The disadvantage of Server Side Rendering is that this page is slower to render.</p>
    </Layout>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export const getServerSideProps: GetServerSideProps<{
  session: Session | null;
}> = async context => {
  return {
    props: {
      session: await getSession(context)
    }
  };
};
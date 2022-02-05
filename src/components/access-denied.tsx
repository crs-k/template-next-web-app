import Link from 'next/link';
import {signIn} from 'next-auth/react';

export default function AccessDenied(): JSX.Element {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <Link href="/api/auth/signin">
          <a
            onClick={e => {
              e.preventDefault();
              signIn();
            }}
          >
            You must be signed in to view this page
          </a>
        </Link>
      </p>
    </>
  );
}

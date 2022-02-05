import React, {ReactNode} from 'react';
import Footer from './footer';
import Header from './header';

interface Props  {
  children?: ReactNode;
  title?: string;
}

export const Layout = ({children, title = 'Default'}: Props): JSX.Element => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Header />
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      {children}
    </main>
    <Footer />
  </div>
);

//export default Layout;

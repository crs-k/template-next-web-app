import React, {ReactNode} from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({children, title = 'Default'}: Props) => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Header />
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;

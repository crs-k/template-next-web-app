import {darkToggle} from '../utils/themeChanger';
import Link from 'next/link';
import styles from './sidebar.module.css';
import {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};
const Sidebar = ({children, title = 'This is the default title'}: Props) => (
  <header>
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/users">
        <a>Users List</a>
      </Link>

      <Link href="/api/users">
        <a>Users API</a>
      </Link>

      <Link href="/">
        <a onClick={darkToggle()}>☄️</a>
      </Link>
    </nav>
  </header>
);

export default Sidebar;

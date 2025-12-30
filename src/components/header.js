import React from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          ON
        </Link>
        <div className={styles.links}>
          <Link to="/" className={styles.navLink} activeClassName={styles.active}>About</Link>
          <Link 
            to="/blog" 
            className={styles.navLink} 
            activeClassName={styles.active}
            partiallyActive={true}  // This ensures the link stays active on blog sub-pages
          >
            Blog
          </Link>
          <Link to="/podcast" className={styles.navLink} activeClassName={styles.active}>Podcast</Link>
          <Link to="/projects" className={styles.navLink} activeClassName={styles.active}>Projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
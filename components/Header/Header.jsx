import React from 'react';
import { Navigation } from './Navigation/Navigation';
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};

export { Header };

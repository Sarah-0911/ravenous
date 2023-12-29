import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.heroBanner}>
      <SearchBar />
    </div>
  )
};

export default Header;

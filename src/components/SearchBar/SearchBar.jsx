import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const sortingByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.filters}>
        {Object.keys(sortingByOptions).map(sortingByOption => {
          let sortingByOptionValue = sortingByOptions[sortingByOption];
          return <li className={styles.options} key={sortingByOptionValue}>{sortingByOption}</li>
        })}
      </div>
      <div className={styles.inputs}>
        <input type="text" className={styles.input} placeholder="Search Businesses" />
        <input type="text" className={styles.input} placeholder="Where?" />
      </div>
      <button className={styles.go}>Let's go</button>
    </div>
  );
}

export default SearchBar;

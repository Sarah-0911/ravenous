import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const sortingByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortingOption, setsortingOption] = useState(sortingByOptions['Best Match']);

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = e => {
    setLocation(e.target.value);
  };

  const handleSortingOption = newOption => {
    setsortingOption(sortingByOptions[newOption]);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.filters}>
        {Object.keys(sortingByOptions).map(sortingByOption => {
          let sortingByOptionValue = sortingByOptions[sortingByOption];
          return (
            <li
              className={styles.options}
              onClick={() => handleSortingOption(sortingByOption)}
              key={sortingByOptionValue}
            >
              {sortingByOption}
            </li>
          );
        })}
      </div>
      <div className={styles.inputs}>
        <input
          type="text"
          className={styles.input}
          placeholder="Search Businesses"
          onChange={handleSearchTermChange}
          value={searchTerm}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Where?"
          onChange={handleLocationChange}
          value={location}
          />
      </div>
      <button className={styles.go}>Let's go</button>
    </div>
  );
}

export default SearchBar;

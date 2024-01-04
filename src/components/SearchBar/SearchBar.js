import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const SORTING_OPTIONS = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortingOption, setsortingOption] = useState(SORTING_OPTIONS['Best Match']);

  const handleTermChange = e => {
    setTerm(e.target.value);
  };

  const handleLocationChange = e => {
    setLocation(e.target.value);
  };

  const handleSortOptionChange = newOption => {
    setsortingOption(SORTING_OPTIONS[newOption]);
  };

  const handleSearchButtonClick = () => {
    console.log(`Search Term: ${term}`);
    console.log(`Location: ${location}`);
    console.log(`Sort Option: ${sortingOption}`);
  }

  // const handleClickOption = option => {
  //     option.target.innertext =
  // };

  return (
    <div className={styles.searchBar}>
      <div className={styles.filters}>
        {Object.keys(SORTING_OPTIONS).map(sortingByOption => {
          return (
            <li
              className={styles.options}
              onClick={() => handleSortOptionChange(sortingByOption)}
              key={SORTING_OPTIONS[sortingByOption]}
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
          onChange={handleTermChange}
          value={term}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Where?"
          onChange={handleLocationChange}
          value={location}
          />
      </div>
      <button onClick={handleSearchButtonClick} className={styles.go}>Let's go</button>
    </div>
  );
}

export default SearchBar;

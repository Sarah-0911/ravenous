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
  const [sortOption, setsortOption] = useState(SORTING_OPTIONS['Best Match']);
  const [activeOption, setActiveOption] = useState(null);

  const handleTermChange = e => {
    setTerm(e.target.value);
  };

  const handleLocationChange = e => {
    setLocation(e.target.value);
  };

  const handleSortOptionChange = newOption => {
    setsortOption(SORTING_OPTIONS[newOption]);
    setActiveOption(newOption);
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    console.log(`Searching Yelp with ${term}, ${location}, ${sortOption}`);
  }

  const renderSortByOptions = () => {
    return Object.keys(SORTING_OPTIONS).map(sortingByOption => {
      const isActive = sortingByOption === activeOption;
      return (
        <li
          className={`${styles.options} ${isActive? styles.active : ""}`}
          onClick={() => handleSortOptionChange(sortingByOption)}
          key={SORTING_OPTIONS[sortingByOption]}
        >
          {sortingByOption}
        </li>
      );
    });
  };

  return (
    <div className={styles.searchBar}>
      <ul className={styles.filters}>{renderSortByOptions()}</ul>
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
      <button
        onClick={handleSearchButtonClick}
        className={styles.go}
      >
        Let's go
      </button>
    </div>
  );
}

export default SearchBar;

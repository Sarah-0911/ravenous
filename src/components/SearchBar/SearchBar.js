import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = props => {
  const SORTING_OPTIONS = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortOption, setsortOption] = useState(SORTING_OPTIONS['Best Match']);
  const [activeOption, setActiveOption] = useState(null);
  const [enterPressed, setEnterPressed] = useState(false);

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

  const handleSearchButtonClick = async event => {
    event.preventDefault();
    try {
      const businesses = await props.onSearch(term, location, sortOption);
      if (businesses) {
        console.log(businesses);
      } else {
        console.log("the function returned undefined or null");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchButtonClick(event);
      setEnterPressed(true);
    }
    setTimeout(() => {
      setEnterPressed(false);
    }, 400);
  };

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
    <div className={styles.heroBanner}>
      <ul className={styles.filters}>{renderSortByOptions()}</ul>
      <div className={styles.inputs}>
        <input
          type="text"
          className={styles.input}
          placeholder="Search Businesses"
          onChange={handleTermChange}
          onKeyDown={handleKeyDown}
          value={term}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Where?"
          onChange={handleLocationChange}
          onKeyDown={handleKeyDown}
          value={location}
        />
      </div>
      <button
        onClick={handleSearchButtonClick}
        className={`${styles.go} ${enterPressed ? styles.enterPressed : ""}`}
      >
        Let's go
      </button>
    </div>
  );
}

export default SearchBar;

import React from 'react';
import './SearchBar.css';

function SearchBar() {
  const sortingByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  return (
    <div className="search-bar">
      <div className="filters">
        {Object.keys(sortingByOptions).map(sortingByOption => {
          let sortingByOptionValue = sortingByOptions[sortingByOption];
          return <li className='sorting-options' key={sortingByOptionValue}>{sortingByOption}</li>
        })}
      </div>
      <div className='search-inputs'>
        <input type="text" className='search-input' placeholder="Search Businesses" />
        <input type="text" className='search-input' placeholder="Where?" />
      </div>
      <button className="go">Let's go</button>
    </div>
  );
}

export default SearchBar;

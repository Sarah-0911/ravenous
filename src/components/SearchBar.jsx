import React from 'react';
import './SearchBar.css';

function SearchBar() {
  const sortingOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  return (
    <div className="search-bar">
      <div className="filters">
        {Object.entries(sortingOptions).map(([label, value]) => (
          <li className='sorting-options' key={value}>{label}</li>
        ))}
      </div>
      <div className='search-inputs'>
        <div>
          {/* <label htmlFor="userSearchTerm">Search Term</label> */}
          <input type="text" id="userSearchTerm" className='search-input' placeholder="Search Businesses" />
        </div>
        <div>
          {/* <label htmlFor="selectedLocation">Location</label> */}
          <input type="text" id="selectedLocation" className='search-input' placeholder="Where?" />
        </div>
      </div>
      <button className="go">Let's go</button>
    </div>
  );
}

export default SearchBar;

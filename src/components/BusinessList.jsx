import React from 'react';
import Business from './Business';
import './BusinessList.css';

function BusinessList() {
  const restaurantsArray = Array.from({length: 12},
  () => <Business />);
  const businessListItems = restaurantsArray.map((restaurant,index) =>
  <li key={index}>{restaurant}</li>);

  return <ul className="business-list-grid">{businessListItems}</ul>;
}

export default BusinessList;

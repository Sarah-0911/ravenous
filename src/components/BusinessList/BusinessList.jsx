import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

function BusinessList(props) {
  const restaurantsArray = Array.from({length: 12},
  () => <Business business={props.business} />);
  const businessListItems = restaurantsArray.map((restaurant,index) =>
  <li key={index}>{restaurant}</li>);

  return <ul className={styles.grid}>{businessListItems}</ul>;
}

export default BusinessList;

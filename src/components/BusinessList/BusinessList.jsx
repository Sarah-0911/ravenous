import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

function BusinessList(props) {
  const businessListItems = props.businessesArray.map((restaurant,index) =>
  <li key={index}><Business business={restaurant} /></li>);

  return <ul className={styles.grid}>{businessListItems}</ul>;
}

export default BusinessList;

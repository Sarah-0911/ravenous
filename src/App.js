import React from 'react';
import styles from './App.module.css'
import BusinessList from './components/BusinessList/BusinessList';
import Header from './components/Header/Header';

function App() {

  const business = {
    imageSrc: "images/pokebowl.jpg",
    name: "Pokawa",
    address: "12 Independence Avenue",
    city: "Bordertown",
    state: "NY",
    zipCode: "10101",
    category: "Hawaii",
    rating: 4.5,
    reviewCount: 90
  }
  return (
    <div>
      <h1 className={styles.title}>ravenous</h1>
      <Header />
      <BusinessList business={business} />
    </div>

  );
}

export default App;

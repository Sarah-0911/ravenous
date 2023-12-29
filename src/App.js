import React from 'react';
import styles from './App.module.css'
import BusinessList from './components/BusinessList/BusinessList';
import Header from './components/Header/Header';

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
};

const businesses = [business, business, business, business, business, business];

const App = () => {
  return (
    <div>
      <h1 className={styles.title}>ravenous</h1>
      <Header />
      <BusinessList businessesArray={businesses} />
    </div>
  );
}

export default App;

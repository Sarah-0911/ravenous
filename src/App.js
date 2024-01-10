// import pokebowlImage from "./assets/pokebowl.jpg";
import React, { useState } from 'react';
import styles from './App.module.css'
import searchYelp from './utils/yelpApi';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Footer from './components/Footer/Footer';

const App = () => {
  const [ searchResults, setSearchResults ] = useState([]);

  const performSearch = async (term, location, sortBy) => {
    try {
      const businesses = await searchYelp(term, location, sortBy);
      setSearchResults(businesses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className={styles.title}>ravenous</h1>
      <SearchBar onSearch={performSearch} />
      <BusinessList businessesArray={searchResults} />
      <Footer />
    </div>
  );
}

export default App;

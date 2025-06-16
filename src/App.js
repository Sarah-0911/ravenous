// import pokebowlImage from "./assets/pokebowl.jpg";
import React, { useState } from 'react';
import styles from './App.module.css'
import searchYelp from './utils/yelpApi';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Footer from './components/Footer/Footer';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const performSearch = async (term, location, sortBy) => {
    try {
      setIsLoading(true);
      const businesses = await searchYelp(term, location, sortBy);
      setSearchResults(businesses);
      setIsLoading(false);
      return businesses;

    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>ravenous</h1>
      </div>
      <SearchBar onSearch={performSearch} />
      <BusinessList isLoading={isLoading} businessesArray={searchResults} />
      <Footer />
    </div>
  );
}

export default App;

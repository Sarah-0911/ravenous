import React,{ useState } from 'react';
import styles from './App.module.css'
import BusinessList from './components/BusinessList/BusinessList';
// import pokebowlImage from "./assets/pokebowl.jpg";
import SearchBar from './components/SearchBar/SearchBar';
import searchYelp from './utils/yelpApi';

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
    </div>
  );
}

export default App;

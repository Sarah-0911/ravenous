import React from 'react';
import styles from './App.module.css'
import BusinessList from './components/BusinessList/BusinessList';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <h1 className={styles.title}>ravenous</h1>
      <Header />
      <BusinessList />
    </div>

  );
}

export default App;

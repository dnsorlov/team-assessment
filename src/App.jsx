import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

import styles from './App.module.scss'

const App = () =>
  <div className={styles.app}>
    <Header/>
    <List/>
    <Footer/>
    <Sidebar/>
  </div>;

export default App;

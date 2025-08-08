import React from 'react';

import styles from './App.module.scss'
import Header from './Header/Header';
import AppRoutes from '../AppRoutes/AppRoutes';
import Footer from './Footer/Footer';

const App: React.FC = () => {
  return (
    <div className={styles.container}>

      <Header />

      <div>
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};

export default App;
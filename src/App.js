import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import styles from './app.module.scss'

import Home from './pages/Home/Home';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Simple from './components/Features/Simple';
import Speedy from './components/Features/Speedy';
import Easy from './components/Features/Easy';
import ModalPop from './components/Modal/Modal';


function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setModalIsOpen(true);
        }, 30000);

        return () => clearTimeout(timeout);
    }, []);

    const handleMouseEnter = () => {
        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
    };



  return (
    <body className={styles.brake}>
      <div className={styles.modal} onMouseEnter={handleMouseEnter}>
        <ModalPop isOpen={modalIsOpen} onRequestClose={handleModalClose} />
      </div>
            

      <Header />
      <Routes>
      <Route path="*" element={<Home />}/>
        <Route path="/" element={<Home />}>
          <Route path="/simple" element={<Simple />}/>
          <Route path="/speedy" element={<Speedy />}/>
          <Route path="/easy" element={<Easy />}/>
        </Route>
      </Routes>
      <Footer />
    </body>
  );
}

export default App;

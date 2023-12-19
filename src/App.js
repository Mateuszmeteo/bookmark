import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

import styles from './app.module.scss'
import { Route, Routes } from 'react-router-dom';
import Simple from './components/Features/Simple';
import Speedy from './components/Features/Speedy';
import Easy from './components/Features/Easy';

function App() {
  return (
    <body className={styles.brake}>
      <Header />
      <Routes>
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

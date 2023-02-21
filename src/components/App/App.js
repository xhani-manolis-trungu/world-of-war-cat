import { Route, Routes } from 'react-router-dom';


import Layout from '../Common/Layout';
import Intro from '../Intro/Intro';
import Modal from '../Modal/Modal/Modal';
import WoW from '../Pages/WoW/WoW';

import '../../assets/styles/_media.scss';
import '../../assets/styles/_style.scss';
import ScrollToTop from '../../hooks/scrollToTop';
import NoFoundPage from '../Pages/NoFoundPage/NoFoundPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="app-wrapper">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Intro />} />
          <Route path="/WoW" element={<WoW />} >
          </Route>
            <Route path="/WoW/:id/search?" element={<Modal />} />
          <Route path="*" element={<NoFoundPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Layout from '../Common/Layout';
import Intro from '../Intro/Intro';
import WoW from '../Pages/WoW/WoW';

import NoFoundPage from '../Pages/NoFoundPage/NoFoundPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Intro />} />
          <Route path="/WoW" element={<WoW />} />
          <Route path="*" element={<NoFoundPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

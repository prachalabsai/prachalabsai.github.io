
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Journal } from './pages/Journal';
import { Articles } from './pages/Articles';
import { Lab } from './pages/Lab';
import { Tools } from './pages/Tools';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="journal" element={<Journal />} />
          <Route path="tracker" element={<Lab />} />
          <Route path="articles" element={<Articles />} />
          <Route path="tools" element={<Tools />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;


import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Tools } from './pages/Tools';
import { Synthesis } from './pages/Synthesis';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="synthesis" element={<Synthesis />} />
          <Route path="tools" element={<Tools />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;


import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Tools } from './pages/Tools';
import { Canvas } from './pages/Canvas';
import { Pracha } from './pages/Pracha';
import { Threads } from './pages/Threads';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="canvas" element={<Canvas />} />
          <Route path="tools" element={<Tools />} />
          <Route path="threads" element={<Threads />} />
          <Route path="pracha" element={<Pracha />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Charter } from './pages/Charter';
import { Ecology } from './pages/Ecology';
import { Writing } from './pages/Writing';
import { Post } from './pages/Post';
import { Work } from './pages/Work';
import { Pracha } from './pages/Pracha';
import { NotFound } from './pages/NotFound';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="charter" element={<Charter />} />
          <Route path="ecology" element={<Ecology />} />
          <Route path="writing" element={<Writing />} />
          <Route path="writing/:slug" element={<Post />} />
          <Route path="work" element={<Work />} />
          <Route path="pracha" element={<Pracha />} />
          {/* Legacy routes from the previous site */}
          <Route path="tools" element={<Navigate to="/work" replace />} />
          <Route path="canvas" element={<Navigate to="/charter" replace />} />
          <Route path="threads" element={<Navigate to="/writing" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

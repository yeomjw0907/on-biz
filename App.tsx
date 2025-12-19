import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Board } from './pages/Board';
import { BoardDetail } from './pages/BoardDetail';
import { BoardEdit } from './pages/BoardEdit';
import { BoardProvider } from './context/BoardContext';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BoardProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-slate-50 selection:bg-amber-200">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/board" element={<Board />} />
              <Route path="/board/write" element={<BoardEdit />} />
              <Route path="/board/:id" element={<BoardDetail />} />
              <Route path="/board/edit/:id" element={<BoardEdit />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BoardProvider>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* <div style={{ color: 'red' }}>HELLO TEST</div> */}

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

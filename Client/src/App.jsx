import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Lazy load the Fade, Genre, Header, and Footer components
const LazyFade = React.lazy(() => import('./components/Fade'));
const LazyGenre = React.lazy(() => import('./components/Genre'));
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const SearchResults = React.lazy(() => import('./components/SearchResults'));

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className='h-full w-full flex flex-col overflow-hidden'>
        <Navbar setSearchTerm={setSearchTerm} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <LazyFade />
                <LazyGenre />
                <Footer />
              </>
            } />
            <Route path="/search" element={<SearchResults searchTerm={searchTerm} />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;





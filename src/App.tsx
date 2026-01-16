import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { useLayoutEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import React from 'react';

const About = lazy(() => import('./pages/About'));
const Awards = lazy(() => import('./pages/Awards'));
const News = lazy(() => import('./pages/News'));
const NewsDetails = lazy(() => import('./pages/NewsDetails'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const PortfolioDetails = lazy(() => import('./pages/PortfolioDetails'));

// ScrollToTop – smooth but instant on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Force instant scroll to top without smooth behavior flicker
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    // Restore smooth scrolling after paint
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = '';
    });
  }, [pathname]);

  return null;
}

// Wrapper to force remount PortfolioDetails on :id change
function PortfolioDetailsWithRemount() {
  const { id } = useParams<{ id: string }>();
  return <PortfolioDetails key={id} />;
}

// Wrapper to force remount NewsDetails on :slug change
function NewsDetailsWithRemount() {
  const { slug } = useParams<{ slug: string }>();
  return <NewsDetails key={slug} />;
}

// Loading fallback component for better UX
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-neutral-300 border-t-neutral-600 rounded-full animate-spin" />
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={isHomePage ? '' : 'min-h-screen'}>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        } />
        
        <Route path="/awards" element={
          <Suspense fallback={<LoadingFallback />}>
            <Awards />
          </Suspense>
        } />
        
        <Route path="/news" element={
          <Suspense fallback={<LoadingFallback />}>
            <News />
          </Suspense>
        } />
        
        <Route path="/news/:slug" element={
          <Suspense fallback={<LoadingFallback />}>
            <NewsDetailsWithRemount />
          </Suspense>
        } />
        
        <Route path="/portfolio" element={
          <Suspense fallback={<LoadingFallback />}>
            <Portfolio />
          </Suspense>
        } />
        
        <Route path="/portfolio/:id" element={
          <Suspense fallback={<LoadingFallback />}>
            <PortfolioDetailsWithRemount />
          </Suspense>
        } />
      </Routes>
      
      {!isHomePage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
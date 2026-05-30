import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './utils/auth';

// Layout & Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import SparklesAiBot from './components/SparklesAiBot';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import HundredDaysCode from './pages/HundredDaysCode';
import Trending from './pages/Trending';
import Shorts from './pages/Shorts';
import Profile from './pages/Profile';
import Watch from './pages/Watch';
import CreatorDashboard from './pages/CreatorDashboard';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Analytics from './pages/Analytics';
import AIRecommendations from './pages/AIRecommendations';

// Scroll to Top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Admin route protector
const AdminRoute = ({ children }) => {
  const { user, isLoading, isAdmin } = useAuth();
  
  if (isLoading) return <LoadingScreen duration={500} />;
  
  if (!user || !isAdmin) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const hideFooter = location.pathname.startsWith('/shorts') || location.pathname === '/login';

  return (
    <>
      {showLoading && <LoadingScreen />}
      <ScrollToTop />
      
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
        <Navbar />
        
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/100-days-code" element={<HundredDaysCode />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/login" element={<Login />} />
            
            {/* Creator & Admin routes */}
            <Route path="/creator-dashboard" element={<CreatorDashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/ai-recommendations" element={<AIRecommendations />} />
            <Route 
              path="/admin" 
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } 
            />
          </Routes>
        </main>
        
        {!hideFooter && <Footer />}
        
        {/* Floating AI chatbot assistant */}
        <SparklesAiBot />
      </div>
    </>
  );
};

export default App;

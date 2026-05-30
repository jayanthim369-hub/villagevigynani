import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import { Menu, X, LogIn, LogOut, Shield, Search } from 'lucide-react';

/**
 * Navbar - Premium glassmorphic responsive header.
 */
const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/trending?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'glass-nav' : ''}`}>
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span>⚡</span>Vignani Hub
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/courses" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Courses</NavLink>
          <NavLink to="/100-days-code" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>100 Days Code</NavLink>
          <NavLink to="/trending" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Videos</NavLink>
          <NavLink to="/shorts" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Shorts</NavLink>
          <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Creator Profile</NavLink>
        </div>

        {/* Actions (Search, Admin Shield, User Profile, Auth Buttons) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="search-container">
            <Search className="search-icon" size={16} />
            <input 
              type="text" 
              placeholder="Search IoT Projects..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* Admin Dashboard Quick Link */}
          {isAdmin && (
            <Link to="/admin" className="btn-icon" title="Admin Dashboard" style={{ color: 'var(--neon-red)' }}>
              <Shield size={20} />
            </Link>
          )}

          {/* User Section / Login Button */}
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="creator-avatar" title={user.name}>
                {user.name ? user.name[0].toUpperCase() : 'U'}
              </div>
              <button onClick={logout} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
                <LogOut size={14} /> Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
              <LogIn size={14} /> Login
            </Link>
          )}

          {/* Hamburger Icon */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Glass sidebar) */}
      {mobileMenuOpen && (
        <div className="glass" style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 70px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 30px',
          gap: '24px',
          animation: 'slideUp 0.3s ease-out'
        }}>
          {/* Mobile search */}
          <form onSubmit={handleSearchSubmit} style={{ position: 'relative', width: '100%' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--white-dark)' }} size={16} />
            <input 
              type="text" 
              placeholder="Search IoT Projects..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', paddingLeft: '38px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }}
            />
          </form>

          <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '1.2rem' }}>Home</NavLink>
          <NavLink to="/courses" onClick={() => setMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '1.2rem' }}>Courses</NavLink>
          <NavLink to="/100-days-code" onClick={() => setMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '1.2rem' }}>100 Days Code</NavLink>
          <NavLink to="/trending" onClick={() => setMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '1.2rem' }}>Videos</NavLink>
          <NavLink to="/shorts" onClick={() => setMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '1.2rem' }}>Shorts</NavLink>
          <NavLink to="/profile" onClick={() => setMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '1.2rem' }}>Creator Profile</NavLink>
          {isAdmin && (
            <NavLink to="/admin" onClick={() => setMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '1.2rem', color: 'var(--neon-red)' }}>Admin Panel</NavLink>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;

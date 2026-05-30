import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Mail, Github, Heart, Cpu } from 'lucide-react';

/**
 * Footer - Premium glassmorphic footer linking to YouTube, socials, and site pages.
 */
const Footer = () => {
  return (
    <footer className="glass" style={{ borderTop: '1px solid var(--glass-border)', padding: '60px 4% 30px 4%', position: 'relative', zIndex: 10 }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: '40px',
        marginBottom: '40px'
      }} className="grid-2">
        {/* About Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Cpu size={24} color="var(--neon-red)" />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800' }}>Vignani Hub</h3>
          </div>
          <p style={{ color: 'var(--white-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '24px', maxWidth: '400px' }}>
            Village Vignani is an elite education hub for Arduino programming, ESP8266 Wi-Fi project architectures, and robotics. Join the code revolution!
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://www.youtube.com/@villagevignani" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Youtube size={18} />
            </a>
            <a href="mailto:villabgvignani@gmail.com" className="btn-secondary" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Course Links */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link to="/" className="nav-link" style={{ padding: 0 }}>Home Page</Link></li>
            <li><Link to="/courses" className="nav-link" style={{ padding: 0 }}>All Courses</Link></li>
            <li><Link to="/100-days-code" className="nav-link" style={{ padding: 0 }}>100 Days Challenge</Link></li>
            <li><Link to="/trending" className="nav-link" style={{ padding: 0 }}>Trending Videos</Link></li>
          </ul>
        </div>

        {/* Resources / Contact */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px' }}>Support</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><a href="mailto:villabgvignani@gmail.com" className="nav-link" style={{ padding: 0 }}>Contact Support</a></li>
            <li><a href="https://www.youtube.com/@villagevignani" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ padding: 0 }}>YouTube Channel</a></li>
            <li style={{ color: 'var(--white-dark)', fontSize: '0.85rem' }}>Admin Email: villabgvignani@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright row */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        paddingTop: '24px',
        display: 'flex',
        justify-content: 'space-between',
        align-items: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        fontSize: '0.85rem',
        color: 'var(--white-dark)'
      }}>
        <span>&copy; {new Date().getFullYear()} Village Vignani. All rights reserved.</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Made with <Heart size={14} color="var(--neon-red)" style={{ fill: 'var(--neon-red)' }} /> for enrollers worldwide.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

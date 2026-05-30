import React from 'react';
import ParticleBackground from '../components/ParticleBackground';

const PageShell = ({ title, eyebrow, description, children }) => (
  <section className="section" style={{ minHeight: '80vh', paddingTop: '130px', overflow: 'hidden' }}>
    <ParticleBackground />
    <div style={{ position: 'relative', zIndex: 2 }}>
      <div className="section-title-wrap">
        {eyebrow && (
          <p style={{ color: 'var(--neon-red)', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>
            {eyebrow}
          </p>
        )}
        <h1 className="section-title text-gradient">{title}</h1>
        {description && <p className="section-subtitle">{description}</p>}
      </div>
      {children}
    </div>
  </section>
);

export default PageShell;

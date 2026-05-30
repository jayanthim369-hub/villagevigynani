import React from 'react';
import PageShell from './PageShell';

const Profile = () => (
  <PageShell title="Creator Profile" eyebrow="Village Vignani" description="An education channel focused on embedded systems, IoT projects, and robotics.">
    <div className="glass-card" style={{ padding: '32px', maxWidth: '860px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <div className="creator-avatar" style={{ width: '72px', height: '72px', fontSize: '1.8rem' }}>V</div>
        <div>
          <h2 className="course-title">Village Vignani</h2>
          <p className="course-desc" style={{ marginBottom: 0 }}>Arduino programming, ESP8266 Wi-Fi architecture, and robotics tutorials.</p>
        </div>
      </div>
      <div className="grid-3">
        {['Project-first lessons', 'Beginner-friendly labs', 'Maker community'].map((item) => (
          <div className="resource-card glass" key={item}><div className="resource-info"><h3 className="resource-title">{item}</h3></div></div>
        ))}
      </div>
    </div>
  </PageShell>
);

export default Profile;

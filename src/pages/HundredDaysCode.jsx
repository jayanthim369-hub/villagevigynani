import React from 'react';
import PageShell from './PageShell';

const HundredDaysCode = () => (
  <PageShell title="100 Days Code" eyebrow="Daily Practice" description="A disciplined challenge for embedded programming and project consistency.">
    <div className="grid-3">
      {['Basics', 'Sensors', 'Connectivity', 'Automation', 'Robotics', 'Final Build'].map((item, index) => (
        <article className="glass-card" style={{ padding: '24px' }} key={item}>
          <span className="badge badge-approved">Day {index * 15 + 1}</span>
          <h2 className="course-title" style={{ marginTop: '18px' }}>{item}</h2>
          <p className="course-desc">Complete focused lessons and publish a working progress update before moving forward.</p>
        </article>
      ))}
    </div>
  </PageShell>
);

export default HundredDaysCode;

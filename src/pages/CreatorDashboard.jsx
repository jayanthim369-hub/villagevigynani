import React from 'react';
import PageShell from './PageShell';

const CreatorDashboard = () => (
  <PageShell title="Creator Dashboard" eyebrow="Studio" description="Manage course ideas, video drafts, and publishing priorities.">
    <div className="grid-3">
      {['Draft Lessons', 'Pending Uploads', 'Community Questions'].map((item, index) => (
        <article className="glass-card stat-item" key={item}>
          <div className="stat-number text-gradient">{[8, 3, 21][index]}</div>
          <div className="stat-label">{item}</div>
        </article>
      ))}
    </div>
  </PageShell>
);

export default CreatorDashboard;

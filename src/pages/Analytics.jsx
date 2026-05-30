import React from 'react';
import PageShell from './PageShell';

const Analytics = () => (
  <PageShell title="Analytics" eyebrow="Insights" description="A compact overview of learning engagement and content momentum.">
    <div className="grid-3">
      {['Watch Time', 'Course Starts', 'Returning Learners'].map((label, index) => (
        <article className="glass-card stat-item" key={label}>
          <div className="stat-number text-gradient">{['420h', '1.8K', '62%'][index]}</div>
          <div className="stat-label">{label}</div>
        </article>
      ))}
    </div>
  </PageShell>
);

export default Analytics;

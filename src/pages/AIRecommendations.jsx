import React from 'react';
import PageShell from './PageShell';

const AIRecommendations = () => (
  <PageShell title="AI Recommendations" eyebrow="Learning Guide" description="Suggested next steps based on common maker learning paths.">
    <div className="grid-3">
      {['Start Arduino basics', 'Build ESP8266 dashboard', 'Prototype robot control'].map((item) => (
        <article className="glass-card" style={{ padding: '24px' }} key={item}>
          <span className="badge badge-approved">Recommended</span>
          <h2 className="course-title" style={{ marginTop: '18px' }}>{item}</h2>
          <p className="course-desc">Follow this path to strengthen fundamentals and complete a visible project milestone.</p>
        </article>
      ))}
    </div>
  </PageShell>
);

export default AIRecommendations;

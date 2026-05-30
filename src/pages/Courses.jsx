import React from 'react';
import PageShell from './PageShell';
import { courses } from './pageData';

const Courses = () => (
  <PageShell title="Courses" eyebrow="Learning Paths" description="Structured tracks for Arduino, Wi-Fi projects, and robotics labs.">
    <div className="grid-3">
      {courses.map((course) => (
        <article className="glass-card course-card" key={course.title}>
          <div className="course-icon-wrap">{course.icon}</div>
          <span className="course-badge badge-approved">{course.badge}</span>
          <h2 className="course-title">{course.title}</h2>
          <p className="course-desc">{course.description}</p>
          <div className="course-meta">{course.meta.map((item) => <span className="course-meta-item" key={item}>{item}</span>)}</div>
          <button className="btn btn-primary" type="button">Start Learning</button>
        </article>
      ))}
    </div>
  </PageShell>
);

export default Courses;

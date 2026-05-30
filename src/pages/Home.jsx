import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, Zap } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import StatsCounter from '../components/StatsCounter';
import { courses, videos } from './pageData';

const Home = () => (
  <>
    <section className="hero">
      <ParticleBackground />
      <div className="hero-overlay" />
      <h1 className="hero-title text-gradient">Village Vignani</h1>
      <p className="hero-subtitle">Arduino, ESP8266, IoT, and robotics projects for practical builders.</p>
      <p className="hero-description">
        Follow structured lessons, watch project walkthroughs, and build real embedded systems with a maker-focused learning path.
      </p>
      <div className="hero-actions">
        <Link to="/courses" className="btn btn-primary"><Zap size={18} /> Explore Courses</Link>
        <Link to="/trending" className="btn btn-secondary"><Play size={18} /> Watch Videos</Link>
      </div>
      <ChevronDown className="scroll-down" size={28} />
    </section>

    <section className="section">
      <div className="stats-counter-row">
        <StatsCounter value="120" suffix="+" label="Lessons" />
        <StatsCounter value="35" suffix="K+" label="Learners" />
        <StatsCounter value="80" suffix="+" label="Projects" />
      </div>
    </section>

    <section className="section">
      <div className="section-title-wrap">
        <h2 className="section-title">Featured Courses</h2>
        <p className="section-subtitle">Start with fundamentals, then move into connected devices and robotics.</p>
      </div>
      <div className="grid-3">
        {courses.map((course) => (
          <article className="glass-card course-card" key={course.title}>
            <div className="course-icon-wrap">{course.icon}</div>
            <span className="course-badge badge-approved">{course.badge}</span>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-desc">{course.description}</p>
            <div className="course-meta">{course.meta.map((item) => <span className="course-meta-item" key={item}>{item}</span>)}</div>
            <Link className="btn btn-secondary" to="/courses">View Course</Link>
          </article>
        ))}
      </div>
    </section>

    <section className="section">
      <div className="section-title-wrap">
        <h2 className="section-title">Trending Builds</h2>
      </div>
      <div className="grid-3">
        {videos.map((video) => (
          <Link to={`/watch/${video.id}`} className="glass-card video-card" key={video.id} style={{ textDecoration: 'none' }}>
            <div className="video-thumbnail-container">
              <div className="cinema-player-placeholder"><Play size={42} color="var(--white)" /></div>
              <span className="video-duration">{video.duration}</span>
            </div>
            <div className="video-content">
              <span className="video-category">{video.category}</span>
              <h3 className="video-title">{video.title}</h3>
              <p className="video-creator"><span className="creator-avatar">V</span>{video.creator}</p>
              <div className="video-stats"><span>{video.views} views</span><span>Project tutorial</span></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
);

export default Home;

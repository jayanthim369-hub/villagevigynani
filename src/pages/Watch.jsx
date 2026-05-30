import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, ThumbsUp, Share2 } from 'lucide-react';
import { videos } from './pageData';

const Watch = () => {
  const { id } = useParams();
  const video = videos.find((item) => item.id === id) || videos[0];

  return (
    <section className="section watch-container">
      <div>
        <div className="cinema-player-wrap">
          <div className="cinema-player-placeholder"><Play size={64} color="var(--white)" /><span>{video.title}</span></div>
        </div>
        <div className="watch-info">
          <h1 className="watch-title">{video.title}</h1>
          <div className="watch-actions-bar">
            <span className="watch-stats">{video.views} views - {video.category}</span>
            <div className="watch-buttons">
              <button className="btn btn-secondary watch-btn-action" type="button"><ThumbsUp size={16} /> Like</button>
              <button className="btn btn-secondary watch-btn-action" type="button"><Share2 size={16} /> Share</button>
            </div>
          </div>
          <p className="course-desc">A practical Village Vignani walkthrough for makers building real electronics projects.</p>
        </div>
      </div>
      <aside className="glass-card" style={{ padding: '24px', height: 'fit-content' }}>
        <h2 className="course-title">Up Next</h2>
        {videos.filter((item) => item.id !== video.id).map((item) => (
          <div className="resource-card" key={item.id}>
            <div className="resource-icon-box bg-gradient-red-blue"><Play size={20} /></div>
            <div className="resource-info">
              <h3 className="resource-title">{item.title}</h3>
              <p className="resource-desc">{item.duration} - {item.views} views</p>
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default Watch;

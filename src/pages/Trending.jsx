import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Play } from 'lucide-react';
import PageShell from './PageShell';
import { videos } from './pageData';

const Trending = () => {
  const [params] = useSearchParams();
  const query = params.get('search')?.toLowerCase() || '';
  const filteredVideos = query ? videos.filter((video) => video.title.toLowerCase().includes(query)) : videos;

  return (
    <PageShell title="Trending Videos" eyebrow="Project Library" description="Watch practical builds and walkthroughs from the Village Vignani channel.">
      <div className="grid-3">
        {filteredVideos.map((video) => (
          <Link to={`/watch/${video.id}`} className="glass-card video-card" key={video.id} style={{ textDecoration: 'none' }}>
            <div className="video-thumbnail-container">
              <div className="cinema-player-placeholder"><Play size={42} color="var(--white)" /></div>
              <span className="video-duration">{video.duration}</span>
            </div>
            <div className="video-content">
              <span className="video-category">{video.category}</span>
              <h2 className="video-title">{video.title}</h2>
              <p className="video-creator"><span className="creator-avatar">V</span>{video.creator}</p>
              <div className="video-stats"><span>{video.views} views</span><span>Hands-on</span></div>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
};

export default Trending;

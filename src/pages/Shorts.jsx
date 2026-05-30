import React from 'react';
import { Heart, MessageCircle, Share2, Zap } from 'lucide-react';
import { shorts } from './pageData';

const Shorts = () => (
  <div className="shorts-container">
    {shorts.map((title) => (
      <section className="short-video-wrapper" key={title}>
        <div className="short-video-player">
          <Zap size={72} color="var(--neon-red)" />
          <div className="short-ui-overlay">
            <div className="short-actions-sidebar">
              {[Heart, MessageCircle, Share2].map((Icon) => (
                <button className="short-sidebar-btn" type="button" key={Icon.displayName || Icon.name}><Icon size={22} /></button>
              ))}
            </div>
            <div className="short-details">
              <h1 className="short-title">{title}</h1>
              <p className="short-desc">@villagevignani quick lab demo</p>
            </div>
          </div>
        </div>
      </section>
    ))}
  </div>
);

export default Shorts;

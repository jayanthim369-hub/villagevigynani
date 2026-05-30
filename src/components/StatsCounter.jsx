import React, { useState, useEffect, useRef } from 'react';

/**
 * StatsCounter - Dynamic incrementing stats counter when scrolled into view.
 */
const StatsCounter = ({ value, label, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, duration]);

  const animateCount = () => {
    let startTimestamp = null;
    const endValue = parseInt(value, 10);
    if (isNaN(endValue)) {
      setCount(value);
      return;
    }

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <div ref={elementRef} className="glass-card" style={{ padding: '20px 30px', textAlign: 'center', minWidth: '150px' }}>
      <div 
        className="text-gradient" 
        style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-display)', marginBottom: '4px' }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: '0.8rem', color: 'var(--white-dark)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
        {label}
      </div>
    </div>
  );
};

export default StatsCounter;

import React, { useRef, useEffect, useState } from 'react';

export const LazyVideo = ({ src, title, width, height, ...props }) => {
  const iframeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar después de que el iframe sea visible
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // Carga cuando el 10% del iframe es visible
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div ref={iframeRef} style={{ width, height }}>
      {isVisible && (
        <iframe
          width={width}
          height={height}
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          {...props}
        />
      )}
    </div>
  );
};
 
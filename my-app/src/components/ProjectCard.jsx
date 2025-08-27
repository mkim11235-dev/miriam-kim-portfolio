import { useState, useEffect, useRef } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "../App.css";

export default function ProjectCard({ title, link, type, imgSrc = [], iframeSrc, description = [] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Combine images and video into mediaItems
  const mediaItems = [...imgSrc];
  if (iframeSrc) mediaItems.push({ video: iframeSrc });

  return (
    <div ref={ref} className={`project-card ${isVisible ? "fade-in" : ""}`}>
      
      {/* Media Grid */}
      {mediaItems.length > 0 && (
        <div className="project-media-grid">
          {mediaItems.map((item, index) => {
            if (typeof item === "string") {
              // Zoomable image
              return (
                <Zoom key={index}>
                  <img
                    src={item}
                    alt={`${title} ${index + 1}`}
                    className="grid-item"
                  />
                </Zoom>
              );
            } else if (item.video) {
              return (
                <div key={index} className="project-video-wrapper grid-item">
                  <iframe
                    src={item.video}
                    title={`${title} video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}

      {/* Description */}
      <div id="project-description">
        {link ? (
  <h2>
    <a href={link} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </h2>
) : (
  <h2>{title}</h2>
)}
  <h3>{type}</h3>

        {Array.isArray(description)
          ? description.map((line, i) => <p key={i}>{line}</p>)
          : <p>{description}</p>}
      </div>
    </div>
  );
}

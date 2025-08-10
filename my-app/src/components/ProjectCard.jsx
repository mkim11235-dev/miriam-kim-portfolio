import { useState, useEffect, useRef } from "react";
import '../App.css'

export default function ProjectCard({title, imgSrc,iframeSrc, description}){
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            {threshold: 0.6}
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
        return (
    <div
      ref={ref}
      className={`project-card ${isVisible ? "fade-in" : ""}`}
    >
      <div id="project-image">
        {iframeSrc ? (
          <iframe
            // width="25%"
            // height="315"
            // transform="scale(1.2)"
            src={iframeSrc}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
                transform: "scale(1.2)",
                transformOrigin: "top left",  // important to scale from top-left corner
                // width: "100%",                // keep width 100% of container
                // height: "400px",              // fixed height or adjust as needed
                border: "none",
                display: "block",
                margin: "0 auto"
            }}
          ></iframe>
        ) : (
          <img src={imgSrc} alt={title} />
        )}
      </div>
      <div id="project-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
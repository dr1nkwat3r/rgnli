import React, { useState, useEffect, useRef } from 'react';
import './App.scss';

const path = process.env.PUBLIC_URL;

const ProjectCard = ({ title, year, role, description, media, url, awards, awardLinks }) => {

    const mediaArray = Array.isArray(media) ? media : [media];
    const hasMultipleMedia = mediaArray.length > 1;

    const [hideArrow, setHideArrow] = useState(false);
    const scrollContainerRef = useRef(null);

    const longDescription = description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

    useEffect(() => {
        const handleScroll = () => {
          if (!scrollContainerRef.current) return;
          const container = scrollContainerRef.current;
          const scrollWidth = container.scrollWidth;
          const clientWidth = container.clientWidth;
          const scrollLeft = container.scrollLeft;
    
          // Show or hide the arrow based on scroll position
          if (scrollLeft + clientWidth >= scrollWidth - 100) {
            setHideArrow(true);
          } else {
            setHideArrow(false);
          }
        };
    
        const container = scrollContainerRef.current;
        if (container) {
          container.addEventListener('scroll', handleScroll);
          handleScroll();
        }
    
        return () => {
          if (container) {
            container.removeEventListener('scroll', handleScroll);
          }
        };
      }, []);

  return (
    <div className='container'>
        <div className='card'>
            <div className={`card__image-container ${hasMultipleMedia && hideArrow ? 'no-arrow' : 'gallery-gradient'}`}>
                {/* <img src={images} alt={images} /> */}
                
                <div className='image-scroll' ref={scrollContainerRef}>
              {mediaArray.map((item, i) => {
                return (
                  <div key={i} className="image-scroll__item">
                    
                    {item.type === 'image' && (
                        <>
                          <img src={`${path}${item.src}`} alt={`media-${i}`}
                            style={{objectFit: i === 0 ? 'cover' : 'contain'}} />
                        </>
                    )} 
                    {item.type === 'video' && (
                        <video playsInline loop muted autoPlay style={{objectFit: i === 0 ? 'cover' : 'contain'}}>
                          <source src={`${path}${item.src}`} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                    )}
                  
                </div>
              );
              })}
          </div>
    
                {hasMultipleMedia && <div className="arrow">
                    →<br/><span style={{ writingMode:'vertical-lr', textOrientation:'sideways', fontStyle:'italic' }} >scroll</span>
                    </div>}
    
            </div>
            <div className='card__info'>
                <div className='card__title'>
                    <h2><a href={url} target='_blank'>{title}</a></h2>
                    <p><span className='card__role'>{role}</span> ({year})</p>
                </div>
                <div className='card__description'>
                    
                    <p>{longDescription}</p>
    
                    {awards && awards.length > 0 && (
                    <div className="awards">
                        {awards.map((award, i) => (
                            <span key={award}>
                            <a href={awardLinks[i]} target="_blank" rel="noopener noreferrer">
                                {award}
                            </a>
                            </span>
                        ))}
                    </div>
                    )}
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;
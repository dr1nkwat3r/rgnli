import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';
import './App.scss';
import OutIcon from './diagonal-arrow.svg';
import RightArrow from './right-arrow-2.svg';

const path = process.env.PUBLIC_URL;

const ProjectCard = ({ title, year, role, description, media, url, awards, awardLinks, hasProjectPage, projectPath }) => {

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

    const handleNext = () => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  

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
    
                {/* {hasMultipleMedia && <div className="arrow">
                    →<br/><span style={{ writingMode:'vertical-lr', textOrientation:'sideways', fontStyle:'italic' }} >scroll</span>
                    </div>} */}
                
                {hasMultipleMedia && (<button className="arrow" onClick={handleNext}><img src={RightArrow} className='right-arrow' /></button>)}
    
            </div>
            <div className='card__info'>
                <div className='card__title'>
                    {/* <h2>{ hasProjectPage ? (
                      <Link to={url}>{title}</Link>
                    ) : (<><a href={url} target='_blank'>{title} <img src={OutIcon} alt='external link' className='out-icon' width="20" height="20" /></a></> ) }</h2> */}
                    
                    <h2>{url ? (hasProjectPage ? 
                      (<Link to={url} onClick={() => ReactGA.event({category: 'Project', action: 'click', label: title,})}>{title}</Link>) : 
                      (<><a href={url} target='_blank' rel="noopener noreferrer" onClick={() => ReactGA.event({category: 'Project', action: 'click', label: title,})}>{title} <img src={OutIcon} alt='external link' className='out-icon' width="20" height="20" /></a></> )) : (<>{title}</>)}</h2>
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
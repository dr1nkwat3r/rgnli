import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';
import projects from './data/projects.json';

import OutIcon from './diagonal-arrow.svg';
import RightArrow from './rightarrow.svg'

const path = process.env.PUBLIC_URL;

const ProjectCard25 = () => {
  const [scrollRefs, setScrollRefs] = useState({});
  const [isAtEnd, setIsAtEnd] = useState({});
  

  const handleNext = (projectIndex) => {
    const ref = scrollRefs[projectIndex];
    if (!ref || !ref.current) return;

    const container = ref.current;
    const scrollAmount = container.clientWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(() => checkScrollPosition(projectIndex), 500);
    
  }

  const checkScrollPosition = (projectIndex) => {
    const ref = scrollRefs[projectIndex];
    if (!ref || !ref.current) return;
  
    const container = ref.current;
    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
    setIsAtEnd(prev => ({ ...prev, [projectIndex]: isAtEnd }));
  };

  useEffect(() => {
    // Create refs for each project's media scroll container
    const refs = {};
    projects.forEach((_, index) => {
      refs[index] = React.createRef();
    });
    setScrollRefs(refs);

    Object.entries(refs).forEach(([index, ref]) => {
      if (ref.current) {
        ref.current.addEventListener('scroll', () => checkScrollPosition(Number(index)));
      }
    });

    return () => {
      Object.entries(refs).forEach(([index, ref]) => {
        if (ref.current) {
          ref.current.removeEventListener('scroll', () => checkScrollPosition(Number(index)));
        }
      });
    };
  }, []);


  return (
    <div>
      <div className='project__container'>
        
      {projects.map((project, index) => (
        <div key={index} className="project__card">
          
          {/* Left Column: Media Scroll */}
          <div className="project__image-container">
            <div className="image-scroll" ref={scrollRefs[index]}>
              {project.media.map((item, i) => (
                  <div
                    key={i}
                    className="image-scroll__item"
                    style={{
                      width: project.media.length === 1 ? '100%' : 'auto', 
                      height: project.media.length === 1 ? '100%' : 'auto',
                      overflow: project.media.length === 1 ? 'hidden' : 'auto'
                    }}
                      >
                    {item.type === 'image' ? (
                      <img
                        src={path + item.src}
                        alt={`Project ${i}`}
                        style={{ height: project.media.length === 1 ? '100%' : '99%' }}
                      />
                    ) : (
                      <video
                        playsInline
                        loop
                        muted
                        autoPlay
                        style={{height:'99%'}}
                      >
                        <source src={path + item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    

                </div>
              ))}
              
            </div>

            {/* {project.media.length > 1 && (
              <button className="next-btn" onClick={() => handleNext(index)}>
                <img src={RightArrow} alt='slide right' className='right-arrow' />
              </button>
            )} */}

            {project.media.length > 1 && !isAtEnd[index] && (
              <button className="next-btn" onClick={() => handleNext(index)}>
                <img src={RightArrow} alt='slide right' className='right-arrow' />
              </button>
            )}

          </div>

          {/* Right Column: Project Details */}
          <div className="project__details">
            <h2 className='project__title'>{project.url ? (project.hasProjectPage ? 
              (<Link to={project.url} onClick={() => ReactGA.event({category: 'Project', action: 'click', label: project.title,})}>{project.title}</Link>) : 
              (<><a href={project.url} target='_blank' rel="noopener noreferrer" onClick={() => ReactGA.event({category: 'Project', action: 'click', label: project.title,})}>{project.title} <img src={OutIcon} alt='external link' className='out-icon' width="20" height="20" /></a></> )) : (<>{project.title}</>)}</h2>
            <p><span className='project__role'>{project.role}</span> ({project.year})</p>

            {/* <p className="project__description">{project.description.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
            </p> */}
            <p className="project__description">{project.description}</p>

            {project.awards && project.awardLinks && project.awards.length === project.awardLinks.length && project.awards.map((award, index) => (
              <a key={index} href={project.awardLinks[index]} className='project__award' target='_blank' rel='noopener noreferrer' >{award}</a>))}

          </div>
        </div>
      ))}

      </div>
      
      {/* <div style={{height:'100vh', backgroundColor:'gray'}}>Projects25

      </div> */}
    </div>
  )
}

export default ProjectCard25;
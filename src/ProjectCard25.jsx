import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';
import projects from './data/projects.json';

import OutIcon from './diagonal-arrow.svg';
import RightArrow from './rightarrow.svg';

const TRACKING_ID = 'G-EKSDMFT1B3';
ReactGA.initialize(TRACKING_ID);

const ProjectCard25 = () => {
  const scrollRefs = useRef([]);
  const [hideArrow, setHideArrow] = useState({});

  const handleNext = (projectIndex) => {
    const container = scrollRefs.current[projectIndex];
    if (!container) return;
    const scrollAmount = container.clientWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = (projectIndex) => {
      const container = scrollRefs.current[projectIndex];
      if (!container) return;

      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;

      if (scrollLeft + clientWidth >= scrollWidth - 100) {
        setHideArrow((prev) => ({
          ...prev,
          [projectIndex]: true,
        }));
      } else {
        setHideArrow((prev) => ({
          ...prev,
          [projectIndex]: false,
        }));
      }
    };

    projects.forEach((_, index) => {
      const container = scrollRefs.current[index];
      if (container) {
        container.addEventListener('scroll', () => handleScroll(index));
        handleScroll(index); // Initial check

        const media = container.querySelectorAll("img, video");
        media.forEach((el) =>
          el.addEventListener("load", () => handleScroll(index), { once: true })
        );
      }
    });

    return () => {
      projects.forEach((_, index) => {
        const container = scrollRefs.current[index];
        if (container) {
          container.removeEventListener('scroll', () => handleScroll(index));
        }
      })
    };
  }, [projects]);


  return (
    <div>
      <div className='project__container'>
        
      {projects.map((project, index) => (
        <div key={index} className="project__card">
          
          {/* Left Column: Media Scroll */}
          <div className="project__image-container">
            <div 
              className={project.media.length > 1 ? 'image-scroll' : ''} 
              ref={(el) => (scrollRefs.current[index] = el)}
              style={project.media.length === 1 ? { width: '99%', height: '100%', objectFit:'cover', verticalAlign:'middle' } : {}}
              >
              {project.media.map((item, i) => (
                  <div
                    key={i}
                    className="image-scroll__item"
                    // style={{
                    //   width: project.media.length === 1 ? '100%' : 'auto', 
                    //   height: project.media.length === 1 ? '100%' : 'auto',
                    //   overflow: project.media.length === 1 ? 'hidden' : 'auto'
                    // }}
                      >
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
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
                        <source src={item.src} type="video/mp4" />
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

              {project.media.length > 1 && !hideArrow[index] && (
                <button
                  className="next-btn"
                  onClick={() => handleNext(index)}
                >
                  <img src={RightArrow} alt="slide right" className="right-arrow" />
                </button>
              )}

          </div>

          {/* Right Column: Project Details */}
          <div className="project__details">
            <h2 className='project__title'>{project.url ? (project.hasprojectpage ? 
              (<Link
                  to={project.url} 
                  onClick={(e) => {
                    ReactGA.event({
                      category: 'Project', 
                      action: 'click - Project', 
                      label: project.title,
                    });
                  }}
                  >
                    {project.title}
                  </Link>
              ) : (
              <>
                <a 
                  href={project.url} 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  onClick={(e) => {
                    e.preventDefault();
                    ReactGA.event({
                        category: 'Project', 
                        action: 'click - Project', 
                        label: project.title
                      });
                      window.open(project.url, '_blank');
                    }}
                >
                        {project.title} <img src={OutIcon} alt='external link' className='out-icon' />
                </a>
              </> )) : (<>{project.title}</>)}</h2>
            <p><span className='project__role' dangerouslySetInnerHTML={{ __html: project.role }}></span> ({project.year})</p>

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

    </div>
  )
}

export default ProjectCard25;
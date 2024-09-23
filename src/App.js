
import React, { useState, useEffect } from 'react';
import './App.scss';
import Carousel from './Carousel';
import ProjectCard from './ProjectCard';
import projects from './projects.json';

const path = process.env.PUBLIC_URL;

function App() {

  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 7) { 
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="App">

      <header className={`intro ${isShrunk ? 'shrink' : ''}`}>
          <h1>Regina Li – Digital Designer.</h1>
        </header>

      <div className='container'>
        <div className='blurb'>
          <div className='blurb__text'>
            <p className='top'>
            I enjoy turning complex topics into engaging visual experiences and informative graphics. Blending design, code, and curiosity to craft compelling visual stories.
            </p>

            <div style={{display:'flex'}}>
              <div><i>Hello!</i> &nbsp;</div>
              <div onClick={toggleExpand} className="more-blurb__button">
                  {isExpanded ? '(–)' : '(+)'}
                </div>
            </div>

            <div className={`more-blurb ${isExpanded ? 'expanded' : 'collapsed'}`}>
            
              <div className='more-blurb__open'>
                <a href='mailto:rgnhli@gmail.com' target='_blank'>Email</a> – <a href='https://www.linkedin.com/in/rgnli/' target='_blank'>LinkedIn</a> - <a href='https://www.instagram.com/rg1na/' target='_blank'>Instagram</a>
    
                <p><a href='https://docs.google.com/document/d/1nFUFd6_Xxsi_HMOw945I3pphHVzT_ZgPl9A_wIjA3YI/edit' target='_blank'>Résumé</a></p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      <div style={{borderBottom:'0.5px dotted #000069', paddingTop:'50px'}}></div>

      {projects.map((work, i) => (
        <React.Fragment key={i}>
          <ProjectCard {...work} />
          {i === 2 && (
            <Carousel />
          )}
        </React.Fragment>
      ))}

      {/* <Carousel /> */}

      <footer>

          <div>© 2024 Regina Li</div>
          <div>
            Regina is made in Malaysia and based in Washington, D.C.<br/>
          This site is built with React.js and hosted on <a href='https://github.com/dr1nkwat3r' target='_blank'>Github</a>.
          </div>
          <div>
            <a href='mailto:rgnhli@gmail.com' target='_blank'>email</a> – <a href='https://www.linkedin.com/in/rgnli/' target='_blank'>linkedin</a> - <a href='https://www.instagram.com/rg1na/' target='_blank'>instagram</a>
            </div>

      </footer>

    </div>

    
  );
}

export default App;

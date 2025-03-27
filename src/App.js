
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import './App.scss';
import Carousel from './Carousel';
import ProjectCard from './ProjectCard';
import projects from './data/projects.json';
import ReactGA from 'react-ga4';

// import ScrollToTop from './ScrollToTop';
import WhynotWebsite from './pages/WhynotWebsite';
import EditorialIllus from './pages/EditorialIllus';

const TRACKING_ID = 'G-EKSDMFT1B3';
ReactGA.initialize(TRACKING_ID);

function App() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const pageRoutes = ['/whynot-website-redesign', '/editorial-illustrations'];


  const handleClick = (link) => {
    ReactGA.event({
      category: 'contact',
      action: 'click',
      label: 'link',
    });
  };

  const Header = () => {
    const location = useLocation();
    const isProjectPage = pageRoutes.includes(location.pathname);

    return (
      <header className={`intro ${isShrunk ? 'shrink' : ''} ${isProjectPage ? 'detail-header shrink' : ''}`}>
        {isProjectPage ? (<div className='intro__bg' style={{ opacity:0.6 }}/>) : (<div className='intro__bg' />)}
        <h1><a href="/">Regina Li – Digital Designer.</a></h1>
        { isProjectPage ? (<div className='detail-header__extra'>
          <a href='mailto:rgnhli@gmail.com' target='_blank' onClick={() => handleClick("email")}>Email</a> – <a href='https://www.linkedin.com/in/rgnli/' target='_blank' onClick={() => handleClick("linkedin")}>LinkedIn</a>
        </div>) : ''}
        
      </header>
    );
  };

  const Homepage = () => {
    useEffect(() => {
      ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: "homepage",
      });
    }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) { 
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


  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    ReactGA.event({
      category: 'Interaction',
      action: 'click',
      label: isExpanded ? 'collapse info' : 'expand info',
    });
  };

  

  return (
    <>
    <div className='container'>
          <div className='blurb'>
            <div className='blurb__text'>
              <p className='top'>
              I enjoy turning complex topics into visual experiences and informative graphics. Blending design, code, and curiosity to craft compelling visual stories.
              </p>
  
              <div style={{display:'flex'}}>
                <div><i>Hello!</i> &nbsp;</div>
                <div onClick={toggleExpand} className="more-blurb__button">
                    {isExpanded ? '(–)' : '(+)'}
                  </div>
              </div>
  
              <div className={`more-blurb ${isExpanded ? 'expanded' : 'collapsed'}`}>
              
                <div className='more-blurb__open'>
                  <a href='mailto:rgnhli@gmail.com' target='_blank' onClick={() => handleClick("email")}>Email</a> – <a href='https://www.linkedin.com/in/rgnli/' target='_blank' onClick={() => handleClick("linkedin")}>LinkedIn</a> - <a href='https://www.instagram.com/rg1na/' target='_blank' onClick={() => handleClick("instagram")}>Instagram</a>
      
                  <p><a href='https://docs.google.com/document/d/1nFUFd6_Xxsi_HMOw945I3pphHVzT_ZgPl9A_wIjA3YI/edit' target='_blank' onClick={() => handleClick("resume")}>Résumé</a></p>
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
        
    </>
  );
};

  return (
      <BrowserRouter>
      {/* <ScrollToTop />  */}
        <div className="App">
    
          {/* <header className={`intro ${isShrunk ? 'shrink' : ''}`}>
              <h1><a href="/">Regina Li – Digital Designer.</a></h1>
            </header> */}
          <Header />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/whynot-website-redesign" element={<WhynotWebsite />} />
            <Route path="/editorial-illustrations" element={<EditorialIllus />} />
          </Routes>
  
  
          <footer>
    
              <div>© 2025 Regina Li <br/> <i>rgnli.com</i></div>
              <div>
                Regina is made in Malaysia and based in Washington, D.C.<br/>
              This site is built with React.js and hosted on <a href='https://github.com/dr1nkwat3r' target='_blank'>Github</a>.
              </div>
              <div>
                <a href='mailto:rgnhli@gmail.com' target='_blank' onClick={() => handleClick("email")}>email</a> – <a href='https://www.linkedin.com/in/rgnli/' target='_blank' onClick={() => handleClick("linkedin")}>linkedin</a> - <a href='https://www.instagram.com/rg1na/' target='_blank' onClick={() => handleClick("instagram")}>instagram</a>
                
                </div>
    
          </footer>
    
        </div>
      </BrowserRouter>


    
  );
}

export default App;

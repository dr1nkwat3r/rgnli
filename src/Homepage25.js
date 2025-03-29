import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import ReactGA from 'react-ga4';
import './homepage25.scss';

import EditorialIllus from './pages/EditorialIllus25';
import ProjectCard25 from './ProjectCard25';
import WhynotWebsite from './pages/WhynotWebsite25';

const TRACKING_ID = 'G-EKSDMFT1B3';
ReactGA.initialize(TRACKING_ID);


const Homepage25 = () => {

    const headerContainerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    const handleClick = (platform) => {
        ReactGA.event({
          category: 'Social Links',
          action: 'click',
          label: platform,
        });
      };

    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: "/",
            title: "Homepage",
        });
        }, []);

    useEffect(() => {
        const calculateHeaderHeight = () => {
        if (headerContainerRef.current) {
            // Get the actual height of the header container
            const height = headerContainerRef.current.offsetHeight;
            setHeaderHeight(height);
        }
        };

        // Calculate height on mount
        calculateHeaderHeight();

        // Recalculate on window resize
        window.addEventListener('resize', calculateHeaderHeight);
        const timeoutId = setTimeout(calculateHeaderHeight, 100);

        // Return cleanup function
        return () => {
        window.removeEventListener('resize', calculateHeaderHeight);
        clearTimeout(timeoutId);
        };
    }, []);
  
  return (
    <Router>
        <div className='homepage25'>
                <div className='sticky-scroll'>
                    <div className='sticky'>
                        <div className='header__container' ref={headerContainerRef} >
                                <div className='header__top top1'>
                                    <span className='headerspan'><NavLink to='/' className='top1__home'>Digital Designer</NavLink></span>
                                    <span className='headerspan top1__hello'>Hello!</span>
                                </div>
                                <div className='header__top top2'>
                                    <h1><span>R</span><span>E</span><span>G</span><span>I</span><span>N</span><span>A</span></h1>
                                    <div className='header__contact'>
                                        <p><a href='mailto:rgnhli@gmail.com' target='_blank' onClick={() => handleClick("email")}>Email</a></p>
                                        <p><a href='https://www.linkedin.com/in/rgnli/' target='_blank' onClick={() => handleClick("linkedin")}>LinkedIn</a></p>
                                        <p><a href='https://docs.google.com/document/d/1nFUFd6_Xxsi_HMOw945I3pphHVzT_ZgPl9A_wIjA3YI/edit' target='_blank' onClick={() => handleClick("resume")}>Résumé</a></p>
                                    </div>
                                </div>
                                <h1 className='h1-small'><span>LI</span></h1>
                        </div>
                    </div>
                
                    <div className='header__intro' style={{ marginTop: `${headerHeight + 140}px` }}>
                        <div><p>I enjoy turning complex topics into visual experiences and informative graphics. Blending design, code, and curiosity to craft compelling visual stories.</p>
                        
                        </div>
                        <div className='nav-container'>
                            <NavLink to="/" className={({ isActive }) => isActive ? "nav active" : "nav"}>Projects</NavLink>
                            <NavLink to="/editorial-illustrations" className={({ isActive }) => isActive ? "nav active" : "nav"} onClick={() => ReactGA.event({category: 'Project', action: 'click', label: 'Editorial Illustrations',})}>Editorial illustrations</NavLink>
                            
                        </div>
                        <hr className='header__hr'/>
                    </div>

                        <Routes>
                            <Route path="/" element={<ProjectCard25 />} />
                            <Route path="/editorial-illustrations" element={<EditorialIllus />} />
                            <Route path="/whynot-website-redesign" element={<WhynotWebsite />} />
                        </Routes>

                        <footer>
    
                            <div>© {new Date().getFullYear()} Regina Li. <br/> <i>rgnli.com</i></div>
                            <div>
                                Regina is made in Malaysia and based in Washington, D.C.<br/>
                                This site is built with React.js and hosted on <a href='https://github.com/dr1nkwat3r' target='_blank'>Github</a>.
                            </div>
                            <div>
                                <a href='mailto:rgnhli@gmail.com' target='_blank' onClick={() => handleClick("email")}>email</a> – <a href='https://www.linkedin.com/in/rgnli/' target='_blank' onClick={() => handleClick("linkedin")}>linkedin</a> - <a href='https://www.instagram.com/rg1na/' target='_blank' onClick={() => handleClick("instagram")}>instagram</a>
                                
                            </div>
                
                        </footer>

        
                        
                </div>
                
            
        </div>
        
    </Router>
  )
}

export default Homepage25
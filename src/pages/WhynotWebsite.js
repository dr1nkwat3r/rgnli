import React from 'react';
import '../AppPages.scss';
import '../App.scss';

const path = process.env.PUBLIC_URL;

const WhynotWebsite = () => {
  return (
    <div className='detail-page'>
      <div className='detail-padding' />
      <div className='container'>
        <h2 className='project__title'>Whynot Website Redesign</h2>
        
        <div className='project__text'>
          <p className='project__intro'>
            Complete redesign of the WhyNot website to improve overall user experience, site performance, and streamline visual identity to create a clearer, more engaging, and cohesive brand presence.
          </p>
        </div>

        <img src={path + `/wainao-redesign/wainao-redesign-1.jpg`} />
        {/* <div className='detail-padding' /> */}
        <div className='project__text'>
          <h3>Background</h3>
          <p>First launched in 2020, <b>WhyNot</b> (Wainao) is a digital news magazine that has rapidly grown in readers and audience. WhyNot delivers probing journalistic content to a global Chinese-speaking audience, providing a crucial outlet that allows creative expression and circumvents China’s censored digital space.</p>
          <p>Visit website: <a href='www.wainao.me' target='_blank'>www.wainao.me</a></p>
        </div>
        <div className='detail-padding' />
        <div className='project__grid'>
          <div>
            <h3>Challenges</h3>
           <div className='project__challenges'>
             <div>
               <p><b>Disjointed website flow</b></p>
               <p className='challenges-body'>Confusing user flow and unclear navigation structure caused frustration for users. Key information was buried under several layers of menus.</p>
             </div>

             <div>
               <p><b>Visual inconsistencies and clutter</b></p>
               <p className='challenges-body'>The lack of a consistent visual hierarchy and the presence of excessive clutter created a distracting and overwhelming user experience, hindering users' ability to focus on critical content and actions.</p>
             </div>

             <div>
               <p><b>Heavy website, slow load times</b></p>
               <p className='challenges-body'>The website was slow to load due to the heavy assets, inefficient code, and visual clutter.</p>
             </div>

             <div>
               <p><b>Visual clash of website branding and editorial images</b></p>
             </div>

           </div>


          </div>
          <div><img src={path + `/wainao-redesign/wainao-redesign-before.jpg`} style={{ padding:"0% 5%" }} /></div>
        </div>

        <div className='project__grid' style={{ padding:"7% 0%"}}>
          <div>
            <h3>Approach</h3>
            <p>I worked in a team of three to overhaul the WhyNot website. From the start, it was crucial to me to prioritize the site’s information architecture as the foundation of the redesign. I ran a content audit and gathered user insights to restructure the site’s flow and navigation. This research informed the rest of our design decisions—from enhancing visibility of daily content on the landing page to developing modular components and refining the brand’s look and feel, all contributing to a more impactful and cohesive experience.<br/></p>
          </div>
          <div>
            <img src={path + `/wainao-redesign/wainao-redesign-wip-1.jpg`} style={{ padding:"0% 5%" }}/>
          </div>
        </div>

        <img src={path + `/wainao-redesign/wainao-redesign-2.jpg`} />
        <img src={path + `/wainao-redesign/wainao-redesign-read.jpg`} />
        <img src={path + `/wainao-redesign/wainao-redesign-watch.jpg`} />
        <img src={path + `/wainao-redesign/wainao-redesign-3.jpg`} />

        <div className='detail-padding'/>
        <a href='/' style={{ borderBottom:"none" }}>↼ Back</a>
      </div>

    </div>
  )
}

export default WhynotWebsite
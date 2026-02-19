import React, { useState, useRef } from 'react';

const WhynotWebsite = () => {
  const scrollRef = useRef(null);
  const [showTip, setShowTip] = useState(true);

  const handleScroll = () => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
    const distFromRight = maxScroll - scrollEl.scrollLeft;

    setShowTip(distFromRight > 100);
  }

  return (
    <div className='detail-page'>
      {/* <ScrollToTop /> */}
      <div className='detail-padding' />

        <div className='page__container'>
          <h2 className='page__title'>WHYNOT News Magazine Website Design</h2>
          
          <div className='page__text'>
            <p className='page__intro'>
            Launched in 2020, <i>WHYNOT</i> is a digital news magazine delivering in-depth journalistic content for a curious-minded and global Chinese-speaking audience, often covering perspectives that are censored by the Chinese government. With a rapidly growing reader-base and audience, we undertook a comprehensive website redesign to <b>improve overall user experience and update and reinforce its visual identity</b>.
            </p>
          </div>
          
          <div className='page__thirds'>
          <h3>My role:</h3> 
          <p>
            User research, Content audit,<br/>
            UX Design, Prototyping, UI Design <br/>
            Brand and Visual Design 
          </p>
          </div>
          <div className='page__thirds'>
            <h3>Team:</h3>
            <p>1 Designer, 1 Developer, 1 Part-time Designer</p>

            <i>(2024)</i>  
          </div>
        </div>

        <video playsInline loop muted autoPlay style={{width:'100%'}}>
            <source src='/wainao-redesign/wainao-design-1.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

        <div className='detail-padding' />

        <div className='page__container'>
          <div className='page__text'>
            <h3>Solution:</h3>
            <p className='page__solution'>
              We introduced a <b>modular component system</b>, supported by <b>clear design patterns</b> and <b>cohesive brand assets</b>, to bring structure and flexibility to the site. The reorganized site architecture improved content discoverability, making it easier for readers to find and connect with relevant stories.
            </p>
          </div>
        </div>

        <img src='/wainao-redesign/wainao-design-2.jpg' />

        
        <div className='page__container'>
          <div>
            <h3>Background:</h3>
            <p>
              Being one of the only Chinese-language publication of its nature, WHYNOT’s reader-base grew rapidly. However, WHYNOT’s original website was not designed to support the diverse range of digital content it offered, with an inconsistent layout, obstructed user flows, and an overall heavy, unoptimized experience. Navigation was confusing, and the lack of visual and structural cohesion made it difficult for users to engage with stories and content effectively.
  
            </p>
            <b>
              Visit the website: <a href='https://www.wainao.me/' target='_blank' style={{ fontStyle:'italic', textDecoration:'none', color:'var(--darkblue)', borderBottom:'0.5px dotted var(--darkblue)' }}>www.wainao.me</a>
            </b>
        </div>
        <div>
          <h3>Approach:</h3>
          <p>
            Working in a three-person team, I led efforts to rethink the site’s information architecture from the ground up. I began with a thorough content audit and gathered user insights to understand how people navigated and consumed stories. These findings shaped our redesign strategy, from reorganizing site flow, restructuring navigation to establishing a clearer visual hierarchy.
            </p>

          <p>
            We prioritized making daily content more visible and accessible on the homepage and introduced a modular system that could support diverse story formats. We also refined the brand’s visual language and developed a cohesive design system to create a more cohesive and engaging experience across the site.
            </p>
          
          </div>

        </div>


        <div className='page__darkcontainer'>
          <h3 style={{ gridColumn:'1 / span 2' }}>Article Hub</h3>
          <div>
            <p>Before</p>
            <img src='/wainao-redesign/wainao-a-before.jpg' />
          </div>
          <div>
            <p style={{color:'#F5C157'}}>After</p>
            <img src='/wainao-redesign/wainao-a-after.jpg' />
          </div>
        </div>

        <div className='detail-padding' />

        <div className='page__container'>
            <div className='page__finding'>
              <span>FINDING 1</span>
              <p><b>Disjointed website flow</b></p>
              <p>Confusing user flow and unclear navigation structure caused frustration for users. Key information was buried under several layers of menus.</p>
            </div>
            <div className='page__finding'>
              <span>FINDING 2</span>
              <p><b>Visual inconsistencies and clutter</b></p>
              <p>The lack of a consistent visual hierarchy and the presence of excessive clutter created a distracting and overwhelming user experience, hindering users' ability to focus on critical content and actions.</p>
            </div>
            <div className='page__finding'>
              <span>FINDING 3</span>
              <p><b>Heavy website, slow load times</b></p>
              <p>The website was slow to load due to the heavy assets, inefficient code, and visual clutter.</p>
            </div>
          </div>

          <div className='detail-padding' />

          <div className='page__container'>
            <div>
              <p>Based on our findings, we restructured the website and introduced a new global navigation system. Previously, content across different content formats existed in isolation, making it difficult for users to explore related stories. The new information architecture offers users a clearer overview of both topics and formats, supporting more intuitive browsing and discovery.</p>
            </div>

            <div style={{ gridColumn: 'span 2', border:'0.5px solid #919297' }}>
              <img src='/wainao-redesign/wainao-redesign-wip-1.jpg' />
            </div>
          </div>
        
        <div className='detail-padding' />

        <div className='page__darkcontainer'>
          <h3 style={{ gridColumn:'1 / span 2' }}>Navigation</h3>
          <div>
            <p>Before</p>
            <img src='/wainao-redesign/wainao-b-before.jpg' />
          </div>
          <div>
            <p style={{color:'#F5C157'}}>After</p>
            <img src='/wainao-redesign/wainao-b-after.jpg' />
            <img src='/wainao-redesign/wainao-b-after-2.jpg' />
          </div>
        </div>

        <div style={{ backgroundColor:'#FFE3AA', position:'relative' }}>
          <div
            className='page__horizontalscroll'
            ref={scrollRef}
            onScroll={handleScroll}
          >
            <div><p>Video Story Page</p><img src='/wainao-redesign/wainao-design-3.jpg' /></div>
            <div><p>Editorial Story Page</p><img src='/wainao-redesign/wainao-design-4.jpeg' /></div>
            <div><p>Editorial Subcategory: Special Reports</p><img src='/wainao-redesign/wainao-design-5.jpeg' /></div>
            <div><p>Video Hub</p><img src='/wainao-redesign/wainao-design-6.jpg' /></div>
            <div><p>Video Subcategory: Short-form</p><img src='/wainao-redesign/wainao-design-7.jpg' /></div>
            <div><p>Video Series Hub</p><img src='/wainao-redesign/wainao-design-8.jpg' /></div>
          </div>
          {showTip &&
            (<div className='page__tip'>Scroll right for more <span>→</span></div>)
          }
        </div>
        <div className='detail-padding'/>
        <div className='page__container'>
          <div className='page__text'>
            <p className='page__intro'>The redesign of WHYNOT’s website transformed a fragmented platform into a cohesive, flexible, and user-centered experience. By resolving structural pain points, streamlining navigation, and introducing a scalable design system, we created a site that not only reflects the publication’s bold editorial voice and diverse content formats, but also supports future growth. The improved architecture empowers users to explore stories with greater ease and depth—reinforcing WHYNOT’s mission to inform and connect a global Chinese-speaking audience.</p></div>
        </div>



        

        <div className='detail-padding'/>
        <a href='/' className='nav'>↼ Back</a>
        <div className='detail-padding'/>
      

    </div>
  )
}

export default WhynotWebsite
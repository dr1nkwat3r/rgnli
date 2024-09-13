
import React from 'react';
import './App.scss';
import Carousel from './Carousel';
import ProjectCard from './ProjectCard';
import projects from './projects.json';

const path = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <div style={{ height:'30vh' }}>website. <b>to-dos</b>:
        <ul>
          <li>mobile</li>
          <li>project deets, info texts</li>
        </ul>
      </div>

      {/* <div style={{margin:'0 100px'}}>
        {projects.map((work, i) => (
          <ProjectCard
          key={i}
          title={work.title}
          year={work.year}
          role={work.role}
          description={work.description}
          images={work.images}
          url={work.url}
          awards={work.awards}
          awardLinks={work.awardLinks}
          />
        )
        )}
      </div> */}

      {projects.map((work, i) => (
        <React.Fragment key={i}>
          <div style={{margin:'0 100px'}}>
          <ProjectCard {...work} />
          </div>
          {i === 2 && (
            <Carousel />
          )}
        </React.Fragment>
      ))}

xxx
      {/* <Carousel /> */}

      

    </div>

    
  );
}

export default App;

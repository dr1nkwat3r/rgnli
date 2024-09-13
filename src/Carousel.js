import React from 'react';
import collages from './collages.json';

const path = process.env.PUBLIC_URL;

const Carousel = () => {


  return (
    <div className="carousel-container">
      <div style={{marginLeft:'100px'}}><h3>Collages</h3></div>
      <div className="carousel gallery-gradient">
      {collages.map((collage, i) => (
          <div key={i}>
            <img src={`${path}${collage.image}`} alt={`carousel-${i}`} className="carousel-image" />
            <p><b>{collage.title}</b>&nbsp;&nbsp;&nbsp; {collage.caption}</p>
            </div>
        ))}

        {/* <div><img src={path + '/test-2.jpeg'}/>xxx</div>
        <div><img src={path + '/test-3.jpeg'} />bbb</div>
        <div><img src={path + '/vertical.png'} />ccc</div>
        <div><img src={path + '/test-3.jpeg'} />ddd</div>
        <div><img src={path + '/vertical.png'} />aa</div>
        <div><img src={path + '/test-3.jpeg'} />xx</div>
        <div><img src={path + '/vertical.png'} />xx</div> */}
      </div>
    </div>
  );
};

export default Carousel;


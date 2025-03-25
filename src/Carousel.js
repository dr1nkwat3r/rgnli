import React from 'react';
import { Link } from 'react-router-dom';

import collages from './data/collages.json';
import RightArrow2 from './right-arrow-2.svg';

const path = process.env.PUBLIC_URL;

const Carousel = () => {


  return (
    <div className="carousel-container">
      <div className='container'>
        <h3><Link to={'/editorial-illustrations'}>Editorial Illustrations <img src={RightArrow2} className='right-arrow' /></Link></h3>
      {/* <span>Various editorial illustrations done for WhyNot</span> */}
      </div>
      <div className="carousel gallery-gradient">
      {collages.map((collage, i) => (
        collage.carousel && (<div className='carousel__item' key={i}>
          {collage.type === 'image' ? (
            <img src={`${path}${collage.media}`} alt={`${collage.title}`} className="carousel-image" />
          ) : collage.type === 'video' ? (
            <video playsInline loop muted autoPlay >
              <source src={`${path}${collage.media}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
          <div className='carousel__text'><p><b>{collage.title}</b> &nbsp;({collage.year})</p></div>
        </div>)
        ))}

        <div className='carousel-container__more'><Link to={'/editorial-illustrations'}><img src={RightArrow2} className='right-arrow' /></Link></div>
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


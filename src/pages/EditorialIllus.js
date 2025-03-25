import React from 'react';
import '../AppPages.scss';

import collages from '../data/collages.json';

const path = process.env.PUBLIC_URL;

const EditorialIllus = () => {
  return (
    <div className='detail-page' style={{ minHeight:"100vh"}}>
        <div className='detail-padding' />
        <div className='container'>
            <div className='gallery-grid'>
                <div><h2 className='project__title'>Editorial Illustrations</h2></div>
                {collages.map((collage, i) => (
                <div className='gallery-grid__item' key={i}>
                {collage.type === 'image' ? (
                    <img src={`${path}${collage.media}`} alt={collage.title} />
                ) : collage.type === 'video' ? (
                    <video playsInline loop muted autoPlay >
                    <source src={`${path}${collage.media}`} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                ) : null}
                </div>
                ))}
            </div>


            <div className='detail-padding' />
            <a href='/' style={{ borderBottom:"none" }}>↼ Back</a>
        </div> 
    </div>
  )
}

export default EditorialIllus
import React from 'react';

import collages from '../data/collages.json';

const path = process.env.PUBLIC_URL;

const EditorialIllus = () => {
  return (
    <div className='detail-page detail-page-padding'>
        <div className='detail-padding' />
        {/* <div className='container'> */}
            {/* <div><h2 className='project__title'>Editorial Illustrations</h2></div> */}

                <div className='gallery-grid'>
                    
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
                        <span className='gallery-grid__caption'>
                            {collage.articleLink ?  <a href={collage.articleLink} target='_blank' >{collage.title}</a> : <>{collage.title}</>}
                        </span>
                    </div>
                    ))}

                </div>


            <div className='detail-padding' />
            <a href='/' className='nav'>↼ Back</a>
    </div>
  )
}

export default EditorialIllus
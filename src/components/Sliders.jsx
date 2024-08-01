import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import nature1 from '../source/nature1.png'
import nature2 from '../source/nature2.png'
import nature3 from '../source/nature3.png'
import nature4 from '../source/nature4.png'
import nature5 from '../source/nature5.png'
import '../css/responsiveDesign.css'
const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const photos = [
    { id: 1, url: nature1},
    { id: 2, url:nature2 },
    { id: 3, url: nature3 },
    { id: 4, url:nature4 },
    { id: 5, url: nature5 },
  ];

  return (
    <div >
      {/*  mb-4 mt-24 text-center */}
     <div className="logoDiv ">
     <h1 className=' pigment '>Pigment </h1><h1 className=' soft 
      '>Soft</h1>
     </div>


{/* <img src={nature1} alt="" className="imgSlider" /> */}

      <Slider className='mb-10' {...settings}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img  className='imgSlider' src={photo.url}  />
          </div>
        ))}
      </Slider>





    </div>
  );
};

export default  Sliders;
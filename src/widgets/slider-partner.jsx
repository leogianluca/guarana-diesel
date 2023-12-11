import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderPartner = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      <div className="w-20 h-20">
        <img className="w-full h-full object-scale-down" src='/img/partner/eco050.png' alt="Partner" />
      </div>
      
      <div className="w-20 h-20">
        <img className="w-full h-full object-scale-down" src='/img/partner/eco101.png' alt="Partner" />
      </div>
      
      <div className="w-20 h-20">
        <img className="w-full h-full object-scale-down" src='/img/partner/eco135.png' alt="Partner" />
      </div>
      
      <div className="w-20 h-20">
        <img className="w-full h-full object-scale-down" src='/img/partner/emflora.png' alt="Partner" />
      </div>
      
      <div className="w-20 h-20">
        <img className="w-full h-full object-scale-down" src='/img/partner/grupo_grazioti.jpg' alt="Partner" />
      </div>
      
      <div className="w-20 h-20">
        <img className="w-full h-full object-scale-down" src='/img/partner/ecoriominas.png' alt="Partner" />
      </div>
      
      <div className="w-20 h-20">
        <img className="w-full h-full object-scale-down" src='/img/partner/ecovias_do_araguaia.png' alt="Partner" />
      </div>
      
      <div className="w-20 h-20">
        <img className="w-full h-full object-scale-down" src='/img/partner/portocel.png' alt="Partner" />
      </div>
      
      <div className="w-20 h-20">
        <img className="w-full h-full object-scale-down" src='/img/partner/saae_logo4.png' alt="Partner" />
      </div>
      
      <div className="w-20 h-20">
        <img className="w-full h-full object-scale-down" src='/img/partner/sacyr.png' alt="Partner" />
      </div>
      
      <div className="w-20 h-20">
        <img className="w-full h-full object-scale-down" src='/img/partner/suzano.png' alt="Partner" />
      </div>
    </Slider>
  );
};

export default SliderPartner;
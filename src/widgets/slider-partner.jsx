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
      <div className="w-200 h-200">
        <img src='/img/partner/eco050.png' className="w-full h-full object-fit-contain" />
      </div>
      
      <div className="w-200 h-200">
        <img src='/img/partner/eco101.png' className="w-full h-full object-fit-contain" />
      </div>
      
      <div className="w-200 h-200">
        <img src='/img/partner/eco135.png' className="w-full h-full object-fit-contain" />
      </div>
      
      <div className="w-200 h-200">
        <img src='/img/partner/emflora.png' className="w-full h-full object-fit-contain" />
      </div>
      
      <div className="w-200 h-200">
        <img src='/img/partner/grupo_grazioti.jpg' className="w-full h-full object-fit-contain" />
      </div>
      
      <div className="w-200 h-200">
        <img src='/img/partner/ecoriominas.png' className="w-full h-full object-fit-contain" />
      </div>
      
      <div className="w-200 h-200">
        <img src='/img/partner/ecovias_do_araguaia.png' className="w-full h-full object-fit-contain" />
      </div>
      
      <div className="w-200 h-200">
        <img src='/img/partner/portocel.png' className="w-full h-full object-fit-contain" />
      </div>
      
      <div className="w-200 h-200">
        <img src='/img/partner/saae_logo4.png' className="w-full h-full object-fit-contain" />
      </div>
      
      <div className="w-200 h-200">
        <img src='/img/partner/sacyr.png' className="w-full h-full object-fit-contain" />
      </div>
      
      <div className="w-200 h-200">
        <img src='/img/partner/suzano.png' className="w-full h-full object-fit-contain" />
      </div>
    </Slider>
  );
};

export default SliderPartner;
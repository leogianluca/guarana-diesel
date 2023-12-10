import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderPartner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div style={{ backgroundImage: `url('/img/partner/eco101.png')` }} />
      <div style={{ backgroundImage: `url('/img/background.png')` }} />
      <div style={{ backgroundImage: `url('/img/background.png')` }} />
      <div style={{ backgroundImage: `url('/img/background.png')` }} />
      <div style={{ backgroundImage: `url('/img/background.png')` }} />
      <div style={{ backgroundImage: `url('/img/background.png')` }} />

      <div style={{ backgroundImage: `url('/img/partner/eco101.png')` }} />
      <div style={{ backgroundImage: `url('/img/background.png')` }} />
      <div style={{ backgroundImage: `url('/img/background.png')` }} />
      <div style={{ backgroundImage: `url('/img/background.png')` }} />
      <div style={{ backgroundImage: `url('/img/background.png')` }} />
      <div style={{ backgroundImage: `url('/img/background.png')` }} />
    </Slider>
  );
};

export default SliderPartner;
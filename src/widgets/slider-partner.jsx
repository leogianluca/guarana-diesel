import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
  // Adicione mais itens aqui
];

const SliderPartner = () => {
  const settings = {
    dots: true, // Exibe os pontos de paginação
    infinite: true, // Define se o carrossel é infinito
    speed: 500, // Velocidade da transição entre os itens
    slidesToShow: 3, // Número de itens exibidos por vez
    slidesToScroll: 1, // Número de itens a serem rolados ao avançar/retroceder
    autoplay: true, // Configura o carrossel para rodar continuamente
    autoplaySpeed: 2000, // Intervalo de tempo entre cada rotação (em milissegundos)
  };

  return (
    <Slider {...settings}>
      {items.map(item => (
        <div key={item.id}>{item.text}</div>
      ))}
    </Slider>
  );
};

export default SliderPartner;

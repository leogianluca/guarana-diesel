import React, { useEffect, useState } from 'react';

const GoogleMap = () => {
  const [mapWidth, setMapWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setMapWidth(window.innerWidth);
    };

    // Atualize a largura do mapa quando a janela for redimensionada
    window.addEventListener('resize', handleResize);

    // Remova o ouvinte de redimensionamento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mapHeight = Math.floor(mapWidth * 0.24375); // Ajuste o valor para definir a proporção de altura desejada

  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.7394122919486!2d-40.27059931182624!3d-19.681119854644297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7c7ca678e5683%3A0x6108f33f0f79d322!2sR.%20Joaquim%20Viana%2C%2065%20-%20Guaran%C3%A3%2C%20Aracruz%20-%20ES%2C%2029195-460!5e0!3m2!1spt-BR!2sbr!4v1704662398280!5m2!1spt-BR!2sbr"
        style={{ width: '100%', height: `${mapHeight}px`, border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;

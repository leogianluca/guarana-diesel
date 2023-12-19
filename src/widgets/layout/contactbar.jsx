import React from 'react';

const Box = () => {
  const boxStyle = {
    height: '2rem',
    backgroundColor: '#0044d0', 
  };

  return (
    <div className="py-2 pr-4 md:pr-8 flex justify-end hidden md:flex" style={boxStyle}>
    <p className="mr-4 text-sm ml-auto">
      <span className="text-white">+55 (27) 9 9758-5511</span>
    </p>
    <p className="mr-4 text-sm">
      <span className="text-white">+55 (27) 3276-1288</span>
    </p>
    <p className="text-sm">
      <span className="text-white">contato@guaranadiesel.com</span>
    </p>
  </div>
  );
};

export default Box;
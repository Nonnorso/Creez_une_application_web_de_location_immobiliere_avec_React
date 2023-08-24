import React from 'react';

const LogementPresentation = ({ title, location }) => {
  return (
    <div className="logementPresentation">
      <h2 className='RedText'>{title}</h2>
      <p className='RedText SmallText'>{location}</p>
    </div>
  );
};

export default LogementPresentation;
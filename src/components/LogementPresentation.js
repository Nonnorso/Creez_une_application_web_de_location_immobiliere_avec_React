import React from 'react';

const LogementPresentation = ({ title, location }) => {
  return (
    <div className="logement-presentation">
      <p>{title}</p>
      <p>{location}</p>
    </div>
  );
};

export default LogementPresentation;
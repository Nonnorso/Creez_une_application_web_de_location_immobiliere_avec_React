import React from 'react';

const LogementHost = ({ host }) => {
  return (
    <div className="logement-host">
      <p>{host.name}</p>
      <img src={host.picture} alt="Host" />
    </div>
  );
};

export default LogementHost;
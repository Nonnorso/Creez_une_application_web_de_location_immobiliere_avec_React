import React from 'react';

const LogementTags = ({ tags }) => {
  return (
    <div className="logement-tags">
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogementTags;
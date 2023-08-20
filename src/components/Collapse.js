import React, { useState } from 'react';

const Collapse = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapseBtn" onClick={toggleCollapse}>
        {title}
        {icon && <span className="collapseIcon">{icon}</span>}
      </div>
      {isOpen && (
        <div className="collapseTxt">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
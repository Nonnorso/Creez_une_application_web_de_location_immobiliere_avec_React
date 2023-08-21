import React, { useState } from 'react';

const Collapse = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className={`collapseOpen FlexColumn`}>
        <div className="collapseBtn FlexRow">
          <p className="WhiteText MediumSizeText">{title}</p>
          {icon && (
            <span className={`collapseIcon ${isOpen ? 'open' : ''}`} 
              onClick={toggleCollapse}>
              {icon}
            </span>)}
        </div>
        {isOpen && (
          <div className={`collapseTxtContainer ${isOpen ? 'open' : ''}`}>
            <p className={`collapseTxt MediumSizeText RedText`}>
              {content}
            </p>
          </div>
        )}
      </div>
  );
};

export default Collapse;
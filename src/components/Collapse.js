import React, { useState } from 'react';


const Collapse = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapseOpen FlexColumn`}>
      <div className="collapseBtn FlexRow" onClick={toggleCollapse}>
        <p className="WhiteText MediumSizeText">{title}</p>
        {icon && (
          <span className={`collapseIcon ${isOpen ? 'open' : ''}`}>
            {icon}
          </span>
        )}
      </div>
      <div className={`collapseTxtContainer ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <div className={`collapseTxt MediumSizeText RedText`}>
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
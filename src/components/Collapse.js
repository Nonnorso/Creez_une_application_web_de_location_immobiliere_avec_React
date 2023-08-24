import React, { useState } from 'react';

const Collapse = ({ title, parent, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const EquipmentsList = content.split('\n').map((line, index) => (
    <li key={index}>{line}</li>
  ));

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
          <div className={`collapseTxt SmallText RedText`}>
            <ul>
              {EquipmentsList}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
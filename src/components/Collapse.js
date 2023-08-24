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
          <div className={`collapseTxt ${title === "Équipements" ? "listStyle" : ""} SmallText RedText`}>
            {title === "Équipements" ? (
              <ul>
                {content.split(' ').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              content
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
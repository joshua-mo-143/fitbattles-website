import React, {useState} from 'react';

const Accordion = ({ title, content }) => {

    // set update var name and function updater name
  const [isActive, setIsActive] = useState(false);

  return (
    <>
        <div className="accordion-item">
          <div 
          className="accordion-title"
        //  update state on click
          onClick={() => setIsActive(!isActive)}
          >
            <div>{title}</div>
        {/* if active return +, if not return - */}
            <div>{isActive ? '+' : '-'}</div>
          </div>
          {/* if active, return accordion content */}
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
        </>
  );
};

export default Accordion;
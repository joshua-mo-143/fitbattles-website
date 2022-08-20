import React from 'react';
import Accordion from './Accordion';
import { accordionData } from '../data';

const AccordionContainer = () => {

  return (
    <div class="accordion-container">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default AccordionContainer;
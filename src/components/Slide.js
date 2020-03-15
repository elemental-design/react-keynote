import React from 'react';

const Slide = (props) => (
  <slide {...props} />
);

const SlideTitle = (props) => (
  <slide_title {...props} />
);
const SlideBody = (props) => (
  <slide_body {...props} />
);

Slide.Title = SlideTitle;
Slide.Body = SlideBody;

export default Slide;


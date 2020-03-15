// import themeXml from './themeXml';
// import { render } from 'react-keynote';
import path from 'path';
import React from 'react';

import { render, Document, Slide, Text } from '../../../';

render((
  <Document title="Test" theme="White">
    <Slide title="Hello World" />
    <Slide>
      <Slide.Title>
        Hello World Page 2...
      </Slide.Title>
      <Slide.Body>
        Subtitle
      </Slide.Body>
    </Slide>
    <Slide>
      <Slide.Title>
        Hello World Page 3...
      </Slide.Title>
      <Slide.Body>
        Hello World. This is the text body...
      </Slide.Body>
    </Slide>
  </Document>
));

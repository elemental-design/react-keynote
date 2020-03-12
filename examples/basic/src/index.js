// import themeXml from './themeXml';
// import { render } from 'react-keynote';
import path from 'path';
import React from 'react';

import { render, Document, Slide, Text } from '../../../';

render((
  <Document title="Example">
    <Slide>
      <Text style={{ width: 100, color: '#1efa5a', textAlign: 'center' }}>
        Hello World
      </Text>
    </Slide>
  </Document>
), path.resolve(__dirname, '../output/example2.pptx'));

import React from 'react';

const Document = ({ style = { width: 960, height: 540 }, ...props }) => (
  <document style={style} {...props} />
);

export default Document;


import path from 'path';
import fs from 'fs';
import officegen from 'officegen';

import renderTree from './renderTree';





// pptx.setSlideSize(1440, 900, 'screen16x10', 0, 0);



// slide.setTitle('Welcome!');

// slide.setSubTitle('This is the subtext.');



function finalize(filePath, pptx) {
  const out = fs.createWriteStream(path.resolve(__dirname, filePath));

  out.on('error', function (err) {
    console.log(err);
  })

  pptx.generate(out);
}

const render = async (jsx, outputFile, options) => {
  const pptx = officegen({
    type: 'pptx',
    ...options,
  });

  // pptx.setDocTitle('Test Keynote');
  // pptx.setSlideSize(960, 540, 'screen16x9', 0, 0);

  // const slide = pptx.makeTitleSlide();

  // slide.setTitle('Welcome!');
  // slide.setSubTitle('This is the subtext.');

  // const slide2 = pptx.makeNewSlide();

  // slide2.addShape('rect', {
  //   fill: { type: 'solid', color: '00ff37', alpha: 50 },
  //   cx: 50,
  //   cy: 50,
  //   line: '000000',
  //   y: 50,
  //   x: 50
  // });

  await renderTree(jsx, pptx);

  finalize(outputFile, pptx);
};

export default render;

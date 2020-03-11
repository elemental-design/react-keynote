"use strict";

var _pptxgenjs = _interopRequireDefault(require("pptxgenjs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 1. Create a new Presentation
const pptx = new _pptxgenjs.default();
pptx.layout = 'LAYOUT_16x9'; // 2. Add a Slide

const slide = pptx.addSlide(); // 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide

const textboxText = 'Welcome!';
const textboxOpts = {
  x: 0,
  y: 0,
  color: '000000',
  fontSize: 80
};
slide.addText(textboxText, textboxOpts); // 4. Save the Presentation

pptx.writeFile(_path.default.resolve(__dirname, '../output/Sample Presentation.pptx'));
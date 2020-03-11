import pptxgen from 'pptxgenjs';
import path from 'path';

// 1. Create a new Presentation
const pptx = new pptxgen();

pptx.layout = 'LAYOUT_16x9';

// 2. Add a Slide
const slide = pptx.addSlide();

// 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide
const textboxText = 'Welcome!';
const textboxOpts = { x: 0, y: 0, color: '000000', fontSize: 80 };
slide.addText(textboxText, textboxOpts);

// 4. Save the Presentation
pptx.writeFile(path.resolve(__dirname, '../output/Sample Presentation.pptx'));
